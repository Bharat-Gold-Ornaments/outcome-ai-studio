import { useState } from "react";
import { Band, Kicker, Reveal } from "./primitives";

const steps = [
  ["Customer enquiry", "Data required"],
  ["Understand", "AI can assist"],
  ["Classify", "AI can automate"],
  ["Respond", "AI can assist"],
  ["Follow up", "AI can automate"],
  ["Sales opportunity", "Human decision"],
] as const;

const tagTone: Record<string, string> = {
  "AI can automate": "bg-accent text-accent-foreground",
  "AI can assist": "bg-accent/15 text-accent",
  "Human decision": "bg-ink-foreground/10 text-ink-foreground",
  "Data required": "bg-ink-foreground/10 text-ink-foreground/70",
};

export function WorkflowDemo() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Band id="workflow" tone="dark">
      <Reveal>
        <Kicker>Live example</Kicker>
        <h2 className="mt-8 max-w-3xl type-section">What could AI change in your business?</h2>
        <p className="mt-6 max-w-md type-lead text-ink-foreground/60">
          Hover a stage. One enquiry, six moments &mdash; some automated, some assisted, some
          entirely human.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <ol className="mt-20 grid gap-px bg-ink-foreground/10 md:grid-cols-6">
          {steps.map(([label, tag], i) => {
            const on = active === i;
            return (
              <li
                key={label}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={`relative min-h-[13rem] cursor-default bg-ink px-5 py-6 outline-none transition-colors duration-500 ${
                  on ? "bg-ink-foreground/[0.06]" : ""
                }`}
              >
                <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                <p className="mt-5 font-display text-lg leading-snug tracking-tight">{label}</p>
                <span
                  aria-hidden={!on}
                  className={`absolute bottom-6 left-5 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.14em] uppercase transition-all duration-400 ${
                    tagTone[tag]
                  } ${on ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
                >
                  {tag}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute top-0 left-0 h-px w-full origin-left bg-accent transition-transform duration-500 ${
                    on ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </li>
            );
          })}
        </ol>
      </Reveal>
    </Band>
  );
}
