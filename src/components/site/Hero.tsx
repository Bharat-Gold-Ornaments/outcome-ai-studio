import { CallCta, Reveal } from "./primitives";
import heroImage from "@/assets/hero-system.jpg";

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
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallCta />
              <a
                href="#what-we-do"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-sm font-medium tracking-tight transition-colors hover:border-accent hover:text-accent"
              >
                What We Do
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 border-t border-border pt-6">
              <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
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
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            <img
              src={heroImage}
              alt="Everyday business work connected into one intelligent, supervised AI workflow"
              width={1280}
              height={1104}
              className="h-full w-full object-cover"
            />
            <figcaption className="flex items-center justify-between gap-4 border-t border-border px-6 py-4 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              <span>Manual process</span>
              <span aria-hidden="true" className="h-px flex-1 bg-accent/40" />
              <span className="text-accent">Intelligent system</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
