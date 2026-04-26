import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

type NavItem =
  | { kind: "route"; to: "/" | "/about"; label: string; exact?: boolean }
  | { kind: "anchor"; href: string; label: string };

const navItems: ReadonlyArray<NavItem> = [
  { kind: "route", to: "/", label: "Home", exact: true },
  { kind: "anchor", href: "/#research", label: "Research" },
  { kind: "anchor", href: "/#research", label: "Publications" },
  { kind: "anchor", href: "/#research", label: "Resources" },
  { kind: "route", to: "/about", label: "About Us" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.kind === "route" ? (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.exact ?? false }}
                className={linkClass}
              >
                {item.label}
                <span className="mx-auto mt-1 block h-0.5 w-6 bg-neon-cyan opacity-0 shadow-[0_0_8px_oklch(0.85_0.16_200/0.8)] transition-opacity group-data-[status=active]:opacity-100" />
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={linkClass}>
                {item.label}
                <span className="mx-auto mt-1 block h-0.5 w-6 bg-neon-cyan opacity-0 shadow-[0_0_8px_oklch(0.85_0.16_200/0.8)] transition-opacity" />
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://ecomedicblogs.codebreakers.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full border border-neon-pink/60 px-5 py-2 text-sm font-semibold text-foreground transition-all hover:border-neon-pink hover:shadow-neon sm:inline-flex"
          >
            Contact Us
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navItems.map((item) => {
              const cls =
                "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground data-[status=active]:bg-surface data-[status=active]:text-foreground";
              return item.kind === "route" ? (
                <Link
                  key={item.label}
                  to={item.to}
                  activeOptions={{ exact: item.exact ?? false }}
                  onClick={() => setOpen(false)}
                  className={cls}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className={cls}>
                  {item.label}
                </a>
              );
            })}
            <Link
              to="/privacy-policy"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
