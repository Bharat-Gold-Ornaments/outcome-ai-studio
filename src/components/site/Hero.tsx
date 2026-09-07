import { CallCta, Reveal } from "./primitives";

function WorkflowGraphic() {
  return (
    <svg
      viewBox="0 0 420 320"
      role="img"
      aria-label="Abstract diagram of a business workflow becoming an intelligent system"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* left: scattered manual steps */}
      {[40, 96, 152, 208, 264].map((y, i) => (
        <g key={y} className="text-foreground">
          <rect
            x={14 + (i % 2) * 10}
            y={y}
            width="86"
            height="30"
            rx="6"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.22"
          />
          <line
            x1={26 + (i % 2) * 10}
            y1={y + 12}
            x2={70 + (i % 2) * 10}
            y2={y + 12}
            stroke="currentColor"
            strokeOpacity="0.2"
          />
          <line
            x1={26 + (i % 2) * 10}
            y1={y + 20}
            x2={54 + (i % 2) * 10}
            y2={y + 20}
            stroke="currentColor"
            strokeOpacity="0.14"
          />
        </g>
      ))}

      {/* converging connectors */}
      {[55, 111, 167, 223, 279].map((y) => (
        <path
          key={y}
          d={`M110 ${y} C 165 ${y}, 175 160, 232 160`}
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="1.4"
        />
      ))}

      {/* core system node */}
      <g>
        <circle
          cx="252"
          cy="160"
          r="34"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.35"
        />
        <circle cx="252" cy="160" r="20" fill="var(--accent)" fillOpacity="0.12" />
        <circle cx="252" cy="160" r="5" fill="var(--accent)" />
        <circle
          cx="252"
          cy="160"
          r="46"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.16"
          strokeDasharray="3 7"
          className="origin-[252px_160px] motion-safe:animate-[spin_28s_linear_infinite]"
        />
      </g>

      {/* right: clean outputs */}
      {[76, 148, 220].map((y, i) => (
        <g key={y} className="text-foreground">
          <path
            d={`M298 160 C 330 160, 330 ${y + 15}, 350 ${y + 15}`}
            fill="none"
            stroke="var(--accent)"
            strokeOpacity="0.4"
            strokeWidth="1.4"
          />
          <rect
            x="348"
            y={y}
            width="58"
            height="30"
            rx="6"
            fill="var(--card)"
            stroke="var(--accent)"
            strokeOpacity={0.45 - i * 0.08}
          />
          <line x1="358" y1={y + 12} x2="396" y2={y + 12} stroke="currentColor" strokeOpacity="0.28" />
          <line x1="358" y1={y + 20} x2="380" y2={y + 20} stroke="currentColor" strokeOpacity="0.18" />
        </g>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-eyebrow text-accent">AI Consulting &middot; Automation &middot; Training</p>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.02] tracking-tight text-balance md:text-6xl">
              Practical AI for Business.
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl leading-snug text-foreground/85 md:text-2xl">
              Identify where AI can create value. Automate repetitive work. Help your team work
              smarter.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We help businesses discover, implement and improve practical AI systems across Sales,
              Marketing and Customer Service.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallCta />
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-sm font-medium tracking-tight transition-colors hover:border-accent hover:text-accent"
              >
                See How It Works
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 border-t border-border pt-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
                <span>AI Consulting</span>
                <span className="text-accent">&bull;</span>
                <span>AI Automation</span>
                <span className="text-accent">&bull;</span>
                <span>AI Training</span>
              </div>
              <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                {[
                  ["Sales", "More enquiries converted"],
                  ["Marketing", "Faster content and research"],
                  ["Customer Service", "Quicker, consistent replies"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-card px-5 py-4">
                    <dt className="font-display text-sm tracking-[0.16em] uppercase">{k}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:pl-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-lift md:p-8">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              <span>Manual process</span>
              <span className="text-accent">Intelligent system</span>
            </div>
            <div className="mt-6 text-foreground">
              <WorkflowGraphic />
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Illustrative representation of how fragmented manual work is consolidated into a
              designed, supervised AI workflow.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
