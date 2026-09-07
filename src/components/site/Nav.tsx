import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { CallCta } from "./primitives";

const links = [
  { href: "#what-we-do", label: "What We Do" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];


export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6 md:h-20 md:px-10"
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card font-mono text-[10px] tracking-tight text-accent">
            {site.logo === "[LOGO]" ? "LOGO" : site.logo}
          </span>
          <span className="font-display text-base tracking-tight">{site.businessName}</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CallCta className="h-11 min-h-11 px-5 text-[13px]" />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-6 pb-6 lg:hidden">
          <ul className="divide-y divide-border">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-lg tracking-tight"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <CallCta className="mt-5 w-full" />
        </div>
      ) : null}
    </header>
  );
}
