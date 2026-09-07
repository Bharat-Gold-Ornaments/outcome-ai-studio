import { Compass, Cog, GraduationCap } from "lucide-react";
import { CallCta, Reveal, Section, SectionHead } from "./primitives";
import beforeAfter from "@/assets/before-after.jpg";
import areaSales from "@/assets/area-sales.jpg";
import areaMarketing from "@/assets/area-marketing.jpg";
import areaService from "@/assets/area-service.jpg";

export function Problem() {
  return (
    <Section id="problem" tone="raised">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <SectionHead
            eyebrow="The problem"
            title="AI is powerful. Knowing where to use it is the hard part."
            lead="Teams experiment with too many tools and no clear workflow — while repetitive work keeps piling up."
          />
          <ul className="mt-8 space-y-3">
            {["Too many tools, no strategy", "Too much repetitive work", "No clear place to start"].map(
              (t, i) => (
                <li key={t} className="flex items-center gap-3 text-base text-foreground/85">
                  <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                  <span aria-hidden="true" className="h-px w-6 bg-accent/50" />
                  {t}
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <figure className="overflow-hidden rounded-2xl border border-border bg-background">
            <img
              src={beforeAfter}
              alt="Tangled scattered tasks on the left merging into one clean workflow on the right"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full transition-transform duration-700 hover:scale-[1.03]"
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-border px-6 py-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              <span>Scattered today</span>
              <span aria-hidden="true" className="h-px flex-1 bg-accent/40" />
              <span className="text-accent">One designed system</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}

export function WhatWeDo() {
  const services = [
    {
      no: "01",
      Icon: Compass,
      title: "AI Consulting",
      tagline: "Find where AI can create measurable value.",
    },
    {
      no: "02",
      Icon: Cog,
      title: "AI Automation",
      tagline: "Turn opportunities into working systems.",
    },
    {
      no: "03",
      Icon: GraduationCap,
      title: "AI Training",
      tagline: "Make AI genuinely useful for your team.",
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

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 100}>
            <article className="surface-card group flex h-full flex-col p-7 md:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/5 text-accent transition-transform duration-300 group-hover:scale-110">
                <s.Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="mt-6 font-mono text-[11px] text-accent">{s.no}</span>
              <h3 className="mt-2 font-display text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s.tagline}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-full border border-border bg-border sm:grid-cols-4">
          {["Discover", "Implement", "Enable", "Improve"].map((s, i) => (
            <li
              key={s}
              className="flex items-center justify-center gap-2 bg-card px-4 py-4 font-mono text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-accent/5"
            >
              <span className="text-accent">0{i + 1}</span>
              <span className="text-muted-foreground">{s}</span>
            </li>
          ))}
        </ol>
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
      apps: ["Lead qualification", "Fast enquiry response", "Follow-ups"],
    },
    {
      area: "Marketing",
      image: areaMarketing,
      headline: "Create and research faster.",
      apps: ["Content workflows", "Market research", "Content repurposing"],
    },
    {
      area: "Customer Service",
      image: areaService,
      headline: "Respond faster, stay human.",
      apps: ["Email and WhatsApp support", "Ticket classification", "Knowledge assistants"],
    },
  ];

  return (
    <Section id="use-cases" tone="raised">
      <Reveal>
        <SectionHead
          eyebrow="Three focus areas"
          title="AI where it matters most."
          lead="Sales, Marketing and Customer Service — where AI creates immediate, visible improvements."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {areas.map((a, i) => (
          <Reveal key={a.area} delay={i * 90}>
            <article className="surface-card group flex h-full flex-col overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={a.image}
                  alt={`Illustration representing AI applied to ${a.area}`}
                  loading="lazy"
                  width={960}
                  height={640}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
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
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-muted-foreground">
            Examples of potential applications. The right ones are identified in the first
            conversation.
          </p>
          <CallCta />
        </div>
      </Reveal>
    </Section>
  );
}
