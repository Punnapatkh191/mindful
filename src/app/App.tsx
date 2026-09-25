import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Move } from "lucide-react";
import { Mooca as MoocaMascot } from "@/imports/Mooca";
import logoPaths from "@/imports/Shapes-2/svg-6gvzelz5ub";

/* ------------------------------------------------------------------ *
 * Logo — the "mindfull" logotype from the Ooca design system, color
 * variant (teal wordmark + blue accents), adapted for the light header.
 * ------------------------------------------------------------------ */
function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 191 37.1899"
      fill="none"
      role="img"
      aria-label="mindfull"
      className={className}
    >
      <g>
        <path d={logoPaths.p31c7a600} fill="#00C4B3" />
        <path d={logoPaths.p1d2f8e80} fill="#00C4B3" />
        <path d={logoPaths.p287b9000} fill="#00C4B3" />
        <path d={logoPaths.p210a1d00} fill="#00C4B3" />
        <path d={logoPaths.p3ed24000} fill="#00C4B3" />
        <path d={logoPaths.pcca0e00} fill="#00C4B3" />
        <path d={logoPaths.pa44d200} fill="#00C4B3" />
        <path d={logoPaths.p3e084880} fill="#1F77DF" />
        <path d={logoPaths.p3eacf100} fill="#1F77DF" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * What's Your Mind Carrying? — a 2-minute Ooca reflection experience
 * A calm companion journey: Intro → Notice → Weigh → Focus → Insight.
 * Never scores, diagnoses, or classifies — it only reflects the
 * person's own input back to them.
 * ------------------------------------------------------------------ */

type Stage = "intro" | "notice" | "weigh" | "focus" | "insight" | "complete";

type Topic = { id: string; label: string };

const TOPICS: Topic[] = [
  { id: "work", label: "Work" },
  { id: "relationships", label: "Relationships" },
  { id: "money", label: "Money" },
  { id: "family", label: "Family" },
  { id: "future", label: "Future" },
  { id: "myself", label: "Myself" },
  { id: "else", label: "Something else" },
];

const REASONS = [
  { id: "next", label: "Not knowing what comes next" },
  { id: "figured", label: "Feeling like I should have it figured out" },
  { id: "control", label: "Feeling out of control" },
  { id: "toomuch", label: "There's just too much to think about" },
  { id: "unsure", label: "I'm not sure" },
];

/* Deterministic, reflective insight copy. Keyed topic → reason,
   with warm topic-level fallbacks so every path lands somewhere true. */
const INSIGHTS: Record<string, Record<string, [string, string]>> = {
  future: {
    next: ["Maybe it's not the future itself.", "Maybe it's the uncertainty around it."],
    figured: ["Maybe it's not the future itself.", "Maybe it's the pressure to already know the way."],
    control: ["Maybe it's not the future itself.", "Maybe it's not being able to hold every outcome."],
  },
  work: {
    toomuch: ["Maybe it's not everything you need to do.", "Maybe it's how much you're trying to hold at once."],
    control: ["Maybe it's not the work itself.", "Maybe it's how little of it feels yours to decide."],
    figured: ["Maybe it's not the work itself.", "Maybe it's the belief that you should be further along."],
  },
  relationships: {
    control: ["Maybe it's not the relationship itself.", "Maybe it's the feeling that you can't control what happens next."],
    next: ["Maybe it's not the relationship itself.", "Maybe it's not knowing where it's headed."],
    toomuch: ["Maybe it's not the relationship itself.", "Maybe it's everything you're carrying into it at once."],
    figured: ["Maybe it's not the relationship itself.", "Maybe it's the sense that you should already know how to hold it."],
  },
  money: {
    toomuch: ["Maybe it's not the money itself.", "Maybe it's everything you're trying to figure out around it."],
    control: ["Maybe it's not the money itself.", "Maybe it's the feeling that it's out of your hands."],
    next: ["Maybe it's not the money itself.", "Maybe it's not knowing what's ahead."],
    figured: ["Maybe it's not the money itself.", "Maybe it's the pressure to already have it sorted."],
  },
  family: {
    control: ["Maybe it's not your family itself.", "Maybe it's the parts you can't hold together on your own."],
    toomuch: ["Maybe it's not your family itself.", "Maybe it's everything you're trying to carry for everyone."],
    next: ["Maybe it's not your family itself.", "Maybe it's not knowing what comes next for them."],
    figured: ["Maybe it's not your family itself.", "Maybe it's the feeling that you should have it handled."],
  },
  myself: {
    control: ["Maybe it's not you.", "Maybe it's how little of this has felt like yours to steer."],
    toomuch: ["Maybe it's not you.", "Maybe it's how much you've been holding at once."],
    next: ["Maybe it's not you.", "Maybe it's not knowing who you're becoming next."],
    figured: ["Maybe it's not you.", "Maybe it's the pressure to already have yourself figured out."],
  },
};

