import { Microscope, Sparkles, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-20">
      {/* CTA band */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-border/60 bg-surface/80 p-6 sm:p-8 md:flex-row">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/40 text-neon-cyan">
              <Microscope className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                Collaborate. Innovate. Save Lives.
              </h3>
              <p className="text-sm text-muted-foreground">
                Partner with us to advance research and improve global health.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://blog.ecomed.codebreakers.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.02]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <Sparkles className="hidden h-7 w-7 text-neon-cyan/70 sm:block" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-border/40 pt-8 md:flex-row md:items-center">
          <Logo />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About Us
            </Link>
            <Link to="/privacy-policy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms &amp; Conditions
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ecomedic Squad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
