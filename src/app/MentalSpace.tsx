import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion } from "motion/react";
import { Move } from "lucide-react";
import Mooca from "./Mooca";
import type { Topic } from "./content";
import { clampPosition, compactAnchorY, compactFieldHeight, compactTopicRows, createCompactPositions, getTopicBounds, type TopicPositions } from "./spatial";

export function TopicLabel({
  label,
  className,
  thaiTone = "body",
}: {
  label: string;
  className?: string;
  thaiTone?: "body" | "display";
}) {
  const parts = label.split(/([\u0E00-\u0E7F]+)/g);
  return (
    <span className={`[overflow-wrap:anywhere] ${className ?? ""}`}>
      {parts.map((part, index) =>
        /^[\u0E00-\u0E7F]+$/.test(part)
          ? <span key={index} lang="th" className={`font-thai font-thai-${thaiTone}`}>{part}</span>
          : part
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * MentalSpace — the hero spatial interaction.
 * Topics are draggable chips in a calm field; YOU sits at center.
 * Closeness to center reads as "more present / heavier" through warmth
 * and scale — never a number.
 * ------------------------------------------------------------------ */
export default function MentalSpace({
  topics,
  positions,
  setPositions,
  closestId,
  compactLayoutKey,
  setCompactLayoutKey,
}: {
  topics: Topic[];
  positions: TopicPositions;
  setPositions: Dispatch<SetStateAction<TopicPositions>>;
  closestId: string | null;
  compactLayoutKey: string;
  setCompactLayoutKey: (key: string) => void;
}) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [compactHeight, setCompactHeight] = useState<number>();
  const [compactRowCount, setCompactRowCount] = useState(0);
  const anchorY = topics.length >= 9 && size.w < 640 && compactRowCount > 0
    ? compactAnchorY(compactRowCount) : size.h / 2;
  const [dragging, setDragging] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const activePointer = useRef<{ id: string; pointerId: number } | null>(null);

  const updateSize = useCallback(() => {
    const el = fieldRef.current;
    if (el) setSize({ w: el.clientWidth, h: el.clientHeight });
  }, []);

  useEffect(() => {
    if (!fieldRef.current) return;
    const el = fieldRef.current;
    const ro = new ResizeObserver(updateSize);
    ro.observe(el);
    updateSize();
    return () => ro.disconnect();
  }, [updateSize]);

  // Per-chip elements, so we can keep each one fully inside the area on all
  // four sides — accounting for that chip's own width/height, not a flat limit.
  const chipEls = useRef<Record<string, HTMLButtonElement | null>>({});
  // On narrow screens, arrange crowded topic chips in measured rows. The
  // desktop field keeps its free spatial layout and user positions.
  useLayoutEffect(() => {
    if (size.w <= 0) return;
    if (size.w >= 640 || topics.length < 4) {
      if (compactLayoutKey) setCompactLayoutKey("");
      return;
    }
    const field = fieldRef.current;
    if (!field) return;
    const measure = (id: string) => chipEls.current[id]?.offsetWidth || 120;
    if (topics.length >= 9) {
      const rowCount = compactTopicRows(topics, size.w, measure).length + (topics.some(({ id }) => id === "else") ? 1 : 0);
      if (compactRowCount !== rowCount) setCompactRowCount(rowCount);
      const nextHeight = compactFieldHeight(rowCount) + 2;
      if (compactHeight !== nextHeight) setCompactHeight(nextHeight);
      if (field.clientHeight !== nextHeight - 2) return;
    }
    const key = `${size.w}:${size.h}:${topics.map(({ id }) => id).join(",")}`;
    if (compactLayoutKey === key) return;
    setCompactLayoutKey(key);

    const next = createCompactPositions(
      topics,
      field.clientWidth,
      measure,
      field.clientHeight
    );
    setPositions((previous) => ({ ...previous, ...next }));
  }, [size, topics, positions, setPositions, compactLayoutKey, setCompactLayoutKey, compactHeight, compactRowCount]);

  // Max normalized offset from center for a given chip, per axis. Uses the
  // SAME real edge on every side (field half minus the chip's half-size and a
  // little padding), so left/right is contained exactly like top/bottom.
  const boundsFor = useCallback((id: string) => {
    const field = fieldRef.current;
    if (!field) return { mx: 44 / 100, my: 44 / 100 };
    const fw = field.clientWidth;
    const fh = field.clientHeight;
    const pad = 8;
    const cw = chipEls.current[id]?.offsetWidth || 96;
    const ch = chipEls.current[id]?.offsetHeight || 44;
    return getTopicBounds(fw, fh, cw, ch, pad, anchorY);
  }, [anchorY]);

  useLayoutEffect(() => {
    if (size.w <= 0 || size.h <= 0) return;
    setPositions((current) => {
      let next = current;
      for (const { id } of topics) {
        const position = current[id];
        if (!position) continue;
        const clamped = clampPosition(position, boundsFor(id));
        if (clamped.nx !== position.nx || clamped.ny !== position.ny) {
          if (next === current) next = { ...current };
          next[id] = clamped;
        }
      }
      return next;
    });
  }, [size, topics, boundsFor, setPositions]);

  const pointerToNorm = useCallback(
    (clientX: number, clientY: number, id: string) => {
      const el = fieldRef.current;
      if (!el) return { nx: 0, ny: 0 };
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return { nx: 0, ny: 0 };
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + el.clientTop + anchorY;
      const bounds = boundsFor(id);
      const nx = (clientX - cx - offsetRef.current.x) / rect.width;
      const ny = (clientY - cy - offsetRef.current.y) / rect.height;
      return clampPosition({ nx, ny }, bounds);
    },
    [boundsFor, anchorY]
  );

  const startDrag = (id: string, e: ReactPointerEvent) => {
    if (activePointer.current || (e.button !== undefined && e.button !== 0)) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    activePointer.current = { id, pointerId: e.pointerId };
    const el = fieldRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + el.clientTop + anchorY;
      const p = positions[id] ?? { nx: 0, ny: 0 };
      const chipX = cx + p.nx * rect.width;
      const chipY = cy + p.ny * rect.height;
      offsetRef.current = { x: e.clientX - chipX, y: e.clientY - chipY };
    }
    setDragging(id);
  };

  const onMove = (e: ReactPointerEvent) => {
    const active = activePointer.current;
    if (!active || active.pointerId !== e.pointerId) return;
    const n = pointerToNorm(e.clientX, e.clientY, active.id);
    setPositions((prev) => ({ ...prev, [active.id]: n }));
  };

  const endDrag = (e: ReactPointerEvent) => {
    if (!activePointer.current || activePointer.current.pointerId !== e.pointerId) return;
    activePointer.current = null;
    offsetRef.current = { x: 0, y: 0 };
    setDragging(null);
  };

  const ringSizes = size.w / Math.max(size.h, 1) >= 1.25
    ? [100, 87, 74, 61, 48, 35, 22]
    : [138, 120, 102, 84, 66, 48, 30];

  // Keyboard nudging for accessibility — kept inside the same bounds.
  const nudge = (id: string, dx: number, dy: number) => {
    const bounds = boundsFor(id);
    setPositions((prev) => {
      const p = prev[id] ?? { nx: 0, ny: 0 };
      return {
        ...prev,
        [id]: {
          ...clampPosition({ nx: p.nx + dx, ny: p.ny + dy }, bounds),
        },
      };
    });
  };

  return (
    <div
      ref={fieldRef}
      data-dense={topics.length >= 4}
      data-extra-dense={topics.length >= 9}
      role="group"
      aria-label="Topics to move closer to or farther from you"
      aria-describedby="spatial-instructions"
      onPointerMove={onMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
      className="mental-space stage-content relative mx-auto aspect-square w-full max-w-[560px] touch-none select-none overflow-clip rounded-[28px] border border-border sm:aspect-[16/10] sm:max-w-[760px]"
      style={{
        height: topics.length >= 9 && size.w > 0 && size.w < 640 ? compactHeight : undefined,
        background:
          "radial-gradient(65% 65% at 50% 46%, var(--paper) 0%, var(--space) 78%, var(--space-edge) 100%)",
        boxShadow: "inset 0 1px 40px rgba(var(--foreground-rgb),5%)",
      }}
    >
      {/* Keep every ring circular and distribute each set evenly from the
          frame to the center at either aspect ratio. */}
      {size.w > 0 && ringSizes.map((r, i) => (
        <div
          key={r}
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square rounded-full border"
          style={{
            width: Math.round(Math.max(size.w, size.h) * r / 100),
            top: anchorY,
            transform: "translate(-50%, -50%)",
            borderColor: i === ringSizes.length - 1 ? "rgba(var(--primary-rgb),8%)" : "rgba(var(--foreground-rgb),5%)",
          }}
        />
      ))}

      {/* connector line from the active topic to the anchor — reinforces that
          distance is the meaning (closer = heavier). Only while engaged. */}
      {size.w > 0 && (dragging || hovered) && (() => {
        const activeId = (dragging ?? hovered) as string;
        const p = positions[activeId] ?? { nx: 0, ny: 0 };
        const ax = size.w / 2 + p.nx * size.w;
        const ay = anchorY + p.ny * size.h;
        return (
          <svg className="pointer-events-none absolute inset-0" width={size.w} height={size.h} aria-hidden>
            <line
              x1={size.w / 2}
              y1={anchorY}
              x2={ax}
              y2={ay}
              stroke="var(--primary)"
              strokeWidth={2}
              strokeDasharray="2 6"
              strokeLinecap="round"
              opacity="45%"
            />
          </svg>
        );
      })()}

      {/* Mooca IS the "you" anchor — the calm reference point everything
          is weighed against. Non-interactive so it never blocks a drag.
          The mascot is centered exactly on the point; the label floats below. */}
      <div className="pointer-events-none absolute left-1/2 z-[5] -translate-x-1/2 -translate-y-1/2" style={{ top: anchorY }}>
        {/* soft glow, centered on the point */}
        <div
          className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb),12%), transparent 70%)" }}
        />
        {/* mascot, centered on the point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Mooca expression="calm" size={72} reacting={!!(dragging || hovered)} />
        </div>
        {/* "you" label, floating just beneath the mascot */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[44px] whitespace-nowrap text-[11px] font-semibold uppercase leading-[16px] tracking-[2px] text-muted-foreground">
          you
        </span>
      </div>

      {size.w > 0 &&
        topics.map((t) => {
          const p = positions[t.id] ?? { nx: 0, ny: 0 };
          const dist = Math.hypot(p.nx, p.ny);
          // closeness 0 (far) .. 1 (at center)
          const { mx, my } = boundsFor(t.id);
          const closeness = Math.round(Math.max(0, Math.min(1, 1 - dist / Math.max(1 / 100, Math.hypot(mx, my)))) * 100);
          const isDrag = dragging === t.id;
          const isHover = hovered === t.id;
          const isClosest = closestId === t.id;
          const x = size.w / 2 + p.nx * size.w;
          const y = anchorY + p.ny * size.h;
          // interpolate quiet → subtle brand warmth as it nears the anchor
          const warm = closeness;
          const baseShadow = `0 ${Math.round(2 + closeness * 5 / 100)}px ${Math.round(8 + closeness * 14 / 100)}px rgba(var(--foreground-rgb),${8 + Math.round(closeness * 6 / 100)}%)`;
          const ring = isClosest ? ", 0 0 0 2px var(--space-ring)" : "";
          return (
            <motion.button
              key={t.id}
              ref={(el) => {
                chipEls.current[t.id] = el;
              }}
              type="button"
              aria-label={`${t.label}. Move closer to you if it feels more present, or away if it feels less present. Use arrow keys to move.${isClosest ? " Currently closest to you." : ""}`}
              aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight"
              title={t.label}
              onPointerDown={(e) => startDrag(t.id, e)}
              onPointerEnter={() => setHovered(t.id)}
              onPointerLeave={() => setHovered((h) => (h === t.id ? null : h))}
              onFocus={() => setHovered(t.id)}
              onBlur={() => setHovered((h) => (h === t.id ? null : h))}
              onKeyDown={(e) => {
                const step = 5 / 100;
                if (e.key === "ArrowUp") { e.preventDefault(); nudge(t.id, 0, -step); }
                else if (e.key === "ArrowDown") { e.preventDefault(); nudge(t.id, 0, step); }
                else if (e.key === "ArrowLeft") { e.preventDefault(); nudge(t.id, -step, 0); }
                else if (e.key === "ArrowRight") { e.preventDefault(); nudge(t.id, step, 0); }
              }}
              // Center the chip on (x, y) via Motion's OWN transform so the
              // -50%/-50% offset isn't clobbered by the animated scale.
              animate={{ left: Math.round(x), top: Math.round(y), x: "-50%", y: "-50%" }}
              transition={
                isDrag
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 300, damping: 28 }
              }
              className="accessibility-focus mental-space-chip absolute z-10 flex max-w-[320px] cursor-grab items-center gap-2 rounded-full px-5 py-3 text-[15px] font-semibold leading-[22px] active:cursor-grabbing"
              style={{
                background: `color-mix(in oklab, var(--card), var(--heavy) ${Math.round(warm * 14 / 100)}%)`,
                color: "var(--foreground)",
                border: `2px solid ${isClosest ? "var(--primary)" : `color-mix(in oklab, var(--border), var(--heavy) ${Math.round(warm * 55 / 100)}%)`}`,
                boxShadow: isDrag
                  ? `var(--shadow-lift)${ring}`
                  : `${baseShadow}${ring}`,
                zIndex: isDrag ? 30 : Math.round(10 + closeness * 10),
              }}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full transition-colors"
                style={{ background: `color-mix(in oklab, var(--muted-foreground), var(--primary) ${warm}%)` }}
              />
              <TopicLabel
                label={t.label}
                className={t.id === "else" ? "mental-space-label block max-w-[280px] truncate text-left" : "mental-space-label whitespace-nowrap"}
              />
              {/* grab affordance — quiet by default, clearer on hover/drag */}
              <Move
                className="h-[14px] w-[14px] shrink-0 transition-opacity duration-200"
                strokeWidth={2}
                style={{ opacity: isDrag || isHover ? "75%" : "30%" }}
                aria-hidden
              />
            </motion.button>
          );
        })}

      {/* affordance hint */}
      <div id="spatial-instructions" className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[12px] leading-[18px] text-muted-foreground/70">
        Drag closer to feel heavier · further to feel lighter
      </div>
    </div>
  );
}
