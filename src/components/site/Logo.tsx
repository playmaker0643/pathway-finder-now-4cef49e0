import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="Ecomedic Squad — Home">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="h-10 w-10 drop-shadow-[0_0_10px_oklch(0.72_0.27_350/0.6)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.72 0.27 350)" />
              <stop offset="50%" stopColor="oklch(0.65 0.23 295)" />
              <stop offset="100%" stopColor="oklch(0.85 0.16 200)" />
            </linearGradient>
          </defs>
          <path
            d="M20 4 L34 14 L28 30 L12 30 L6 14 Z"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M14 18 L20 26 L26 18"
            fill="none"
            stroke="url(#logoGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-gradient-brand text-xl font-extrabold leading-none tracking-tight">
        Ecomedic
        <br />
        <span className="text-base">Squad</span>
      </span>
    </Link>
  );
}
