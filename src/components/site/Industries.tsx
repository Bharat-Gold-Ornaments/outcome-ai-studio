import { useState } from "react";
import { industries } from "@/config/industries";
import { Band, Kicker, Reveal } from "./primitives";

export function Industries() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Band id="industries">
      <Reveal>
        <Kicker>Industries</Kicker>
        <h2 className="mt-8 max-w-3xl type-section">Depth in the industries we serve.</h2>
      </Reveal>

      <div className="mt-20 border-t border-border">
        {industries.map((ind, i) => {
          const open = active === ind.slug;
          return (
            <Reveal key={ind.slug} delay={i * 90}>
              <div
                id={`industry-${ind.slug}`}
                onMouseEnter={() => setActive(ind.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(ind.slug)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className="group scroll-mt-24 border-b border-border py-10 outline-none transition-colors duration-500 hover:bg-card focus-visible:bg-card md:py-14"
              >
                <div className="grid items-baseline gap-6 md:grid-cols-[6rem_1fr_20rem]">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="type-item uppercase transition-transform duration-500 group-hover:translate-x-2">
                      {ind.name}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-muted-foreground">{ind.blurb}</p>
                  </div>
                  <ul
                    className={`grid gap-1.5 text-sm text-muted-foreground transition-all duration-500 ${
                      open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 md:opacity-0"
                    }`}
                  >
                    {ind.apps.map((app) => (
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
