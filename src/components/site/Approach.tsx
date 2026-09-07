import { Band, Kicker, Reveal, useInView } from "./primitives";

const stages = [
  ["Discover", "Understand how the business works."],
  ["Identify", "Find where AI can create value."],
  ["Prioritise", "Choose what is worth doing first."],
  ["Build", "Turn opportunities into working systems."],
  ["Train", "Help people adopt them."],
  ["Improve", "Keep finding new opportunities."],
] as const;

function Stage({ word, line, index }: { word: string; line: string; index: number }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.5 });

  return (
    <div ref={ref} className="relative grid gap-4 pl-10 md:grid-cols-[1fr_20rem] md:items-end md:gap-12 md:pl-16">
      <span
        aria-hidden="true"
        className={`absolute top-6 left-0 h-2.5 w-2.5 rounded-full transition-all duration-700 md:left-1 ${
          inView ? "scale-100 bg-accent" : "scale-50 bg-ink-foreground/25"
        }`}
      />
      <h3
        className={`type-stage uppercase transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-30"
        }`}
      >
        {word}
        <span className="text-accent">.</span>
      </h3>
      <p
        className={`text-base leading-relaxed transition-all delay-150 duration-700 md:pb-4 ${
          inView ? "opacity-100" : "opacity-0"
        } text-ink-foreground/65`}
      >
        <span className="mr-3 font-mono text-[11px] text-accent">0{index + 1}</span>
        {line}
      </p>
    </div>
  );
}

export function Approach() {
  return (
    <Band id="approach" tone="dark">
      <Reveal>
        <Kicker>Approach</Kicker>
        <h2 className="mt-8 max-w-2xl type-section">
          One journey, six stages.
        </h2>
      </Reveal>

      <div className="relative mt-24">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-accent/70 via-ink-foreground/20 to-transparent md:left-[9px]"
        />
        <div className="space-y-10 md:space-y-14">
          {stages.map(([word, line], i) => (
            <Stage key={word} word={word} line={line} index={i} />
          ))}
        </div>
      </div>
    </Band>
  );
}
