import { Band, Reveal } from "./primitives";

export function Statement() {
  return (
    <Band tone="dark">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="type-mega">
            Don't automate everything.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <h2 className="mt-4 type-mega text-accent">
            Automate what matters.
          </h2>
        </Reveal>
        <Reveal delay={380}>
          <p className="mt-10 max-w-md type-lead text-ink-foreground/60">
            Good AI strategy isn't about using more AI. It's about knowing where AI can genuinely
            improve the business.
          </p>
        </Reveal>
      </div>
    </Band>
  );
}
