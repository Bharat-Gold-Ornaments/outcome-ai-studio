import { CallCta, Kicker, useInView } from "./primitives";

function SystemDiagram() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  const inputs = [
    { label: "Sales", y: 46 },
    { label: "Marketing", y: 130 },
    { label: "Customer Service", y: 214 },
  ];
  const results = [
    { label: "More leads", y: 56 },
    { label: "Faster response", y: 130 },
    { label: "Less repetitive work", y: 204 },
  ];

  return (
    <div ref={ref} className="w-full">
      <svg
        viewBox="0 0 1010 260"
        role="img"
        aria-label="Diagram: Sales, Marketing and Customer Service feed into AI, then automation, producing business results"
        className={`h-auto w-full ${inView ? "is-live" : ""}`}
      >
        <g className="font-mono">
          {/* input labels */}
          {inputs.map((n, i) => (
            <g key={n.label} className="node" style={{ ["--d" as string]: `${i * 160}ms` }}>
              <text
                x="0"
                y={n.y}
                fill="currentColor"
                fontSize="13"
                letterSpacing="2.4"
                style={{ textTransform: "uppercase" }}
              >
                {n.label.toUpperCase()}
              </text>
              <circle cx="200" cy={n.y - 5} r="3.5" fill="var(--accent)" />
            </g>
          ))}

          {/* input → AI */}
          {inputs.map((n, i) => (
            <path
              key={`in-${n.label}`}
              className="wire"
              style={{ ["--d" as string]: `${300 + i * 160}ms` }}
              d={`M204 ${n.y - 5} C 300 ${n.y - 5}, 320 130, 396 130`}
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.55"
              strokeWidth="1"
            />
          ))}

          {/* AI core */}
          <g className="node" style={{ ["--d" as string]: "760ms" }}>
            <circle cx="440" cy="130" r="44" fill="none" stroke="currentColor" strokeOpacity="0.2" />
            <circle
              cx="440"
              cy="130"
              r="58"
              fill="none"
              stroke="var(--accent)"
              strokeOpacity="0.25"
              strokeDasharray="2 8"
              className="motion-safe:animate-[spin_36s_linear_infinite] origin-[440px_130px]"
            />
            <text
              x="440"
              y="136"
              textAnchor="middle"
              fill="currentColor"
              fontSize="20"
              letterSpacing="3"
            >
              AI
            </text>
          </g>

          {/* AI → automation */}
          <path
            className="wire"
            style={{ ["--d" as string]: "900ms" }}
            d="M498 130 H 592"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
          />
          <g className="node" style={{ ["--d" as string]: "1040ms" }}>
            <text x="596" y="126" fill="currentColor" fontSize="12" letterSpacing="2.4">
              AUTOMATION
            </text>
            <line x1="596" y1="140" x2="686" y2="140" stroke="var(--accent)" strokeOpacity="0.5" />
          </g>

          {/* automation → results */}
          {results.map((r, i) => (
            <g key={r.label}>
              <path
                className="wire"
                style={{ ["--d" as string]: `${1140 + i * 140}ms` }}
                d={`M690 140 C 720 140, 720 ${r.y - 5}, 748 ${r.y - 5}`}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="1"
              />
              <g className="node" style={{ ["--d" as string]: `${1240 + i * 140}ms` }}>
                <text x="756" y={r.y} fill="currentColor" fillOpacity="0.6" fontSize="11" letterSpacing="1.6">
                  {r.label.toUpperCase()}
                </text>
              </g>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[82vh] flex-col justify-center px-6 pt-16 pb-14 md:px-10"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Kicker>AI Consulting &middot; Automation &middot; Training</Kicker>

        <h1 className="mt-10 max-w-4xl type-hero">
          Practical AI.
          <br />
          <span className="text-muted-foreground">Built around your business.</span>
        </h1>

        <p className="mt-8 max-w-xl type-lead text-muted-foreground">
          We identify the right opportunities, build the systems and help your team put them to
          work.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
          <CallCta />
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-sm font-medium tracking-tight transition-colors hover:text-accent"
          >
            Explore
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-1">
              &darr;
            </span>
          </a>
        </div>

        <div className="mt-20 border-t border-border pt-12 text-foreground">
          <SystemDiagram />
        </div>
      </div>
    </section>
  );
}
