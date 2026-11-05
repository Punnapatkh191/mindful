import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Mooca as MoocaMascot } from "@/imports/Mooca";

/* ------------------------------------------------------------------ *
 * Mooca — the real Ooca / mindfull design-system mascot. We map the
 * three gentle moments of this experience onto the DS mascot variants,
 * and give it the same soft float-in the rest of the UI uses.
 * ------------------------------------------------------------------ */
const MOOCA_VARIANT = {
  welcome: "Happy Mooca with Sunny",
  calm: "Mooca hugging sunny",
  support: "Mooca Thanks!",
} as const;

// The DS mascot's "M" box is 199×180px, but every pose is drawn with a
// different amount of empty space inside it. Rather than hand-guess offsets,
// we measure where the artwork actually sits and auto-fit it: each pose is
// scaled to fill the same square and centered exactly.
const MOOCA_FILL = 94 / 100; // Keep a small, even inset inside the mascot footprint.

export default function Mooca({
  expression = "welcome",
  size = 128,
  reacting = false,
}: {
  expression?: "welcome" | "calm" | "support";
  size?: number;
  // When true, Mooca gives a small attentive lean (e.g. a topic is being
  // dragged toward it, or a fresh selection). Returns to idle smoothly.
  reacting?: boolean;
}) {
  const measureRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<{ scale: number; tx: number; ty: number } | null>(null);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    // Union the bounding boxes of every rendered SVG to find the artwork's
    // true visual bounds (the box itself has padding baked in per pose).
    const host = el.getBoundingClientRect();
    const svgs = el.querySelectorAll("svg");
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    svgs.forEach((s) => {
      const r = s.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) return;
      minX = Math.min(minX, r.left - host.left);
      minY = Math.min(minY, r.top - host.top);
      maxX = Math.max(maxX, r.right - host.left);
      maxY = Math.max(maxY, r.bottom - host.top);
    });
    if (!Number.isFinite(minX)) return;
    // Convert measured (possibly already-scaled) bounds back to native units,
    // so re-measuring self-corrects regardless of the transform in place.
    const applied = fit ? fit.scale : 1;
    const nMinX = minX / applied, nMinY = minY / applied;
    const nMaxX = maxX / applied, nMaxY = maxY / applied;
    const contentW = nMaxX - nMinX;
    const contentH = nMaxY - nMinY;
    const scale = (size * MOOCA_FILL) / Math.max(contentW, contentH);
    const cx = (nMinX + nMaxX) / 2;
    const cy = (nMinY + nMaxY) / 2;
    // Place the native box so the artwork's center lands at the square's center.
    const next = { scale, tx: size / 2 - cx * scale, ty: size / 2 - cy * scale };
    setFit((prev) =>
      prev &&
      Math.abs(prev.scale - next.scale) < 1 &&
      Math.abs(prev.tx - next.tx) < 1 &&
      Math.abs(prev.ty - next.ty) < 1
        ? prev
        : next
    );
  }, [expression, size]);

  return (
    <motion.div
      role="img"
      aria-label="Mooca, your gentle companion"
      initial={{ scale: 1, opacity: 0 }}
      animate={{ scale: 1, opacity: fit ? 1 : 0 }}
      transition={{ duration: 600 / 1000, ease: "easeOut" }}
      // Square footprint so every pose occupies the same space and centers identically.
      className="relative overflow-visible"
      style={{ width: size, height: size }}
    >
      {/* Aliveness is built from coherent, non-distorting transforms that pivot
          at Mooca's feet — the whole figure stays intact (no limb detaches, no
          up/down "sticker" float). Two desynced layers (a slow breath and a
          slower sway) keep the loop from feeling mechanical. On interaction she
          gives a small attentive lean, then settles back to idle. */}
      <motion.div
        className="absolute left-0 top-0"
        style={{ transformOrigin: "50% 100%", width: size, height: size }}
        // Sway + attentive lean (rotation around the feet). Rotation is the
        // vestibular-sensitive part, so it's the piece that reduced-motion drops.
        animate={
          reduce
            ? { rotate: 0 }
            : reacting
              ? { rotate: -2, scale: 1 }
              : { rotate: [-1, 1, -1], scale: 1 }
        }
        transition={
          reacting || reduce
            ? { duration: 500 / 1000, ease: "easeOut" }
            : { duration: expression === "welcome" ? 5 : 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <motion.div
          className="absolute left-0 top-0"
          style={{ transformOrigin: "50% 100%", width: size, height: size }}
          // A one-pixel breathing motion keeps the mascot lively without changing its size.
          animate={{ y: reduce ? 0 : [0, -1, 0] }}
          transition={reduce ? { duration: 0 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            ref={measureRef}
            style={{
              transform: fit
                ? `translate(${Math.round(fit.tx)}px, ${Math.round(fit.ty)}px) scale(${fit.scale})`
                : "scale(1)",
              transformOrigin: "top left",
            }}
          >
            <MoocaMascot mooca={MOOCA_VARIANT[expression]} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
