import { CallCta, Reveal } from "./primitives";
import heroImage from "@/assets/hero-system.jpg";

const ticker = ["AI Consulting", "AI Automation", "AI Training", "Sales", "Marketing", "Customer Service"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-14 pb-16 md:px-10 md:pt-20 md:pb-20">
      <div className="grid-paper pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <p className="text-eyebrow text-accent">Practical AI for Business</p>
            <h1 className="mt-6 font-display text-[2.7rem] leading-[1.02] tracking-tight text-balance md:text-[4.25rem]">
              Practical AI for Business.
            </h1>
            <p className="mt-6 max-w-xl font-display text-xl leading-snug text-foreground/85 md:text-2xl">
              Identify where AI can create value. Automate repetitive work. Help your team work
              smarter.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallCta />
              <a
                href="#what-we-do"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-sm font-medium tracking-tight transition-colors hover:border-accent hover:text-accent"
              >
                What We Do
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:pl-6">
          <figure className="float-slow overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            <img
              src={heroImage}
              alt="Everyday business work connected into one intelligent, supervised AI workflow"
              width={1280}
              height={1104}
              className="h-full w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track gap-10 font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
              {t}
              <span aria-hidden="true" className="text-accent">
                &bull;
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
