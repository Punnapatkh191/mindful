import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, useReducedMotion } from "motion/react";
import {
  CompleteScreen,
  FocusScreen,
  InsightScreen,
  IntroScreen,
  NoticeScreen,
  WeighScreen,
} from "./screens";
import { buildInsight, TOPICS, type Stage } from "./content";
import { findClosestTopic, reconcileTopicPositions, type TopicPositions } from "./spatial";
import { Logo, StepDots } from "./ui";

export default function App() {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState<Stage>("intro");
  const [selected, setSelected] = useState<string[]>([]);
  const [elseText, setElseText] = useState("");
  const [reason, setReason] = useState<string | null>(null);
  const [positions, setPositions] = useState<TopicPositions>({});
  const [compactLayoutKey, setCompactLayoutKey] = useState("");
  const [focusTopic, setFocusTopic] = useState<string | null>(null);
  const previousStage = useRef(stage);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (previousStage.current === stage) return;
    previousStage.current = stage;
    const focusTimer = window.setTimeout(() => {
      document.querySelector<HTMLElement>("[data-stage-heading]")?.focus({ preventScroll: true });
    }, reduceMotion ? 0 : 350);
    return () => window.clearTimeout(focusTimer);
  }, [stage, reduceMotion]);

  const chosen = useMemo(
    () => TOPICS.filter((topic) => selected.includes(topic.id)).map((topic) =>
      topic.id === "else" && elseText.trim() !== ""
        ? { ...topic, label: elseText.trim() }
        : topic
    ),
    [selected, elseText]
  );

  const closestTopic = useMemo(() => findClosestTopic(chosen, positions), [chosen, positions]);

  const toggleTopic = (id: string) => {
    setSelected((current) => current.includes(id)
      ? current.filter((topicId) => topicId !== id)
      : [...current, id]
    );
  };

  const goWeigh = useCallback(() => {
    if (chosen.length === 0) return;
    setPositions((current) => reconcileTopicPositions(chosen, current));
    setStage("weigh");
  }, [chosen]);

  const goFocus = () => {
    if (!closestTopic) return;
    if (focusTopic !== closestTopic.id) setReason(null);
    setFocusTopic(closestTopic.id);
    setStage("focus");
  };

  const focusLabel = chosen.find((topic) => topic.id === focusTopic)?.label ?? "";
  const insightLines: [string, string] = focusTopic && reason ? buildInsight(focusTopic, reason) : ["", ""];

  const restart = () => {
    setSelected([]);
    setElseText("");
    setReason(null);
    setPositions({});
    setCompactLayoutKey("");
    setFocusTopic(null);
    setStage("intro");
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative min-h-screen w-full overflow-x-clip font-sans text-foreground"
        style={{ background: "radial-gradient(130% 90% at 50% -20%, var(--paper) 0%, var(--background) 60%, var(--background-edge) 100%)" }}
      >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb),16%), transparent 68%)" }} />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: "radial-gradient(circle, rgba(var(--foreground-rgb),8%), transparent 70%)" }} />
      </div>

      <div className="app-shell relative mx-auto flex min-h-screen w-full max-w-[1080px] flex-col px-4 py-6 sm:px-8 sm:py-8">
        <a className="skip-link accessibility-focus" href="#main-content">Skip to main content</a>
        <header className="flex items-center justify-between">
          <Logo className="h-6 w-auto sm:h-7" />
          {(stage === "notice" || stage === "weigh" || stage === "focus") && (
            <StepDots index={stage === "notice" ? 0 : stage === "weigh" ? 1 : 2} />
          )}
          {(stage === "insight" || stage === "complete") && (
            <span className="text-[13px] leading-[20px] text-muted-foreground">A moment for you</span>
          )}
        </header>

        <main id="main-content" tabIndex={-1} className="app-main flex flex-1 flex-col justify-center py-8">
          <AnimatePresence mode={reduceMotion ? "sync" : "wait"}>
            {stage === "intro" && <IntroScreen onStart={() => setStage("notice")} />}
            {stage === "notice" && (
              <NoticeScreen
                selected={selected}
                elseText={elseText}
                onToggle={toggleTopic}
                onElseTextChange={setElseText}
                onBack={() => setStage("intro")}
                onContinue={goWeigh}
              />
            )}
            {stage === "weigh" && (
              <WeighScreen
                topics={chosen}
                positions={positions}
                setPositions={setPositions}
                compactLayoutKey={compactLayoutKey}
                setCompactLayoutKey={setCompactLayoutKey}
                closestTopic={closestTopic}
                onBack={() => setStage("notice")}
                onContinue={goFocus}
              />
            )}
            {stage === "focus" && (
              <FocusScreen
                topicId={focusTopic ?? "else"}
                topicLabel={focusLabel}
                reason={reason}
                onReasonChange={setReason}
                onBack={() => setStage("weigh")}
                onContinue={() => setStage("insight")}
              />
            )}
            {stage === "insight" && (
              <InsightScreen
                topicId={focusTopic ?? "else"}
                lines={insightLines}
                reason={reason}
                onContinue={() => setStage("complete")}
              />
            )}
            {stage === "complete" && <CompleteScreen onRestart={restart} />}
          </AnimatePresence>
        </main>
      </div>
      </div>
    </MotionConfig>
  );
}
