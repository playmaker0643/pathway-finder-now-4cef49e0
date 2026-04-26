import { createFileRoute } from "@tanstack/react-router";
import { Dna, Search, BarChart3, Lightbulb, ShieldCheck, Users2, Sparkles, HeartHandshake, Globe2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import labImage from "@/assets/lab-microscope.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Ecomedic Squad" },
      {
        name: "description",
        content:
          "At Ecomedic Squad, research is the foundation of everything we do — exploring diseases in depth to challenge, track, and overcome them.",
      },
      { property: "og:title", content: "Research — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Disease study, cause identification, pattern observation, and innovation in care and treatment.",
      },
      { property: "og:image", content: labImage },
      { name: "twitter:image", content: labImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

const focusAreas = [
  {
    icon: Dna,
    title: "Disease Study & Analysis",
    desc: "We investigate the biological nature of diseases, examining how they develop, function, and impact the human body.",
    color: "text-neon-pink",
    border: "border-neon-pink/40",
  },
  {
    icon: Search,
    title: "Cause Identification",
    desc: "Understanding why diseases occur is key to prevention. We explore environmental, genetic, and lifestyle factors that contribute to illness.",
    color: "text-neon-cyan",
    border: "border-neon-cyan/40",
  },
  {
    icon: BarChart3,
    title: "Pattern Observation",
    desc: "By studying how diseases spread and evolve, we uncover trends that help predict outbreaks and improve response strategies.",
    color: "text-neon-purple",
    border: "border-neon-purple/40",
  },
  {
    icon: Lightbulb,
    title: "Innovation in Care & Treatment",
    desc: "Our research aims to discover better methods of treatment, management, and prevention — combining science with practical care solutions.",
    color: "text-[oklch(0.8_0.18_70)]",
    border: "border-[oklch(0.8_0.18_70)]/40",
  },
];

const approach = [
  { icon: ShieldCheck, title: "Scientific Integrity", desc: "Accurate, evidence-based research.", color: "text-neon-cyan", border: "border-neon-cyan/40" },
  { icon: Users2, title: "Collaboration", desc: "Learning and working together for stronger outcomes.", color: "text-neon-pink", border: "border-neon-pink/40" },
  { icon: Sparkles, title: "Innovation", desc: "Constantly seeking better ways to solve health challenges.", color: "text-neon-purple", border: "border-neon-purple/40" },
  { icon: HeartHandshake, title: "Compassion", desc: "Ensuring our research always serves humanity.", color: "text-[oklch(0.8_0.18_70)]", border: "border-[oklch(0.8_0.18_70)]/40" },
];

function ResearchPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Research
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Research — <span className="text-gradient-brand">Ecomedic Squad</span>
          </h1>
          <div className="mx-auto mt-4 max-w-3xl space-y-3 text-base text-muted-foreground sm:text-lg">
            <p>
              At Ecomedic Squad, research is the foundation of everything we do. It is where
              curiosity meets science, and where questions become solutions that can transform lives.
            </p>
            <p>
              We are dedicated to exploring diseases in depth — not just to understand them, but to
              challenge them, track them, and ultimately overcome them.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-foreground sm:text-3xl">
          Our Research Focus
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {focusAreas.map(({ icon: Icon, title, desc, color, border }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 transition-all hover:border-neon-pink/50 hover:shadow-neon"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${border} ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-foreground sm:text-3xl">
          Our Approach
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground sm:text-lg">
          Our work is guided by:
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {approach.map(({ icon: Icon, title, desc, color, border }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 transition-all hover:border-neon-cyan/50"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${border} ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-purple/40 text-neon-purple">
              <Globe2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
              Why Our Research Matters
            </h2>
          </div>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            In a world where health challenges are constantly evolving, research is not optional —
            it is essential. From emerging diseases to long-standing conditions, our work
            contributes to building a healthier, more informed future.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
