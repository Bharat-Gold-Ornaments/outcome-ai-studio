import { Band, Kicker, Reveal } from "./primitives";

const services = [
  ["01", "AI Consulting", "Find the opportunities."],
  ["02", "AI Automation", "Build the systems."],
  ["03", "AI Training", "Enable the people."],
] as const;

export function Services() {
  return (
    <Band id="services">
      <Reveal>
        <Kicker>Services</Kicker>
      </Reveal>

      <div className="mt-16 border-t border-border">
        {services.map(([no, name, line], i) => (
          <Reveal key={no} delay={i * 100}>
            <div className="group grid items-baseline gap-2 border-b border-border py-10 md:grid-cols-[5rem_1fr_1fr] md:gap-8 md:py-14">
              <span className="font-mono text-xs text-accent">{no}</span>
              <h3 className="type-item uppercase">
                {name}
              </h3>
              <p className="font-display text-xl text-muted-foreground transition-colors duration-500 group-hover:text-foreground md:text-2xl">
                {line}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-10 max-w-md text-sm text-muted-foreground">
          From identifying the opportunity to putting AI into everyday business use.
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
          <h2 className="max-w-lg type-section">
            AI doesn't end at implementation.
          </h2>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Businesses evolve. AI evolves. Your systems should too.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-eyebrow text-accent">AI Partnership</p>
          <ul className="mt-6 divide-y divide-border border-y border-border text-sm">
            {["Continuous optimisation", "New workflows", "Team support", "AI adoption"].map((i) => (
              <li key={i} className="py-3.5 text-foreground/85">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Band>
  );
}
