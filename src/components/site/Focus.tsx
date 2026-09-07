import { useState } from "react";
import { Band, Kicker, Reveal } from "./primitives";

const areas = [
  {
    no: "01",
    name: "Sales",
    apps: ["Lead qualification", "Follow-ups", "Enquiry handling", "Sales intelligence"],
  },
  {
    no: "02",
    name: "Marketing",
    apps: ["Content workflows", "Research", "Campaigns", "Reporting"],
  },
  {
    no: "03",
    name: "Customer Service",
    apps: ["Enquiry handling", "Response assistance", "Knowledge retrieval", "Escalation"],
  },
];

export function Focus() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Band id="work">
      <Reveal>
        <Kicker>Focus</Kicker>
        <h2 className="mt-8 max-w-3xl font-display text-[2.25rem] leading-[1.02] tracking-[-0.02em] text-balance md:text-6xl">
          AI should work where your business works.
        </h2>
      </Reveal>

      <div className="mt-20 border-t border-border">
        {areas.map((a, i) => {
          const open = active === a.name;
          return (
            <Reveal key={a.name} delay={i * 90}>
              <div
                onMouseEnter={() => setActive(a.name)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(a.name)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className="group border-b border-border py-10 outline-none transition-colors duration-500 hover:bg-card focus-visible:bg-card md:py-14"
              >
                <div className="grid items-baseline gap-6 md:grid-cols-[6rem_1fr_18rem]">
                  <span className="font-mono text-xs text-accent">{a.no}</span>
                  <h3 className="font-display text-[2.5rem] leading-[0.98] tracking-[-0.03em] uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-[4.25rem]">
                    {a.name}
                  </h3>
                  <ul
                    className={`grid gap-1.5 text-sm text-muted-foreground transition-all duration-500 ${
                      open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 md:opacity-0"
                    }`}
                  >
                    {a.apps.map((app) => (
                      <li key={app}>{app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Band>
  );
}
