import { FlowList, Reveal, Section, SectionHead } from "./primitives";

export function ConsultingDeepDive() {
  const steps = [
    ["01", "Understand", "Understand the business, objectives and current processes."],
    [
      "02",
      "Map",
      "Map workflows and identify repetitive tasks, bottlenecks and manual handoffs.",
    ],
    ["03", "Identify", "Find realistic AI and automation opportunities."],
    ["04", "Prioritise", "Rank opportunities by impact, feasibility, frequency, risk and savings."],
    ["05", "Plan", "Create a practical AI roadmap."],
    ["06", "Implement", "Turn the highest-value opportunities into working systems."],
  ];

  return (
    <Section id="ai-consulting" tone="raised">
      <Reveal>
        <SectionHead
          eyebrow="AI Consulting"
          title="Before we automate anything, we find out what is worth automating."
          lead="AI consulting starts with understanding how your business actually works — not with choosing an AI tool."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(([no, title, body], i) => (
          <Reveal key={no} delay={i * 80}>
            <div className="surface-card h-full p-7">
              <span className="font-mono text-[11px] text-accent">{no} &mdash;</span>
              <h3 className="mt-3 text-sm tracking-[0.16em] uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              {no === "04" ? (
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm text-foreground/85">
                  {["Business impact", "Feasibility", "Frequency", "Risk", "Time or cost savings"].map(
                    (c) => (
                      <li key={c} className="flex gap-2.5">
                        <span aria-hidden="true" className="text-accent">
                          &bull;
                        </span>
                        {c}
                      </li>
                    ),
                  )}
                </ul>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <blockquote className="mt-16 border-l-2 border-accent pl-6 font-display text-2xl leading-snug tracking-tight text-balance md:pl-10 md:text-4xl">
          The goal isn't to use more AI. The goal is to use AI where it actually makes the business
          better.
        </blockquote>
      </Reveal>
    </Section>
  );
}

export function BusinessAudit() {
  const lookFor = [
    "Repetitive work",
    "Manual processes",
    "Delays",
    "Missed opportunities",
    "Communication bottlenecks",
    "Tasks suitable for AI assistance",
    "Tasks suitable for automation",
  ];

  const current = [
    "Customer enquiry",
    "Employee reads message",
    "Employee understands requirement",
    "Employee searches information",
    "Employee prepares response",
    "Employee follows up manually",
    "Employee updates records",
  ];

  const assisted = [
    "Customer enquiry",
    "AI understands the request",
    "AI classifies the enquiry",
    "Relevant information is retrieved",
    "AI prepares response",
    "Human reviews where required",
    "Customer receives response",
    "Follow-up is triggered",
    "Sales opportunity is recorded",
  ];

  return (
    <Section id="ai-audit">
      <Reveal>
        <SectionHead
          eyebrow="Business AI Audit"
          title="See where AI can actually make a difference."
          lead="The audit examines three areas of your business and looks for the work that AI is genuinely suited to."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {["Sales", "Marketing", "Customer Service"].map((area, i) => (
          <Reveal key={area} delay={i * 90} className="bg-card">
            <div className="h-full p-7">
              <h3 className="font-display text-xl tracking-tight">{area}</h3>
              <p className="mt-1 text-eyebrow text-muted-foreground">We look for</p>
              <ul className="mt-4 space-y-2">
                {lookFor.map((l) => (
                  <li key={l} className="flex gap-2.5 text-sm text-foreground/85">
                    <span aria-hidden="true" className="text-accent">
                      &bull;
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-muted/60 p-7 md:p-8">
            <p className="text-eyebrow text-muted-foreground">Current process</p>
            <div className="mt-5">
              <FlowList steps={current} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-accent/30 bg-card p-7 shadow-lift md:p-8">
            <p className="text-eyebrow text-accent">Potential AI-assisted process</p>
            <div className="mt-5">
              <FlowList steps={assisted} tone="accent" />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <p className="mt-6 text-xs text-muted-foreground">
          Example workflow. Actual solutions are designed around each business.
        </p>
      </Reveal>
    </Section>
  );
}

export function Roadmap() {
  const buckets = [
    {
      title: "Quick wins",
      body: "High value + relatively easy to implement.",
      note: "Start here",
      accent: true,
    },
    {
      title: "Strategic projects",
      body: "Higher complexity + potentially significant business impact.",
      note: "Build next",
      accent: false,
    },
    {
      title: "Do not automate",
      body: "Low-value, unnecessary or high-risk processes.",
      note: "Leave alone",
      accent: false,
    },
  ];

  return (
    <Section id="ai-roadmap" tone="raised">
      <Reveal>
        <SectionHead
          eyebrow="AI Roadmap"
          title="Not everything should be automated."
          lead="Good AI consulting isn't about automating everything. It's about identifying the right opportunities and implementing them in the right order."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {buckets.map((b, i) => (
          <Reveal key={b.title} delay={i * 90}>
            <div
              className={`surface-card h-full p-7 md:p-8 ${b.accent ? "border-accent/40" : ""} ${
                b.title === "Do not automate" ? "opacity-80" : ""
              }`}
            >
              <p className="text-eyebrow text-muted-foreground">{b.note}</p>
              <h3 className="mt-4 font-display text-2xl tracking-tight">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              <div className="mt-7 flex gap-1.5" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, n) => (
                  <span
                    key={n}
                    className={`h-1.5 flex-1 rounded-full ${
                      n < (i === 0 ? 5 : i === 1 ? 3 : 1) ? "bg-accent/70" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <p className="mt-14 max-w-2xl font-display text-2xl leading-snug tracking-tight md:text-3xl">
          Your roadmap tells you what to do now, what to build next and what can wait.
        </p>
      </Reveal>
    </Section>
  );
}

export function Automation() {
  const steps = [
    ["01", "Design", "Define exactly how the workflow should operate."],
    ["02", "Build", "Develop the AI workflow and automation."],
    [
      "03",
      "Connect",
      "Integrate existing tools, software, APIs and business systems where appropriate.",
    ],
    ["04", "Test", "Test normal cases, edge cases and failure scenarios."],
    [
      "05",
      "Human oversight",
      "Keep human approval where judgement, accuracy or business risk requires it.",
    ],
    ["06", "Deploy", "Put the system into real business use."],
    ["07", "Document", "Provide clear documentation so the business understands the system."],
  ];

  return (
    <Section id="ai-automation">
      <Reveal>
        <SectionHead
          eyebrow="AI Automation"
          title="From roadmap to working system."
          lead="Implementation is deliberate: designed, tested, supervised and documented."
        />
      </Reveal>

      <div className="mt-14 divide-y divide-border border-y border-border">
        {steps.map(([no, title, body], i) => (
          <Reveal key={no} delay={i * 60}>
            <div className="group grid gap-2 py-6 transition-colors hover:bg-card md:grid-cols-[6rem_14rem_1fr] md:items-baseline md:gap-6 md:px-2">
              <span className="font-mono text-[11px] text-accent">{no}</span>
              <h3 className="font-display text-lg tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <blockquote className="mt-14 border-l-2 border-accent pl-6 font-display text-2xl leading-snug tracking-tight text-balance md:pl-10 md:text-3xl">
          Automation should remove repetitive work &mdash; not remove necessary human judgement.
        </blockquote>
      </Reveal>
    </Section>
  );
}

export function Training() {
  const categories = [
    ["Executive AI", "Understand AI opportunities, risks and strategic applications."],
    ["Team AI", "Practical AI workflows for everyday work."],
    ["Role-specific AI", "Training designed around Sales, Marketing and Customer Service."],
  ];
  const examples = [
    ["Sales", "Research, follow-ups, proposals, lead handling."],
    ["Marketing", "Research, content creation, campaigns and reporting."],
    ["Customer Service", "Response assistance, knowledge retrieval, enquiry handling and escalation."],
  ];

  return (
    <Section id="ai-training" tone="raised">
      <Reveal>
        <SectionHead
          eyebrow="AI Training"
          title="Technology only creates value when people use it."
          lead="We help teams understand how to use AI effectively within their actual roles — not simply teach generic prompting."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {categories.map(([title, body], i) => (
          <Reveal key={title} delay={i * 90}>
            <div className="surface-card h-full p-7">
              <h3 className="text-sm tracking-[0.16em] uppercase">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {examples.map(([area, body]) => (
            <div key={area} className="bg-background px-6 py-7">
              <p className="font-display text-sm tracking-[0.16em] uppercase text-accent">{area}</p>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function Partnership() {
  const items = [
    "Automation monitoring",
    "Workflow improvements",
    "AI system optimisation",
    "New automation opportunities",
    "Monthly AI review",
    "Employee support",
    "New AI tool evaluation",
    "Ongoing training",
    "Continuous improvement",
  ];

  return (
    <Section id="ai-partnership" tone="ink">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <Reveal>
          <p className="text-eyebrow text-accent-soft">AI Partnership / Retainer</p>
          <h2 className="mt-5 font-display text-3xl leading-[1.1] tracking-tight text-balance md:text-5xl">
            AI doesn't stop at implementation.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-foreground/75">
            As your business changes and AI capabilities evolve, your systems should improve with
            them.
          </p>
          <p className="mt-8 font-display text-2xl tracking-tight text-accent-soft">
            Think of us as your external AI team.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {items.map((i) => (
              <li
                key={i}
                className="flex gap-2.5 border-b border-ink-foreground/15 pb-3 text-sm text-ink-foreground/85"
              >
                <span aria-hidden="true" className="text-accent-soft">
                  &bull;
                </span>
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
