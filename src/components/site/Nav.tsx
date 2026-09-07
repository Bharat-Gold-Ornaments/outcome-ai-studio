import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { CallCta } from "./primitives";

const links = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md transition-all duration-500 ${
        shrunk ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 transition-all duration-500 md:px-10 ${
          shrunk ? "h-14 md:h-16" : "h-20 md:h-24"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-8 w-8 shrink-0" />
          <span className="font-display text-sm tracking-[0.14em] uppercase">
            {site.businessName}
          </span>
        </a>


        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CallCta className="h-10 min-h-10 px-5 text-[13px]">Book a Discovery Call</CallCta>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-6 pb-8 lg:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl tracking-tight"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <CallCta className="mt-6 w-full justify-center">Book a Discovery Call</CallCta>
        </div>
      ) : null}
    </header>
  );
}
