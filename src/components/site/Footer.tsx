import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-14 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg tracking-tight">{site.businessName}</p>
          <p className="mt-2 text-sm text-muted-foreground">Practical AI for Business.</p>
          <p className="mt-5 font-mono text-[11px] tracking-[0.16em] uppercase text-muted-foreground">
            AI Consulting &bull; AI Automation &bull; AI Training
          </p>
          <p className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
            Sales &bull; Marketing &bull; Customer Service
          </p>
        </div>

        <div>
          <p className="text-eyebrow text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="transition-colors hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-eyebrow text-muted-foreground">More</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#book" className="transition-colors hover:text-accent">
                Book an AI Discovery Call
              </a>
            </li>
            <li>
              <a href="#privacy" className="transition-colors hover:text-accent">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="transition-colors hover:text-accent">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        &copy; {site.year} {site.businessName}
      </div>
    </footer>
  );
}
