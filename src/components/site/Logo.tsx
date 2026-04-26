import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Ecomedic Squad — Home">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <svg
          viewBox="0 0 56 56"
          className="h-14 w-14 drop-shadow-[0_0_12px_oklch(0.72_0.27_350/0.55)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.8 0.2 70)" />
              <stop offset="50%" stopColor="oklch(0.72 0.27 350)" />
              <stop offset="100%" stopColor="oklch(0.65 0.23 295)" />
            </linearGradient>
            <linearGradient id="logoGradBot" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.65 0.23 295)" />
              <stop offset="100%" stopColor="oklch(0.85 0.16 200)" />
            </linearGradient>
          </defs>
          {/* Upward triangle */}
          <path
            d="M28 4 L46 22 L10 22 Z"
            fill="none"
            stroke="url(#logoGradTop)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Downward chevron */}
          <path
            d="M14 32 L28 52 L42 32"
            fill="none"
            stroke="url(#logoGradBot)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-gradient-brand text-2xl font-extrabold leading-[0.95] tracking-tight">
        Ecomedic
        <br />
        Squad
      </span>
    </Link>
  );
}
