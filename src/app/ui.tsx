import type { ReactNode } from "react";
import logoPaths from "@/imports/logoPaths";

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 191 37.1899" fill="none" role="img" aria-label="mindfull" className={className}>
      <g>
        <path d={logoPaths.p31c7a600} fill="var(--primary)" />
        <path d={logoPaths.p1d2f8e80} fill="var(--primary)" />
        <path d={logoPaths.p287b9000} fill="var(--primary)" />
        <path d={logoPaths.p210a1d00} fill="var(--primary)" />
        <path d={logoPaths.p3ed24000} fill="var(--primary)" />
        <path d={logoPaths.pcca0e00} fill="var(--primary)" />
        <path d={logoPaths.pa44d200} fill="var(--primary)" />
        <path d={logoPaths.p3e084880} fill="var(--brand-blue)" />
        <path d={logoPaths.p3eacf100} fill="var(--brand-blue)" />
      </g>
    </svg>
  );
}

export function ActionButton({
  children,
  onClick,
  disabled,
  type = "button",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "accessibility-focus group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-8 py-3 text-[16px] leading-[24px] transition-all duration-300 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-105 hover:shadow-[var(--shadow-lift)] active:brightness-95"
          : "text-muted-foreground hover:text-foreground",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function StepDots({ index }: { index: number }) {
  const steps = ["Notice", "Weigh", "Focus"];
  return (
    <div className="flex items-center gap-2" aria-hidden>
      {steps.map((step, i) => (
        <div
          key={step}
          className="h-[6px] rounded-full transition-all duration-300"
          style={{
            width: i === index ? 24 : 8,
            background: i <= index ? "var(--primary)" : "var(--border)",
          }}
        />
      ))}
    </div>
  );
}

export const stageMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 300 / 1000, ease: "easeOut" as const },
};
