import { CallCta, Reveal, Section, SectionHead } from "./primitives";
import areaSales from "@/assets/area-sales.jpg";
import areaMarketing from "@/assets/area-marketing.jpg";
import areaService from "@/assets/area-service.jpg";

export function Problem() {
  const cards = [
    {
      title: "Too many tools",
      body: "Teams experiment with AI without a clear strategy or workflow — and some businesses haven't started using AI tools at all.",
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
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          <div className="bg-card px-7 py-8">
            <p className="text-eyebrow text-muted-foreground">Today</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {["Scattered tools", "Manual hand-offs", "Inconsistent output", "Slow responses"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-6 bg-border" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="bg-card px-7 py-8">
            <p className="text-eyebrow text-accent">With a designed system</p>
            <ul className="mt-5 space-y-3 text-sm text-foreground/85">
              {[
                "One clear workflow",
                "Automated hand-offs",
                "Consistent quality",
                "Faster replies",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-6 bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal delay={160}>
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
      items: ["Workflow analysis", "Opportunity identification", "Prioritised AI roadmap"],
    },
    {
      no: "02",
      title: "AI Automation",
      tagline: "Turn opportunities into working systems.",
      items: ["Workflow design", "Process automation", "Tool and API integration"],
    },
    {
      no: "03",
      title: "AI Training",
      tagline: "Make AI useful for your team.",
      items: ["Executive workshops", "Role-specific workflows", "Adoption support"],
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
        <ol className="mt-12 grid gap-px overflow-hidden rounded-full border border-border bg-border sm:grid-cols-4">
          {["Discover", "Implement", "Enable", "Improve"].map((s, i) => (
            <li
              key={s}
              className="flex items-center justify-center gap-2 bg-card px-4 py-4 font-mono text-[11px] tracking-[0.2em] uppercase"
            >
              <span className="text-accent">0{i + 1}</span>
              <span className={i === 0 ? "text-accent" : "text-muted-foreground"}>{s}</span>
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="surface-card flex h-full flex-col p-7 md:p-8">
              <span className="font-mono text-[11px] text-accent">{s.no} &mdash;</span>
              <h3 className="mt-3 font-display text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-accent">{s.tagline}</p>
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
      image: areaSales,
      headline: "Turn more enquiries into opportunities.",
      apps: ["Lead qualification", "Fast enquiry response", "Follow-ups", "CRM workflows"],
    },
    {
      area: "Marketing",
      image: areaMarketing,
      headline: "Create, distribute and analyse marketing faster.",
      apps: ["Content workflows", "Market research", "Campaign ideation", "Content repurposing"],
    },
    {
      area: "Customer Service",
      image: areaService,
      headline: "Respond faster without losing the human touch.",
      apps: ["Email and WhatsApp support", "Ticket classification", "Knowledge assistants", "Escalation workflows"],
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

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {areas.map((a, i) => (
          <Reveal key={a.area} delay={i * 90}>
            <article className="surface-card flex h-full flex-col overflow-hidden">
              <img
                src={a.image}
                alt={`Illustration representing AI applied to ${a.area}`}
                loading="lazy"
                width={960}
                height={640}
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-7">
                <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl tracking-tight">{a.area}</h3>
                <p className="mt-3 text-base leading-snug text-foreground/85">{a.headline}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {a.apps.map((app) => (
                    <li key={app} className="flex gap-2.5 text-sm text-muted-foreground">
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
          These are examples of potential applications. The right ones are identified during the
          first conversation.
        </p>
      </Reveal>
    </Section>
  );
}
