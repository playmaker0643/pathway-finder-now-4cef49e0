import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = {
  kind: "route";
  to: "/" | "/about" | "/research" | "/publications" | "/resources";
  label: string;
  exact?: boolean;
};

const navItems: ReadonlyArray<NavItem> = [
  { kind: "route", to: "/", label: "Home", exact: true },
  { kind: "route", to: "/research", label: "Research" },
  { kind: "route", to: "/publications", label: "Publications" },
  { kind: "route", to: "/resources", label: "Resources" },
  { kind: "route", to: "/about", label: "About Us" },
];

export function SiteHeader() {
  const linkClass =
    "group relative text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="https://ecomedicblogs.codebreakers.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center justify-center rounded-full border border-neon-pink/60 px-5 py-2 text-sm font-semibold text-foreground transition-all hover:border-neon-pink hover:shadow-neon sm:inline-flex"
            >
              Contact Us
            </a>
          </div>
        </div>

        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-8"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: item.exact ?? false }}
              className={linkClass}
            >
              {item.label}
              <span className="mx-auto mt-1 block h-0.5 w-6 bg-neon-cyan opacity-0 shadow-[0_0_8px_oklch(0.85_0.16_200/0.8)] transition-opacity group-data-[status=active]:opacity-100" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
