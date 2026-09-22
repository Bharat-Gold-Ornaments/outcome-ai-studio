import { serviceCategories } from "@/config/services";
import { Band, Kicker, Reveal } from "./primitives";

export function Services() {
  return (
    <Band id="services">
      <Reveal>
        <Kicker>Services</Kicker>
        <h2 className="mt-8 max-w-2xl type-section">Five stages, one AI partner.</h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {serviceCategories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 90} className="h-full">
            <div className="group flex h-full flex-col bg-card p-7 transition-colors duration-500 hover:bg-secondary">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-primary">
                {cat.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{cat.line}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {cat.items.map((item) => (
                  <li key={item} className="text-[13px] leading-snug text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 max-w-md type-lead text-muted-foreground">
          From identifying the opportunity to putting AI into everyday business use &mdash; and
          keeping it running.
        </p>
      </Reveal>
    </Band>
  );
}

export function Partnership() {
  return (
    <Band id="about">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <Reveal>
          <h2 className="max-w-lg type-section">AI doesn't end at implementation.</h2>
          <p className="mt-6 max-w-sm type-lead text-muted-foreground">
            Businesses evolve. AI evolves. Your systems should too.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-eyebrow text-accent">AI Partnership</p>
          <ul className="mt-6 divide-y divide-border border-y border-border text-sm">
            {["Continuous optimisation", "New workflows", "Team support", "AI adoption"].map(
              (i) => (
                <li key={i} className="py-3.5 text-foreground/85">
                  {i}
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </div>
    </Band>
  );
}
