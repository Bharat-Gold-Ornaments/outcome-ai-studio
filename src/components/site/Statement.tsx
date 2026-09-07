import { Band, Reveal } from "./primitives";

export function Statement() {
  return (
    <Band tone="dark">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-[2.75rem] leading-[0.98] tracking-[-0.03em] text-balance md:text-[5.5rem]">
            Don't automate everything.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="mt-4 font-display text-[2.75rem] leading-[0.98] tracking-[-0.03em] text-balance text-accent md:text-[5.5rem]">
            Automate what matters.
          </h2>
        </Reveal>
        <Reveal delay={380}>
          <p className="mt-12 max-w-md text-sm leading-relaxed text-ink-foreground/60">
            Good AI strategy isn't about using more AI. It's about knowing where AI can genuinely
            improve the business.
          </p>
        </Reveal>
      </div>
    </Band>
  );
}
