import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** True once the element has scrolled into view. */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      options ?? { rootMargin: "0px 0px -15% 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return [ref, inView];
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <As
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[900ms] ease-out motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function Band({
  id,
  children,
  className,
  tone = "light",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-28 md:px-10 md:py-40",
        tone === "light" && "border-t border-border bg-background",
        tone === "dark" && "border-t border-ink bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Kicker({ children, tone = "accent" }: { children: ReactNode; tone?: "accent" | "muted" }) {
  return (
    <p
      className={cn(
        "text-eyebrow flex items-center gap-3",
        tone === "accent" ? "text-accent" : "text-muted-foreground",
      )}
    >
      <span aria-hidden="true" className="inline-block h-px w-8 bg-current opacity-50" />
      {children}
    </p>
  );
}

export function CallCta({
  children,
  variant = "solid",
  className,
}: {
  children?: ReactNode;
  variant?: "solid" | "quiet" | "light";
  className?: string;
}) {
  return (
    <a
      href={site.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex min-h-12 items-center gap-3 px-6 text-sm font-medium tracking-tight transition-colors duration-300",
        variant === "solid" && "rounded-full bg-ink text-ink-foreground hover:bg-accent",
        variant === "light" && "rounded-full bg-ink-foreground text-ink hover:bg-accent hover:text-ink-foreground",
        variant === "quiet" && "px-0 text-foreground hover:text-accent",
        className,
      )}
    >
      {children ?? site.ctaLabel}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        &rarr;
      </span>
    </a>
  );
}
