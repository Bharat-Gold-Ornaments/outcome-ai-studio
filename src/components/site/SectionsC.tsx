import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CallCta, Reveal, Section, SectionHead } from "./primitives";

export function ExampleWorkflow() {
  const flow = [
    "Customer enquiry",
    "AI understands request",
    "AI classifies enquiry",
    "Information retrieved",
    "Response prepared",
    "Human approval where required",
    "Customer response",
    "Follow-up",
    "Sales team notified",
  ];

  return (
    <Section id="example-workflow">
      <Reveal>
        <SectionHead
          eyebrow="Example workflow"
          title="From repetitive process to intelligent workflow."
          lead="A simplified illustration of how an everyday enquiry becomes a designed, supervised workflow."
        />
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {flow.map((step, i) => (
          <Reveal key={step} delay={i * 60}>
            <div className="relative h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
              <span className="font-mono text-[11px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-base leading-snug tracking-tight">{step}</p>
              {i < flow.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-6 text-accent/60 sm:right-4 sm:bottom-4 sm:left-auto"
                >
                  &darr;
                </span>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 text-xs text-muted-foreground">
          This is only an example. Every workflow is designed around the business it serves.
        </p>
      </Reveal>
    </Section>
  );
}

export function WhoWeWorkWith() {
  const who = [
    "Growing businesses",
    "SMEs",
    "Founder-led businesses",
    "Sales-driven businesses",
    "Customer-focused businesses",
    "Teams looking to adopt AI practically",
  ];

  return (
    <Section id="about" tone="raised">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <SectionHead
            eyebrow="Who we work with"
            title="Built for businesses ready to put AI to work."
            lead="We work with organisations that want AI applied to real processes — with clear priorities and measurable outcomes."
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {who.map((w) => (
              <li
                key={w}
                className="rounded-xl border border-border bg-background px-5 py-4 text-sm text-foreground/85"
              >
                {w}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

export function EngagementModel() {
  const stages = [
    ["01", "Discovery Call", "Free initial conversation.", true],
    ["02", "AI Consulting", "Business AI Audit and opportunity assessment.", false],
    ["03", "AI Roadmap", "Prioritised implementation plan.", false],
    ["04", "AI Automation", "Build and deploy selected systems.", false],
    ["05", "AI Training", "Help the team adopt AI effectively.", false],
    ["06", "AI Partnership", "Ongoing optimisation and new opportunities.", false],
  ] as const;

  return (
    <Section id="engagement">
      <Reveal>
        <SectionHead
          eyebrow="Engagement model"
          title="Start with a conversation."
          lead="Every business has different processes, systems and priorities. We start by understanding yours before recommending technology."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {stages.map(([no, title, body, free], i) => (
          <Reveal key={no} delay={i * 80}>
            <div
              className={`surface-card h-full p-7 ${
                free ? "border-accent bg-accent/5" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-accent">{no}</span>
                <span
                  className={`rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] uppercase ${
                    free
                      ? "bg-accent text-accent-foreground"
                      : "border border-border text-muted-foreground"
                  }`}
                >
                  {free ? "Free" : "Paid engagement"}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-12 flex flex-col items-start gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-muted-foreground">
            The Discovery Call is free and carries no obligation. Let's understand your business and
            explore where AI could create real value.
          </p>
          <CallCta />
        </div>
      </Reveal>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section id="book" tone="ink">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-eyebrow text-accent-soft">Next step</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.08] tracking-tight text-balance md:text-5xl">
            Your business already has processes. Let's find out which ones AI can improve.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
            Start with a conversation about your business, your challenges and where AI could create
            measurable value.
          </p>
          <div className="mt-9 flex justify-center">
            <CallCta variant="light" />
          </div>
          <p className="mt-5 text-xs text-ink-foreground/60">
            No commitment. Just a conversation about where AI could create value in your business.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

const faqs = [
  [
    "What is an AI Discovery Call?",
    "A short initial conversation where we learn about your business, your goals and the processes you think could benefit from AI.",
  ],
  [
    "Do I need to already use AI?",
    "No. We can start from where you are and identify practical opportunities based on your current processes and tools.",
  ],
  [
    "Do you only work with large companies?",
    "No. The approach is designed for businesses that want to adopt AI practically, including growing businesses and SMEs.",
  ],
  [
    "Do you build custom AI automations?",
    "Yes. After identifying and prioritising an opportunity, we can design and implement AI-powered workflows around the business's specific requirements.",
  ],
  [
    "Can you work with our existing software?",
    "Where technically appropriate, we can work with existing tools, software and APIs rather than requiring the business to replace everything.",
  ],
  [
    "Do you provide team training?",
    "Yes. Training can be designed for executives, teams or specific roles such as Sales, Marketing and Customer Service.",
  ],
  [
    "Do you provide ongoing support?",
    "Yes. Ongoing AI partnership can include monitoring, optimisation, new workflows, training and continuous improvement.",
  ],
  [
    "What happens after the Discovery Call?",
    "If there is a clear opportunity, we can recommend an AI Business Audit or consulting engagement. There is no requirement to proceed.",
  ],
] as const;

export function Faq() {
  return (
    <Section id="faq" tone="raised">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHead eyebrow="FAQ" title="Questions, answered." />
        </Reveal>
        <Reveal delay={80}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(([q, a], i) => (
              <AccordionItem key={q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-left font-display text-base tracking-tight hover:text-accent md:text-lg">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}

export { faqs };
