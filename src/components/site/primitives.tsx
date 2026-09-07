import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
  tone = "base",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-border/70 px-6 py-20 md:px-10 md:py-28",
        tone === "raised" && "bg-card",
        tone === "ink" && "bg-ink text-ink-foreground border-ink",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-eyebrow text-accent">
      <span className="inline-block h-px w-8 translate-y-[-4px] bg-accent/60 align-middle" />{" "}
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">{lead}</p>
      ) : null}
    </div>
  );
}

export function CallCta({
  children,
  variant = "solid",
  className,
}: {
  children?: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  return (
    <a
      href={site.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-tight transition-all duration-300",
        variant === "solid" &&
          "bg-ink text-ink-foreground hover:bg-accent hover:shadow-lift",
        variant === "outline" &&
          "border border-ink/20 text-foreground hover:border-accent hover:text-accent",
        variant === "light" &&
          "bg-ink-foreground text-ink hover:bg-accent hover:text-ink-foreground",
        className,
      )}
    >
      {children ?? site.ctaLabel}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-card px-3 py-1 text-xs tracking-wide text-muted-foreground">
      {children}
    </span>
  );
}

export function FocusTriad({ tone = "base" }: { tone?: "base" | "ink" }) {
  const items = ["Sales", "Marketing", "Customer Service"];
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {items.map((i) => (
        <span
          key={i}
          className={cn(
            "font-display text-sm tracking-[0.18em] uppercase",
            tone === "ink" ? "text-ink-foreground/80" : "text-foreground/80",
          )}
        >
          {i}
        </span>
      ))}
    </div>
  );
}

export function FlowList({
  steps,
  tone = "base",
}: {
  steps: string[];
  tone?: "base" | "accent";
}) {
  return (
    <ol className="space-y-1.5">
      {steps.map((s, i) => (
        <li key={s} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-1 font-mono text-[11px] tabular-nums",
              tone === "accent" ? "text-accent" : "text-muted-foreground",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-sm leading-relaxed text-foreground/85">{s}</span>
        </li>
      ))}
    </ol>
  );
}