const TOPIC_FALLBACK: Record<string, string> = {
  work: "work",
  relationships: "this relationship",
  money: "money",
  family: "family",
  future: "the future",
  myself: "yourself",
  else: "this",
};

function buildInsight(topicId: string, reasonId: string): [string, string] {
  const byTopic = INSIGHTS[topicId];
  if (byTopic && byTopic[reasonId]) return byTopic[reasonId];
  const subject = TOPIC_FALLBACK[topicId] ?? "this";
  // Reason-shaped fallback that still reads as a gentle reframe.
  switch (reasonId) {
    case "next":
      return [`Maybe it's not ${subject}.`, "Maybe it's not knowing what comes next."];
    case "figured":
      return [`Maybe it's not ${subject}.`, "Maybe it's the pressure to already have it figured out."];
    case "control":
      return [`Maybe it's not ${subject}.`, "Maybe it's the part you can't control."];
    case "toomuch":
      return [`Maybe it's not ${subject}.`, `Maybe it's everything you're trying to figure out around it.`];
    default:
      return [`Maybe it's not ${subject} on its own.`, "Maybe it's everything sitting quietly underneath it."];
  }
}

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
const MOOCA_FILL = 0.94; // portion of the square the artwork fills (leaves a little breathing room)

function Mooca({
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
    if (!isFinite(minX)) return;
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
      Math.abs(prev.scale - next.scale) < 0.5 &&
      Math.abs(prev.tx - next.tx) < 0.5 &&
      Math.abs(prev.ty - next.ty) < 0.5
        ? prev
        : next
    );
  }, [expression, size]);

  return (
    <motion.div
      role="img"
      aria-label="Mooca, your gentle companion"
      initial={{ scale: 0.94, opacity: 0 }}
      animate={{ scale: 1, opacity: fit ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
            ? { rotate: reacting ? -1.6 : 0 }
            : reacting
              ? { rotate: -2.2, scale: 1.03 }
              : { rotate: [-1.4, 1.4, -1.4], scale: 1 }
        }
        transition={
          reacting || reduce
            ? { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            : { duration: expression === "welcome" ? 5 : 6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <motion.div
          className="absolute left-0 top-0"
          style={{ transformOrigin: "50% 100%", width: size, height: size }}
          // Breathing: gentle volume swell at the feet. Scale-only, so it's safe
          // to keep even under reduced-motion — guarantees Mooca still feels alive.
          animate={{ scaleY: [1, 1.035, 1], scaleX: [1, 0.985, 1] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            ref={measureRef}
            style={{
              transform: fit
                ? `translate(${fit.tx}px, ${fit.ty}px) scale(${fit.scale})`
                : "scale(1)",
              transformOrigin: "top left",
            }}
          >
            <MoocaMascot mooca={MOOCA_VARIANT[expression]} size="M" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* Small reusable primary / ghost buttons in the Ooca language. */
function PrimaryButton({
  children,
  onClick,
  disabled,
  type = "button",
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:brightness-105 hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--space-ring)] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none"
    >
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--space-ring)]"
    >
      {children}
    </button>
  );
}

/* Quiet step indicator — dots, never a percentage. */
function StepDots({ index }: { index: number }) {
  const steps = ["Notice", "Weigh", "Focus"];
  return (
    <div className="flex items-center gap-2" aria-hidden>
      {steps.map((s, i) => (
        <div
          key={s}
          className="h-1.5 rounded-full transition-all duration-500"
          style={{
            width: i === index ? 22 : 6,
            background: i <= index ? "var(--primary)" : "var(--border)",
          }}
        />
      ))}
    </div>
  );
}

/* Motion wrapper for each stage. */
const stageMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export default function App() {
  const [stage, setStage] = useState<Stage>("intro");
  const [selected, setSelected] = useState<string[]>([]);
  const [elseText, setElseText] = useState("");
  const [reason, setReason] = useState<string | null>(null);

  // Normalized positions for the spatial "weigh" step, keyed by topic id.
  // nx/ny are offsets from center as a fraction of the field size (~ -0.4..0.4).
  const [positions, setPositions] = useState<Record<string, { nx: number; ny: number }>>({});
  const [focusTopic, setFocusTopic] = useState<string | null>(null);

  const chosen = useMemo(
    () =>
      TOPICS.filter((t) => selected.includes(t.id)).map((t) =>
        t.id === "else" && elseText.trim() !== ""
          ? { ...t, label: elseText.trim() }
          : t
      ),
    [selected, elseText]
  );

  // The topic currently placed closest to YOU — updates live as the person
  // arranges their space, and drives the Focus question. Never random.
  const closestTopic = useMemo<Topic | null>(() => {
    let best: Topic | null = null;
    let bestDist = Infinity;
    chosen.forEach((t) => {
      const p = positions[t.id] ?? { nx: 0, ny: 0 };
      const d = Math.hypot(p.nx, p.ny);
      if (d < bestDist) {
        bestDist = d;
        best = t;
      }
    });
    return best;
  }, [chosen, positions]);

  const toggleTopic = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Seed positions in a gentle ring whenever we enter the weigh step.
  const seedPositions = useCallback(() => {
    const n = chosen.length;
    const radius = n <= 2 ? 0.24 : 0.32;
    const next: Record<string, { nx: number; ny: number }> = {};
    chosen.forEach((t, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
      // slight organic jitter so it feels placed, not generated
      const r = radius + (i % 2 === 0 ? 0.02 : -0.02);
      next[t.id] = {
        nx: Math.cos(angle) * r,
        ny: Math.sin(angle) * r * 0.86,
      };
    });
    setPositions(next);
  }, [chosen]);

  const goWeigh = () => {
    seedPositions();
    setStage("weigh");
  };

  const goFocus = () => {
    // Focus = whatever the person placed closest to YOU (see closestTopic).
    setFocusTopic(closestTopic?.id ?? null);
    setReason(null);
    setStage("focus");
  };

  const focusLabel = chosen.find((t) => t.id === focusTopic)?.label ?? "";
  const insightLines = focusTopic && reason ? buildInsight(focusTopic, reason) : ["", ""];

  const restart = () => {
    setSelected([]);
    setElseText("");
    setReason(null);
    setPositions({});
    setFocusTopic(null);
    setStage("intro");
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden font-sans text-foreground"
      style={{
        background:
          "radial-gradient(130% 90% at 50% -20%, #ffffff 0%, var(--background) 60%, #eef0f1 100%)",
      }}
    >
      {/* soft ambient shapes — a single restrained brand glow, kept subtle */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(0,196,179,0.16), transparent 68%)" }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, rgba(70,89,105,0.08), transparent 70%)" }} />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1080px] flex-col px-5 py-6 sm:px-8 sm:py-8">
        {/* top rail */}
        <header className="flex items-center justify-between">
          <Logo className="h-6 w-auto sm:h-7" />
          {(stage === "notice" || stage === "weigh" || stage === "focus") && (
            <StepDots index={stage === "notice" ? 0 : stage === "weigh" ? 1 : 2} />
          )}
          {(stage === "insight" || stage === "complete") && (
            <span className="text-[13px] text-muted-foreground">A moment for you</span>
          )}
        </header>

        <main className="flex flex-1 flex-col justify-center py-8">
          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.section key="intro" {...stageMotion} className="mx-auto w-full max-w-[660px] text-center">
                <div className="mb-8 flex justify-center">
                  <Mooca expression="welcome" size={168} />
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  A 2-minute check-in
                </span>
                <h1 className="mt-6 font-serif text-[clamp(2rem,6vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-foreground">
                  What&rsquo;s been taking up
                  <br className="hidden sm:block" /> space in your mind lately?
                </h1>
                <p className="mx-auto mt-5 max-w-[420px] text-[17px] leading-relaxed text-muted-foreground">
                  Take a small moment to check in with yourself. There&rsquo;s no right or wrong answer.
                </p>
                <div className="mt-10">
                  <PrimaryButton onClick={() => setStage("notice")}>
                    Take 2 minutes
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
                  </PrimaryButton>
                </div>
                <p className="mt-6 text-[13px] text-muted-foreground/80">
                  Just a quiet reflection — nothing is measured or saved.
                </p>
              </motion.section>
            )}

            {stage === "notice" && (
              <motion.section key="notice" {...stageMotion} className="mx-auto w-full max-w-[600px] text-center">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                  Step one · Notice
                </p>
                <h1 className="mt-3 font-serif text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-[1.1] tracking-tight">
                  What&rsquo;s been on your mind?
                </h1>
                <p className="mx-auto mt-3 max-w-[440px] text-[16px] leading-relaxed text-muted-foreground">
                  Pick anything that&rsquo;s been taking up some space lately.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                  {TOPICS.map((t) => {
                    const isSel = selected.includes(t.id);
                    return (
                      <button
                        key={t.id}
                        type="button"
                        aria-pressed={isSel}
                        onClick={() => toggleTopic(t.id)}
                        className={[
                          "group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[15px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--space-ring)]",
                          isSel
                            ? "border-primary bg-secondary text-secondary-foreground shadow-[var(--shadow-soft)]"
                            : "border-border bg-card text-foreground hover:border-primary/40 hover:-translate-y-0.5",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "grid h-[18px] w-[18px] place-items-center rounded-full border transition-colors",
                            isSel ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/35 group-hover:border-primary/50",
                          ].join(" ")}
                        >
                          {isSel && <Check className="h-3 w-3" strokeWidth={3.5} />}
                        </span>
                        {t.label}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {selected.includes("else") && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <label htmlFor="else" className="mt-6 block text-[14px] text-muted-foreground">
                        What's on your mind? <span className="text-muted-foreground/60">(optional)</span>
                      </label>
                      <input
                        id="else"
                        value={elseText}
                        onChange={(e) => setElseText(e.target.value)}
                        placeholder="A few words is plenty…"
                        maxLength={60}
                        className="mt-2 w-full appearance-none rounded-2xl border border-border bg-[var(--input-background)] px-5 py-3.5 text-[16px] text-foreground shadow-none outline-none ring-0 transition-colors duration-200 [-webkit-tap-highlight-color:transparent] placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-none focus:outline-none focus:ring-0 focus-visible:border-primary focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-0"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-10 flex items-center justify-between">
                  <GhostButton onClick={() => setStage("intro")}>
                    <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
                    Back
                  </GhostButton>
                  <PrimaryButton
                    onClick={goWeigh}
                    disabled={selected.length === 0 || (selected.includes("else") && elseText.trim() === "")}
                  >
                    Continue
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
                  </PrimaryButton>
                </div>
              </motion.section>
            )}

            {stage === "weigh" && (
              <motion.section key="weigh" {...stageMotion} className="mx-auto flex w-full max-w-[760px] flex-col">
                <div className="text-center">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Step two · Weigh
                  </p>
                  <h1 className="mt-3 font-serif text-[clamp(1.6rem,4.5vw,2.375rem)] font-extrabold leading-[1.1] tracking-tight">
                    Which one feels heaviest right now?
                  </h1>
                  <p className="mx-auto mt-2.5 max-w-[420px] text-[15px] leading-relaxed text-muted-foreground">
                    Move the things on your mind closer or further away until they feel right.
                  </p>
                </div>

                <MentalSpace
                  topics={chosen}
                  positions={positions}
                  setPositions={setPositions}
                  closestId={closestTopic?.id ?? null}
                />

                {/* Live, causal readout — the closest topic is what the next
                    question will be about. Reassures rather than instructs. */}
                <div className="mt-5 text-center text-[15px] text-muted-foreground" aria-live="polite">
                  {closestTopic ? (
                    <>
                      Right now,{" "}
                      <span className="font-serif font-bold text-[17px] text-foreground">
                        {closestTopic.label.toLowerCase()}
                      </span>{" "}
                      feels closest to you.
                    </>
                  ) : (
                    <span className="text-muted-foreground/70">Drag a topic toward the center to begin.</span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <GhostButton onClick={() => setStage("notice")}>
                    <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
                    Back
                  </GhostButton>
                  <PrimaryButton onClick={goFocus}>
                    Continue
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
                  </PrimaryButton>
                </div>
              </motion.section>
            )}

            {stage === "focus" && (
              <motion.section key="focus" {...stageMotion} className="mx-auto w-full max-w-[560px]">
                <div className="text-center">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-primary">
                    Step three · Focus
                  </p>
                  <p className="mt-2.5 flex items-center justify-center whitespace-nowrap text-[14px] text-muted-foreground">
                    You placed
                    <span className="mx-1 font-semibold text-foreground">{focusLabel.toLowerCase()}</span>
                    closest to you.
                  </p>
                  <h1 className="mt-2 font-serif text-[clamp(1.6rem,4.5vw,2.375rem)] font-extrabold leading-[1.1] tracking-tight">
                    What feels hardest about{" "}
                    <span className="relative inline break-words text-primary">
                      {focusLabel.toLowerCase()}
                      <span className="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-primary/25" />
                    </span>
                    ?
                  </h1>
                  <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-relaxed text-muted-foreground">
                    Take a breath. Choose whatever feels closest to true.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-3" role="radiogroup" aria-label="What feels hardest">
                  {REASONS.map((r) => {
                    const isSel = reason === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        role="radio"
                        aria-checked={isSel}
                        onClick={() => setReason(r.id)}
                        className={[
                          "flex items-center gap-3.5 rounded-2xl border px-5 py-4 text-left text-[16px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--space-ring)]",
                          isSel
                            ? "border-primary bg-secondary shadow-[var(--shadow-soft)]"
                            : "border-border bg-card hover:border-primary/40",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
                            isSel ? "border-primary" : "border-muted-foreground/35",
                          ].join(" ")}
                        >
                          {isSel && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
                        </span>
                        {r.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-9 flex items-center justify-between">
                  <GhostButton onClick={() => setStage("weigh")}>
                    <ArrowLeft className="h-4 w-4" strokeWidth={2.25} />
                    Back
                  </GhostButton>
                  <PrimaryButton onClick={() => setStage("insight")} disabled={!reason}>
                    See what you noticed
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
                  </PrimaryButton>
                </div>
              </motion.section>
            )}

            {stage === "insight" && (
              <motion.section key="insight" {...stageMotion} className="mx-auto w-full max-w-[560px] text-center">
                <div className="mb-8 flex justify-center">
                  <Mooca expression="calm" size={168} />
                </div>
                <div className="font-serif tracking-tight">
                  <p className="text-[clamp(1.25rem,3.5vw,1.625rem)] leading-snug text-muted-foreground">
                    {insightLines[0]}
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-2 text-[clamp(1.75rem,5.5vw,2.5rem)] font-extrabold leading-[1.12] text-foreground"
                  >
                    {insightLines[1]}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="mx-auto mt-9 max-w-[440px] rounded-[24px] border border-border bg-card p-6 text-left shadow-[var(--shadow-soft)]"
                >
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    You noticed that{" "}
                    <span className="font-semibold text-foreground">
                      {(REASONS.find((r) => r.id === reason)?.label ?? "this").toLowerCase()}
                    </span>{" "}
                    is taking up more space than you expected.
                  </p>
                  <div className="my-5 h-px bg-border" />
                  <p className="font-serif text-[19px] font-bold leading-relaxed text-foreground">
                    You don&rsquo;t have to solve everything you&rsquo;re carrying today.
                  </p>
                </motion.div>

                <div className="mt-9">
                  <PrimaryButton onClick={() => setStage("complete")}>
                    Take this with you
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.25} />
                  </PrimaryButton>
                </div>
              </motion.section>
            )}

            {stage === "complete" && (
              <motion.section
                key="complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="mx-auto w-full max-w-[480px] text-center"
              >
                <div className="mb-8 flex justify-center">
                  <Mooca expression="support" size={168} />
                </div>
                <h2 className="font-serif text-[clamp(1.6rem,4.5vw,2.125rem)] font-extrabold leading-[1.1] tracking-tight">
                  Thank you for pausing.
                </h2>
                <p className="mx-auto mt-4 max-w-[380px] text-[15px] leading-relaxed text-muted-foreground">
                  Noticing what you&rsquo;re carrying is already a kind of care. Come back whenever you need a quiet moment.
                </p>
                <div className="mt-8">
                  <GhostButton onClick={restart}>Start again</GhostButton>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * MentalSpace — the hero spatial interaction.
 * Topics are draggable chips in a calm field; YOU sits at center.
 * Closeness to center reads as "more present / heavier" through warmth
 * and scale — never a number.
 * ------------------------------------------------------------------ */
function MentalSpace({
  topics,
  positions,
  setPositions,
  closestId,
}: {
  topics: Topic[];
  positions: Record<string, { nx: number; ny: number }>;
  setPositions: Dispatch<SetStateAction<Record<string, { nx: number; ny: number }>>>;
  closestId: string | null;
}) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [dragging, setDragging] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!fieldRef.current) return;
    const el = fieldRef.current;
    const ro = new ResizeObserver(() => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    });
    ro.observe(el);
    setSize({ w: el.clientWidth, h: el.clientHeight });
    return () => ro.disconnect();
  }, []);

  // Per-chip elements, so we can keep each one fully inside the area on all
  // four sides — accounting for that chip's own width/height, not a flat limit.
  const chipEls = useRef<Record<string, HTMLButtonElement | null>>({});

  // Max normalized offset from center for a given chip, per axis. Uses the
  // SAME real edge on every side (field half minus the chip's half-size and a
  // little padding), so left/right is contained exactly like top/bottom.
  const boundsFor = useCallback((id: string) => {
    const field = fieldRef.current;
    if (!field) return { mx: 0.44, my: 0.44 };
    const fw = field.clientWidth;
    const fh = field.clientHeight;
    const pad = 8;
    const cw = chipEls.current[id]?.offsetWidth ?? 96;
    const ch = chipEls.current[id]?.offsetHeight ?? 44;
    return {
      mx: Math.max(0, 0.5 - (cw / 2 + pad) / fw),
      my: Math.max(0, 0.5 - (ch / 2 + pad) / fh),
    };
  }, []);

  const pointerToNorm = useCallback(
    (clientX: number, clientY: number, id: string) => {
      const el = fieldRef.current;
      if (!el) return { nx: 0, ny: 0 };
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const { mx, my } = boundsFor(id);
      const nx = (clientX - cx - offsetRef.current.x) / rect.width;
      const ny = (clientY - cy - offsetRef.current.y) / rect.height;
      return {
        nx: Math.max(-mx, Math.min(mx, nx)),
        ny: Math.max(-my, Math.min(my, ny)),
      };
    },
    [boundsFor]
  );

  const startDrag = (id: string, e: ReactPointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    const el = fieldRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const p = positions[id] ?? { nx: 0, ny: 0 };
      const chipX = cx + p.nx * rect.width;
      const chipY = cy + p.ny * rect.height;
      offsetRef.current = { x: e.clientX - chipX, y: e.clientY - chipY };
    }
    setDragging(id);
  };

  const onMove = (e: ReactPointerEvent) => {
    if (!dragging) return;
    const n = pointerToNorm(e.clientX, e.clientY, dragging);
    setPositions((prev) => ({ ...prev, [dragging]: n }));
  };

  const endDrag = () => {
    offsetRef.current = { x: 0, y: 0 };
    setDragging(null);
  };

  // Keyboard nudging for accessibility — kept inside the same bounds.
  const nudge = (id: string, dx: number, dy: number) => {
    const { mx, my } = boundsFor(id);
    setPositions((prev) => {
      const p = prev[id] ?? { nx: 0, ny: 0 };
      return {
        ...prev,
        [id]: {
          nx: Math.max(-mx, Math.min(mx, p.nx + dx)),
          ny: Math.max(-my, Math.min(my, p.ny + dy)),
        },
      };
    });
  };

  return (
    <div
      ref={fieldRef}
      onPointerMove={onMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      className="relative mx-auto mt-7 aspect-square w-full max-w-[560px] touch-none select-none overflow-hidden rounded-[28px] border border-border sm:aspect-[16/10] sm:max-w-[760px]"
      style={{
        background:
          "radial-gradient(65% 65% at 50% 46%, #ffffff 0%, var(--space) 78%, #e6e8ea 100%)",
        boxShadow: "inset 0 1px 40px rgba(70,89,105,0.05)",
      }}
    >
      {/* concentric rings suggesting nearness — decorative, no numbers.
          Only the innermost ring carries a faint brand tint (the "near" zone). */}
      {[0.92, 0.62, 0.34].map((r, i) => (
        <div
          key={r}
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-square rounded-full border"
          style={{
            width: `${r * 78}%`,
            transform: "translate(-50%, -50%)",
            borderColor: i === 2 ? "rgba(0,196,179,0.22)" : "rgba(70,89,105,0.09)",
          }}
        />
      ))}

      {/* connector line from the active topic to the anchor — reinforces that
          distance is the meaning (closer = heavier). Only while engaged. */}
      {size.w > 0 && (dragging || hovered) && (() => {
        const activeId = (dragging ?? hovered) as string;
        const p = positions[activeId] ?? { nx: 0, ny: 0 };
        const ax = size.w / 2 + p.nx * size.w;
        const ay = size.h / 2 + p.ny * size.h;
        return (
          <svg className="pointer-events-none absolute inset-0" width={size.w} height={size.h} aria-hidden>
            <line
              x1={size.w / 2}
              y1={size.h / 2}
              x2={ax}
              y2={ay}
              stroke="var(--primary)"
              strokeWidth={1.5}
              strokeDasharray="2 6"
              strokeLinecap="round"
              opacity={0.45}
            />
          </svg>
        );
      })()}

      {/* Mooca IS the "you" anchor — the calm reference point everything
          is weighed against. Non-interactive so it never blocks a drag.
          The mascot is centered exactly on the point; the label floats below. */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2">
        {/* soft glow, centered on the point */}
        <div
          className="absolute left-1/2 top-1/2 h-[92px] w-[92px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,196,179,0.12), transparent 70%)" }}
        />
        {/* mascot, centered on the point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Mooca expression="calm" size={72} reacting={!!(dragging || hovered)} />
        </div>
        {/* "you" label, floating just beneath the mascot */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[44px] whitespace-nowrap rounded-full bg-card/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm">
          you
        </span>
      </div>

      {size.w > 0 &&
        topics.map((t) => {
          const p = positions[t.id] ?? { nx: 0, ny: 0 };
          const dist = Math.hypot(p.nx, p.ny);
          // closeness 0 (far) .. 1 (at center)
          const closeness = Math.max(0, Math.min(1, 1 - dist / 0.44));
          const isDrag = dragging === t.id;
          const isHover = hovered === t.id;
          const isClosest = closestId === t.id;
          const x = size.w / 2 + p.nx * size.w;
          const y = size.h / 2 + p.ny * size.h;
          const scale = 0.96 + closeness * 0.12 + (isDrag ? 0.05 : 0);
          // interpolate quiet → subtle brand warmth as it nears the anchor
          const warm = closeness;
          const baseShadow = `0 ${2 + closeness * 5}px ${8 + closeness * 14}px rgba(70,89,105,${0.08 + closeness * 0.06})`;
          const ring = isClosest ? ", 0 0 0 2px var(--space-ring)" : "";
          return (
            <motion.button
              key={t.id}
              ref={(el) => {
                chipEls.current[t.id] = el;
              }}
              type="button"
              aria-label={`${t.label}. Drag it closer to the center if it feels heavier, or further away if it feels lighter. Use arrow keys to move.${isClosest ? " Currently the closest to you." : ""}`}
              title={t.label}
              onPointerDown={(e) => startDrag(t.id, e)}
              onPointerEnter={() => setHovered(t.id)}
              onPointerLeave={() => setHovered((h) => (h === t.id ? null : h))}
              onFocus={() => setHovered(t.id)}
              onBlur={() => setHovered((h) => (h === t.id ? null : h))}
              onKeyDown={(e) => {
                const step = 0.05;
                if (e.key === "ArrowUp") { e.preventDefault(); nudge(t.id, 0, -step); }
                else if (e.key === "ArrowDown") { e.preventDefault(); nudge(t.id, 0, step); }
                else if (e.key === "ArrowLeft") { e.preventDefault(); nudge(t.id, -step, 0); }
                else if (e.key === "ArrowRight") { e.preventDefault(); nudge(t.id, step, 0); }
              }}
              // Center the chip on (x, y) via Motion's OWN transform so the
              // -50%/-50% offset isn't clobbered by the animated scale.
              animate={{ left: x, top: y, scale, x: "-50%", y: "-50%" }}
              whileHover={{ scale: scale + 0.05 }}
              whileTap={{ scale: scale + 0.02 }}
              transition={
                isDrag
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 300, damping: 28 }
              }
              className="absolute z-10 flex max-w-[320px] cursor-grab items-center gap-2 rounded-full px-4 py-2.5 text-[15px] font-semibold outline-none focus-visible:ring-4 focus-visible:ring-[var(--space-ring)] active:cursor-grabbing sm:px-5 sm:py-3"
              style={{
                background: `color-mix(in oklab, var(--card), var(--heavy) ${warm * 14}%)`,
                color: "var(--foreground)",
                border: `1.5px solid ${isClosest ? "var(--primary)" : `color-mix(in oklab, var(--border), var(--heavy) ${warm * 55}%)`}`,
                boxShadow: isDrag
                  ? `var(--shadow-lift)${ring}`
                  : `${baseShadow}${ring}`,
                zIndex: isDrag ? 30 : Math.round(10 + closeness * 10),
              }}
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full transition-colors"
                style={{ background: `color-mix(in oklab, var(--muted-foreground), var(--primary) ${warm * 100}%)` }}
              />
              <span className={t.id === "else" ? "block max-w-[280px] truncate text-left" : "whitespace-nowrap"}>{t.label}</span>
              {/* grab affordance — quiet by default, clearer on hover/drag */}
              <Move
                className="h-3.5 w-3.5 shrink-0 transition-opacity duration-200"
                strokeWidth={2}
                style={{ opacity: isDrag || isHover ? 0.75 : 0.3 }}
                aria-hidden
              />
            </motion.button>
          );
        })}

      {/* affordance hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[12px] text-muted-foreground/70">
        Drag closer to feel heavier · further to feel lighter
      </div>
    </div>
  );
}
