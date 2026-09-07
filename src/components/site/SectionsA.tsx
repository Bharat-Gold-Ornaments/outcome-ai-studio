import { CallCta, Reveal, Section, SectionHead } from "./primitives";

export function Problem() {
  const cards = [
    {
      title: "Too many tools",
      body: "Teams experiment with AI, but without a clear strategy or workflow.",
    },
    {
      title: "Too much repetitive work",
      body: "Employees spend valuable time on repetitive tasks that could be assisted or automated.",
    },
    {
      title: "No clear implementation path",
      body: "Businesses know AI matters, but don't know what to implement first.",
    },
  ];

  return (
    <Section id="problem" tone="raised">
      <Reveal>
        <SectionHead
          eyebrow="The problem"
          title="AI is powerful. Knowing where to use it is the hard part."
          lead="Most businesses don't need more AI tools. They need clarity on where AI can actually improve their business."
        />
      </Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 90} className="bg-background">
            <div className="h-full px-7 py-9">
              <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-sm tracking-[0.16em] uppercase">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-12 max-w-2xl font-display text-2xl leading-snug tracking-tight md:text-3xl">
          We help turn AI from an experiment into a practical business system.
        </p>
      </Reveal>
    </Section>
  );
}

export function WhatWeDo() {
  const services = [
    {
      no: "01",
      title: "AI Consulting",
      tagline: "Find where AI can create measurable business value.",
      body: "We analyse your business processes across Sales, Marketing and Customer Service, identify practical AI opportunities, assess feasibility and create a prioritised implementation roadmap.",
      items: [
        "Business AI assessment",
        "Workflow analysis",
        "AI opportunity identification",
        "Use-case prioritisation",
        "AI roadmap",
      ],
      cta: "Explore AI Consulting",
      href: "#ai-consulting",
    },
    {
      no: "02",
      title: "AI Automation",
      tagline: "Turn opportunities into working systems.",
      body: "We design and implement AI-powered workflows that automate repetitive processes, improve response times and help your team operate more efficiently.",
      items: [
        "Workflow design",
        "AI implementation",
        "Process automation",
        "Tool and API integration",
        "Testing and deployment",
      ],
      cta: "Explore AI Automation",
      href: "#ai-automation",
    },
    {
      no: "03",
      title: "AI Training",
      tagline: "Make AI useful for your team.",
      body: "We train teams to use AI effectively within their actual roles and help employees adopt the AI systems implemented in their business.",
      items: [
        "Executive AI workshops",
        "Team training",
        "Role-specific AI workflows",
        "AI best practices",
        "Adoption support",
      ],
      cta: "Explore AI Training",
      href: "#ai-training",
    },
  ];

  return (
    <Section id="what-we-do">
      <Reveal>
        <SectionHead
          eyebrow="What we do"
          title="From AI opportunity to implementation."
          lead="We don't start with technology. We start with your business."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          {["Discover", "Implement", "Enable", "Improve"].map((s, i) => (
            <span key={s} className="flex items-center gap-4">
              <span className={i === 0 ? "text-accent" : undefined}>{s}</span>
              {i < 3 ? <span aria-hidden="true" className="text-accent/50">&rarr;</span> : null}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="surface-card flex h-full flex-col p-7 md:p-8">
              <span className="font-mono text-[11px] text-accent">{s.no} &mdash;</span>
              <h3 className="mt-3 font-display text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-accent">{s.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {s.items.map((d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-foreground/85">
                    <span aria-hidden="true" className="text-accent">
                      &bull;
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {s.cta} <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-14 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-display text-xl tracking-tight">
            Not sure which stage you're at? That's exactly what the first conversation is for.
          </p>
          <CallCta />
        </div>
      </Reveal>
    </Section>
  );
}

export function FocusAreas() {
  const areas = [
    {
      area: "Sales",
      headline: "Turn more enquiries into opportunities.",
      apps: [
        "Lead qualification",
        "Lead response",
        "Follow-ups",
        "Customer enquiry handling",
        "Sales research",
        "Proposal assistance",
        "CRM workflows",
        "Sales reporting",
      ],
    },
    {
      area: "Marketing",
      headline: "Create, distribute and analyse marketing faster.",
      apps: [
        "Content workflows",
        "Market research",
        "Campaign ideation",
        "Social media workflows",
        "Customer segmentation",
        "Content repurposing",
        "Marketing reporting",
        "Competitive research",
      ],
    },
    {
      area: "Customer Service",
      headline: "Respond faster without losing the human touch.",
      apps: [
        "FAQ assistance",
        "Customer enquiry handling",
        "Email assistance",
        "WhatsApp assistance",
        "Ticket classification",
        "Knowledge assistants",
        "Response drafting",
        "Escalation workflows",
      ],
    },
  ];

  return (
    <Section id="use-cases" tone="raised">
      <Reveal>
        <SectionHead
          eyebrow="Three focus areas"
          title="AI where it matters most."
          lead="We focus on customer-facing business functions where AI can create immediate, measurable improvements."
        />
      </Reveal>

      <div className="mt-14 space-y-6">
        {areas.map((a, i) => (
          <Reveal key={a.area} delay={i * 90}>
            <article className="surface-card grid gap-8 p-7 md:grid-cols-[minmax(0,1fr)_1.3fr] md:p-10">
              <div>
                <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">{a.area}</h3>
                <p className="mt-4 max-w-sm text-lg leading-snug text-foreground/85">{a.headline}</p>
              </div>
              <div>
                <p className="text-eyebrow text-muted-foreground">Potential applications</p>
                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {a.apps.map((app) => (
                    <li
                      key={app}
                      className="flex gap-2.5 border-b border-border/70 pb-2.5 text-sm text-foreground/85"
                    >
                      <span aria-hidden="true" className="text-accent">
                        &bull;
                      </span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-xs text-muted-foreground">
          These are examples of potential applications. Not every business receives every solution
          &mdash; the right ones are identified during consulting.
        </p>
      </Reveal>
    </Section>
  );
}

export function HowItWorks() {
  const steps = [
    ["01", "Discovery Call", "We understand your business, goals, current processes and challenges."],
    [
      "02",
      "Business AI Audit",
      "We examine your Sales, Marketing and Customer Service workflows to identify where AI can create value.",
    ],
    [
      "03",
      "Identify Opportunities",
      "We identify practical opportunities for AI, automation and AI-assisted workflows.",
    ],
    [
      "04",
      "Prioritise Use Cases",
      "We rank opportunities based on business impact, feasibility, frequency and risk.",
    ],
    [
      "05",
      "AI Roadmap",
      "You receive a practical plan showing what to implement first, what comes next and what can wait.",
    ],
    [
      "06",
      "Implementation",
      "We design and build the highest-value AI workflows and automation systems.",
    ],
    ["07", "Team Training", "We help your team understand and effectively use the new AI systems."],
    [
      "08",
      "Continuous Improvement",
      "We continuously identify new opportunities and improve existing systems as your business evolves.",
    ],
  ];

  return (
    <Section id="how-it-works">
      <Reveal>
        <SectionHead
          eyebrow="How it works"
          title="A clear path from AI curiosity to business impact."
          lead="One journey, not a menu of disconnected services."
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] tracking-[0.2em] uppercase">
          {["Discover", "Analyse", "Prioritise", "Implement", "Train", "Improve"].map((s, i) => (
            <span key={s} className="flex items-center gap-4 text-muted-foreground">
              <span>{s}</span>
              {i < 5 ? (
                <span aria-hidden="true" className="text-accent/60">
                  &rarr;
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </Reveal>

      <ol className="relative mt-12 border-l border-border pl-8 md:mt-16 md:grid md:grid-cols-2 md:gap-x-14 md:border-l-0 md:pl-0">
        {steps.map(([no, title, body], i) => (
          <Reveal key={no} delay={i * 70}>
            <li className="relative pb-10 md:border-l md:border-border md:pb-12 md:pl-8">
              <span className="absolute top-1.5 -left-[2.15rem] h-2 w-2 rounded-full bg-accent md:-left-[0.3rem]" />
              <span className="font-mono text-[11px] text-accent">{no}</span>
              <h3 className="mt-2 font-display text-xl tracking-tight">{title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <div className="flex justify-start border-t border-border pt-10">
          <CallCta />
        </div>
      </Reveal>
    </Section>
  );
}
