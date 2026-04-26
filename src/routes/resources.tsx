import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Stethoscope, BarChart3, Pill, Globe2, Target } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import labImage from "@/assets/lab-microscope.jpg";
import resourcesHero from "@/assets/resources-hero.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Ecomedic Squad" },
      {
        name: "description",
        content:
          "Curated research materials, diagnostic guides, data and reports, treatment information, and community health insights from Ecomedic Squad.",
      },
      { property: "og:title", content: "Resources — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Reliable, easy-to-understand health information to support learning, research, and informed decisions.",
      },
      { property: "og:image", content: labImage },
      { name: "twitter:image", content: labImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const resources = [
  {
    icon: BookOpen,
    title: "Research Materials",
    desc: "Explore articles, case studies, and scientific insights that deepen your understanding of diseases, their causes, and their impact.",
    color: "text-neon-pink",
    border: "border-neon-pink/40",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Guides",
    desc: "Learn about methods and tools used in identifying diseases early — because timely detection can save lives.",
    color: "text-neon-cyan",
    border: "border-neon-cyan/40",
  },
  {
    icon: BarChart3,
    title: "Data & Reports",
    desc: "Access health data, trends, and pattern analysis that reveal how diseases spread and evolve across populations.",
    color: "text-neon-purple",
    border: "border-neon-purple/40",
  },
  {
    icon: Pill,
    title: "Treatment & Care Information",
    desc: "Discover approaches to treatment, management, and prevention — combining medical knowledge with practical care strategies.",
    color: "text-[oklch(0.8_0.18_70)]",
    border: "border-[oklch(0.8_0.18_70)]/40",
  },
  {
    icon: Globe2,
    title: "Community Health Insights",
    desc: "Understand real-world health challenges and how they affect different communities, helping you connect science with impact.",
    color: "text-[oklch(0.7_0.2_145)]",
    border: "border-[oklch(0.7_0.2_145)]/40",
  },
];

function ResourcesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
              Resources
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Resources — <span className="text-gradient-brand">Ecomedic Squad</span>
            </h1>
            <div className="mt-4 space-y-3 text-base text-muted-foreground sm:text-lg">
              <p>
                At Ecomedic Squad, we believe that access to the right information is key to
                understanding, preventing, and managing diseases. Our resources are carefully curated
                to support learning, research, and informed decision-making.
              </p>
              <p>
                Whether you are a student, researcher, or simply curious about health, this section
                provides valuable tools to guide your journey.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
            <img
              src={resourcesHero}
              alt="Open medical book with floating health and medical resource icons"
              width={1024}
              height={1024}
              className="w-full rounded-2xl border border-border/60"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-extrabold text-foreground sm:text-3xl">
          What You'll Find
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {resources.map(({ icon: Icon, title, desc, color, border }) => (
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

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-cyan/40 text-neon-cyan">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Our Goal</h2>
          </div>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We aim to empower individuals with reliable, easy-to-understand, and meaningful health
            information. Knowledge is not just power — it is a tool for saving lives and building
            healthier communities.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
