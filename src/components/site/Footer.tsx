import { site } from "@/config/site";
import { serviceCategories } from "@/config/services";
import { industries } from "@/config/industries";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-14 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 shrink-0" />
            <p className="font-display text-lg font-semibold tracking-tight">{site.businessName}</p>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{site.tagline}.</p>
          <p className="mt-5 text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground">
            {serviceCategories.map((c) => c.name).join(" • ")}
          </p>
          <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-accent">
            {industries.map((i) => i.name).join(" • ")}
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
