import { useRef, type Dispatch, type SetStateAction } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import MentalSpace, { TopicLabel } from "./MentalSpace";
import Mooca from "./Mooca";
import { getReasons, TOPICS, type Topic } from "./content";
import { ActionButton, stageMotion } from "./ui";

export function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.section key="intro" {...stageMotion} className="mx-auto w-full max-w-[660px] text-center">
      <div className="mb-8 flex justify-center"><Mooca expression="welcome" size={168} /></div>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[12px] font-semibold uppercase tracking-[2px] text-muted-foreground">
        <span className="h-[6px] w-[6px] rounded-full bg-primary" />A 2-minute check-in
      </span>
      <h1 data-stage-heading tabIndex={-1} className="mt-6 font-serif text-[32px] font-extrabold leading-[35px] tracking-[-1px] text-foreground sm:text-[52px] sm:leading-[56px]">
        What&rsquo;s been taking up<br className="hidden sm:block" /> space in your mind lately?
      </h1>
      <p className="stage-description mx-auto max-w-[420px] text-[17px] leading-[28px] text-muted-foreground">
        Take a small moment to check in with yourself. There&rsquo;s no right or wrong answer.
      </p>
      <div className="mt-8"><ActionButton onClick={onStart}>Take 2 minutes<ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} /></ActionButton></div>
      <p className="mt-6 text-[13px] leading-[20px] text-muted-foreground/80">Just a quiet reflection — nothing is measured or saved.</p>
    </motion.section>
  );
}

