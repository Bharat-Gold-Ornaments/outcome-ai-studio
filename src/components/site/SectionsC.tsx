import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CallCta, Reveal, Section, SectionHead } from "./primitives";
import ctaNetwork from "@/assets/cta-network.jpg";

const who = [
  "Growing businesses",
  "SMEs",
  "Founder-led businesses",
  "Sales-driven businesses",
  "Customer-focused businesses",
  "Teams adopting AI practically",
];

export function WhoWeWorkWith() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHead
          align="center"
          eyebrow="Who we work with"
          title="Built for businesses ready to put AI to work."
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-track gap-4">
            {[...who, ...who, ...who, ...who].map((w, i) => (
              <span
                key={`${w}-${i}`}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm whitespace-nowrap text-foreground/85"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function EngagementModel() {
  const stages = [
    ["01", "Discovery Call", "A free, no-obligation conversation.", true],
    ["02", "Consulting & Roadmap", "Opportunities identified and prioritised.", false],
    ["03", "Automation & Training", "Systems built, teams enabled.", false],
    ["04", "Ongoing Partnership", "Improve and extend over time.", false],
  ] as const;

  return (
    <Section id="engagement" tone="raised">
      <Reveal>
        <SectionHead
          eyebrow="How it works"
          title="Start with a conversation."
          lead="We understand your business first, then recommend technology."
        />
      </Reveal>

      <div className="relative mt-14">
        <div
          aria-hidden="true"
          className="absolute top-6 left-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-accent/60 to-border md:block"
        />
        <div className="grid gap-8 md:grid-cols-4">
          {stages.map(([no, title, body, free], i) => (
            <Reveal key={no} delay={i * 110}>
              <div className="group relative">
                <span
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border font-mono text-[11px] transition-transform duration-300 group-hover:scale-110 ${
                    free
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-background text-accent"
                  }`}
                >
                  {no}
                </span>
                <h3 className="mt-5 font-display text-lg tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                {free ? (
                  <span className="mt-3 inline-block rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
                    Free
                  </span>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <div id="book" className="relative isolate overflow-hidden border-t border-ink bg-ink px-6 py-24 text-ink-foreground md:px-10 md:py-32">
      <img
        src={ctaNetwork}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={720}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
      />
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-eyebrow text-accent-soft">Next step</p>
          <h2 className="mt-6 font-display text-3xl leading-[1.08] tracking-tight text-balance md:text-5xl">
            Let's find out which of your processes AI can improve.
          </h2>
          <div className="mt-9 flex justify-center">
            <CallCta variant="light" />
          </div>
          <p className="mt-5 text-xs text-ink-foreground/60">
            No commitment. Just a conversation about where AI could create value.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

const faqs = [
  [
    "What is an AI Discovery Call?",
    "A short initial conversation where we learn about your business, your goals and the processes you think could benefit from AI.",
  ],
  [
    "Do I need to already use AI?",
    "No. We start from where you are and identify practical opportunities based on your current processes and tools.",
  ],
  [
    "Do you only work with large companies?",
    "No. The approach is designed for businesses that want to adopt AI practically, including growing businesses and SMEs.",
  ],
  [
    "Can you work with our existing software?",
    "Where technically appropriate, we work with your existing tools, software and APIs rather than replacing everything.",
  ],
  [
    "What happens after the Discovery Call?",
    "If there is a clear opportunity, we can recommend a consulting engagement. There is no requirement to proceed.",
  ],
] as const;

export function Faq() {
  return (
    <Section id="faq">
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
