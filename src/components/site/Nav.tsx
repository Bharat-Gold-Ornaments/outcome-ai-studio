import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { serviceCategories } from "@/config/services";
import { industries } from "@/config/industries";
import { CallCta } from "./primitives";
import { Logo } from "./Logo";

const links = [
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-500 ${
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
          <Logo className="h-8 w-8 shrink-0 text-primary" />
          <span className="font-display text-base font-semibold tracking-tight text-primary">
            {site.businessName}
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          <li className="relative" onMouseEnter={openServices} onMouseLeave={closeServices}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen ? (
              <div
                className="absolute left-1/2 top-full z-50 w-[46rem] -translate-x-1/2 pt-4"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <div className="grid grid-cols-5 gap-6 rounded-md border border-border bg-card p-8 shadow-lift">
                  {serviceCategories.map((cat) => (
                    <a
                      key={cat.name}
                      href="#services"
                      onClick={() => setServicesOpen(false)}
                      className="group block"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary transition-colors group-hover:text-accent">
                        {cat.name}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {cat.items.map((item) => (
                          <li key={item} className="text-[13px] leading-snug text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </li>

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

      {!shrunk ? (
        <div className="hidden border-t border-primary/10 bg-primary lg:block">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-8 px-10 py-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/55">
              Industries
            </span>
            <ul className="flex items-center gap-7">
              {industries.map((ind) => (
                <li key={ind.slug}>
                  <a
                    href={`#industry-${ind.slug}`}
                    className="text-[13px] text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {ind.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {open ? (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background px-6 pb-8 lg:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl font-semibold tracking-tight"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-eyebrow text-muted-foreground">Services</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
            {serviceCategories.map((cat) => (
              <li key={cat.name}>
                <a
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/85 transition-colors hover:text-accent"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-eyebrow text-muted-foreground">Industries</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <a
                  href={`#industry-${ind.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/85 transition-colors hover:text-accent"
                >
                  {ind.name}
                </a>
              </li>
            ))}
          </ul>

          <CallCta className="mt-8 w-full justify-center">Book a Discovery Call</CallCta>
        </div>
      ) : null}
    </header>
  );
}