export function NoticeScreen({
  selected,
  elseText,
  onToggle,
  onElseTextChange,
  onBack,
  onContinue,
}: {
  selected: string[];
  elseText: string;
  onToggle: (id: string) => void;
  onElseTextChange: (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const canContinue = selected.length > 0 && (!selected.includes("else") || elseText.trim() !== "");

  return (
    <motion.section key="notice" {...stageMotion} className="mx-auto w-full max-w-[600px] text-center">
      <p className="step-label">Step one · Notice</p>
      <h1 data-stage-heading tabIndex={-1} className="step-title">What&rsquo;s been on your mind?</h1>
      <p className="step-description">Pick anything that&rsquo;s been taking up some space lately.</p>

      <div className="topic-picker stage-content flex flex-wrap justify-center gap-2">
        {TOPICS.map((topic) => {
          const isSelected = selected.includes(topic.id);
          return (
            <button
              key={topic.id}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggle(topic.id)}
              className={[
                "accessibility-focus group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[15px] leading-[22px] transition-all duration-200",
                isSelected
                  ? "border-primary bg-secondary text-secondary-foreground shadow-[var(--shadow-soft)]"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:-translate-y-[2px]",
              ].join(" ")}
            >
              <span className={[
                "grid h-[18px] w-[18px] place-items-center rounded-full border transition-colors",
                isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/35 group-hover:border-primary/50",
              ].join(" ")}>
                {isSelected && <Check className="h-3 w-3" strokeWidth={4} />}
              </span>
              {topic.label}
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
            transition={{ duration: 300 / 1000 }}
            className="else-field overflow-hidden"
          >
            <label htmlFor="else" className="mt-6 block text-[14px] text-muted-foreground">
              What&apos;s on your mind? <span className="text-muted-foreground/60">(required)</span>
            </label>
            <input
              id="else"
              lang={/[\u0E01-\u0E5B]/u.test(elseText) ? "th" : "en"}
              value={elseText}
              aria-required="true"
              onChange={(event) => onElseTextChange(event.target.value)}
              placeholder="A few words is plenty…"
              maxLength={60}
              className="accessibility-focus thai-input mt-2 w-full appearance-none rounded-2xl border border-border bg-[var(--input-background)] px-5 py-3 text-[16px] font-normal text-foreground shadow-none outline-none ring-0 transition-colors duration-200 [-webkit-tap-highlight-color:transparent] placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-none focus:outline-none focus:ring-0 focus-visible:border-primary focus-visible:shadow-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="action-row">
        <ActionButton variant="ghost" onClick={onBack}><ArrowLeft className="h-4 w-4" strokeWidth={2} />Back</ActionButton>
        <ActionButton onClick={onContinue} disabled={!canContinue}>Continue<ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} /></ActionButton>
      </div>
    </motion.section>
  );
}

export function WeighScreen({
  topics,
  positions,
  setPositions,
  compactLayoutKey,
  setCompactLayoutKey,
  closestTopic,
  onBack,
  onContinue,
}: {
  topics: Topic[];
  positions: Record<string, { nx: number; ny: number }>;
  setPositions: Dispatch<SetStateAction<Record<string, { nx: number; ny: number }>>>;
  compactLayoutKey: string;
  setCompactLayoutKey: (key: string) => void;
  closestTopic: Topic | null;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <motion.section key="weigh" {...stageMotion} className="mx-auto flex w-full max-w-[760px] flex-col">
      <div className="text-center">
        <p className="step-label">Step two · Weigh</p>
        <h1 data-stage-heading tabIndex={-1} className="step-title">Which one feels heaviest right now?</h1>
        <p className="step-description">Move the things on your mind closer or further away until they feel right.</p>
      </div>

      <MentalSpace
        topics={topics}
        positions={positions}
        setPositions={setPositions}
        closestId={closestTopic?.id ?? null}
        compactLayoutKey={compactLayoutKey}
        setCompactLayoutKey={setCompactLayoutKey}
      />

      <div className="mt-6 grid h-[48px] place-items-center px-4" aria-live="polite" aria-atomic="true">
        <p className="readout-two-lines w-full text-center text-[15px] leading-[24px] text-muted-foreground">
          {closestTopic ? <>
            Right now, <TopicLabel label={closestTopic.label.toLowerCase()} className="font-semibold text-foreground" /> feels closest to you.
          </> : <span className="text-muted-foreground/70">Drag a topic toward the center to begin.</span>}
        </p>
      </div>

      <div className="action-row">
        <ActionButton variant="ghost" onClick={onBack}><ArrowLeft className="h-4 w-4" strokeWidth={2} />Back</ActionButton>
        <ActionButton onClick={onContinue}>Continue<ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} /></ActionButton>
      </div>
    </motion.section>
  );
}

export function FocusScreen({
  topicId,
  topicLabel,
  reason,
  onReasonChange,
  onBack,
  onContinue,
}: {
  topicId: string;
  topicLabel: string;
  reason: string | null;
  onReasonChange: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  const reasons = getReasons(topicId);
  const reasonButtons = useRef<Array<HTMLButtonElement | null>>([]);

  return (
    <motion.section key="focus" {...stageMotion} className="mx-auto w-full max-w-[560px]">
      <div className="text-center">
        <p className="step-label">Step three · Focus</p>
        <div className="mt-4 px-4">
          <p className="w-full text-center text-[14px] leading-[20px] text-muted-foreground">You placed <TopicLabel label={topicLabel.toLowerCase()} className="font-semibold text-foreground" /> closest to you.</p>
        </div>
        <h1 data-stage-heading tabIndex={-1} className="step-title">
          What feels hardest about <TopicLabel label={topicLabel.toLowerCase()} className="inline break-words text-primary" thaiTone="display" />?
        </h1>
        <p className="step-description">Take a breath. Choose whatever feels closest to true.</p>
      </div>

      <div className="reason-list stage-content flex flex-col gap-3" role="radiogroup" aria-label="What feels hardest">
        {reasons.map((item, index) => {
          const isSelected = reason === item.id;
          return (
            <button
              key={item.id}
              ref={(element) => { reasonButtons.current[index] = element; }}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={isSelected || (!reason && index === 0) ? 0 : -1}
              onClick={() => onReasonChange(item.id)}
              onKeyDown={(event) => {
                const last = reasons.length - 1;
                let next: number;
                switch (event.key) {
                  case "ArrowDown":
                  case "ArrowRight": next = (index + 1) % reasons.length; break;
                  case "ArrowUp":
                  case "ArrowLeft": next = (index + last) % reasons.length; break;
                  case "Home": next = 0; break;
                  case "End": next = last; break;
                  default: return;
                }
                event.preventDefault();
                onReasonChange(reasons[next].id);
                reasonButtons.current[next]?.focus();
              }}
              className={[
                "accessibility-focus flex items-center gap-4 rounded-2xl border px-5 py-4 text-left text-[16px] transition-all duration-200",
                isSelected ? "border-primary bg-secondary shadow-[var(--shadow-soft)]" : "border-border bg-card hover:border-primary/40",
              ].join(" ")}
            >
              <span className={[
                "grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-colors",
                isSelected ? "border-primary" : "border-muted-foreground/35",
              ].join(" ")}>
                {isSelected && <span className="h-[10px] w-[10px] rounded-full bg-primary" />}
              </span>
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="action-row">
        <ActionButton variant="ghost" onClick={onBack}><ArrowLeft className="h-4 w-4" strokeWidth={2} />Back</ActionButton>
        <ActionButton onClick={onContinue} disabled={!reason}>Continue<ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} /></ActionButton>
      </div>
    </motion.section>
  );
}

export function InsightScreen({
  topicId,
  lines,
  reason,
  onContinue,
}: {
  topicId: string;
  lines: [string, string];
  reason: string | null;
  onContinue: () => void;
}) {
  const reasonLabel = getReasons(topicId).find((item) => item.id === reason)?.label ?? "this";
  return (
    <motion.section key="insight" {...stageMotion} className="mx-auto w-full max-w-[560px] text-center">
      <div className="mb-8 flex justify-center"><Mooca expression="calm" size={168} /></div>
      <div className="insight-copy font-serif tracking-[-1px]">
        <h1 data-stage-heading tabIndex={-1} className="text-[20px] leading-[28px] font-normal text-muted-foreground sm:text-[26px] sm:leading-[36px]">{lines[0]}</h1>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 400 / 1000, duration: 600 / 1000 }} className="mt-2 text-[28px] font-extrabold leading-[31px] text-foreground sm:text-[40px] sm:leading-[45px]">{lines[1]}</motion.p>
      </div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 700 / 1000, duration: 600 / 1000 }} className="insight-card mx-auto mt-8 max-w-[440px] rounded-[24px] border border-border bg-card p-6 text-left shadow-[var(--shadow-soft)]">
        <p className="text-[15px] leading-[24px] text-muted-foreground">What felt hardest: <span className="font-semibold text-foreground">{reasonLabel}</span>.</p>
        <div className="my-4 h-px bg-border" />
        <p className="font-serif text-[19px] font-bold leading-[31px] text-foreground">You don&rsquo;t have to solve everything you&rsquo;re carrying today.</p>
      </motion.div>
      <div className="mt-8"><ActionButton onClick={onContinue}>Take this with you<ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} /></ActionButton></div>
    </motion.section>
  );
}

export function CompleteScreen({ onRestart }: { onRestart: () => void }) {
  return (
    <motion.section
      key="complete"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 700 / 1000 }}
      className="mx-auto w-full max-w-[480px] text-center"
    >
      <div className="mb-8 flex justify-center"><Mooca expression="support" size={168} /></div>
      <h1 data-stage-heading tabIndex={-1} className="font-serif text-[26px] font-extrabold leading-[29px] tracking-[-1px] sm:text-[34px] sm:leading-[37px]">Thank you for pausing.</h1>
      <p className="stage-description mx-auto max-w-[380px] text-[15px] leading-[24px] text-muted-foreground">Noticing what you&rsquo;re carrying is already a kind of care. Come back whenever you need a quiet moment.</p>
      <div className="mt-8"><ActionButton variant="ghost" onClick={onRestart}>Start again</ActionButton></div>
    </motion.section>
  );
}
