import { Band, Kicker, Reveal, useInView } from "./primitives";

const messy = ["Manual work", "Emails", "Messages", "Spreadsheets", "Follow-ups", "Repetitive tasks"];
const map = [
  ["Automate", "Repetitive, rule-based"],
  ["Assist", "Human, with support"],
  ["Improve", "Faster, more consistent"],
  ["Keep human", "Judgement, relationships"],
] as const;

export function Audit() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <Band id="audit">
      <Reveal>
        <Kicker>AI audit</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-[2.25rem] leading-[1.02] tracking-[-0.02em] text-balance md:text-6xl">
          A process in. An opportunity map out.
        </h2>
      </Reveal>

      <div ref={ref} className="mt-20 grid gap-14 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
        <div>
          <p className="text-eyebrow text-muted-foreground">Business process</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {messy.map((m, i) => (
              <span
                key={m}
                style={{ transitionDelay: `${i * 70}ms`, transform: `rotate(${(i % 3) - 1}deg)` }}
                className={`border border-border px-4 py-2 text-sm text-muted-foreground transition-opacity duration-700 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 lg:px-6">
          <span
            aria-hidden="true"
            className={`h-16 w-px origin-top bg-accent/50 transition-transform duration-700 lg:hidden ${
              inView ? "scale-y-100" : "scale-y-0"
            }`}
          />
          <span
            aria-hidden="true"
            className={`hidden h-px w-24 origin-left bg-accent/50 transition-transform duration-700 lg:block ${
              inView ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <span className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
            AI Audit
          </span>
          <span
            aria-hidden="true"
            className={`hidden h-px w-24 origin-left bg-accent/50 transition-transform delay-200 duration-700 lg:block ${
              inView ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>

        <div>
          <p className="text-eyebrow text-muted-foreground">Opportunity map</p>
          <dl className="mt-6 divide-y divide-border border-y border-border">
            {map.map(([k, v], i) => (
              <div
                key={k}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
                className={`flex items-baseline justify-between gap-6 py-4 transition-all duration-700 ${
                  inView ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0"
                }`}
              >
                <dt className="font-display text-lg tracking-[0.06em] uppercase">{k}</dt>
                <dd className="text-sm text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <Reveal>
        <p className="mt-14 max-w-md text-sm text-muted-foreground">
          We find where AI creates value &mdash; and where it shouldn't be used.
        </p>
      </Reveal>
    </Band>
  );
}
