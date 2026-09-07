import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Band, CallCta, Kicker, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <Band id="book" tone="dark">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-[2.5rem] leading-[0.98] tracking-[-0.03em] text-balance md:text-[4.75rem]">
            Where could AI make a difference in your business?
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 font-display text-2xl text-accent">Let's find out.</p>
          <div className="mt-12">
            <CallCta variant="light" />
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

const faqs = [
  ["What is an AI Discovery Call?", "A short conversation about your business and where AI could help."],
  ["Do I need to use AI already?", "No. We start from where you are."],
  ["Can you work with our existing tools?", "Yes, wherever it's technically sensible."],
] as const;

export function Faq() {
  return (
    <Band id="faq" className="py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[0.6fr_1.4fr]">
        <Reveal>
          <Kicker tone="muted">FAQ</Kicker>
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
    </Band>
  );
}

export { faqs };
