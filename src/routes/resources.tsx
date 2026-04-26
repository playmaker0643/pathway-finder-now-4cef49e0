import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Database, GraduationCap, Newspaper } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import labImage from "@/assets/lab-microscope.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Ecomedic Squad" },
      {
        name: "description",
        content:
          "Guides, datasets, educational material, and news from Ecomedic Squad to support researchers, clinicians, and curious minds.",
      },
      { property: "og:title", content: "Resources — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Educational guides, open datasets, and news supporting researchers and clinicians.",
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
    title: "Research Guides",
    desc: "In-depth guides covering drug discovery workflows, target validation, and translational research best practices.",
    color: "text-neon-pink",
    border: "border-neon-pink/40",
  },
  {
    icon: Database,
    title: "Open Datasets",
    desc: "Curated datasets and analysis pipelines from our bioinformatics group, available for academic use.",
    color: "text-neon-cyan",
    border: "border-neon-cyan/40",
  },
  {
    icon: GraduationCap,
    title: "Educational Material",
    desc: "Lectures, primers, and explainers designed for students, early-career researchers, and clinicians.",
    color: "text-neon-purple",
    border: "border-neon-purple/40",
  },
  {
    icon: Newspaper,
    title: "News & Blog",
    desc: "Stay current with research updates, partnership announcements, and scientific commentary from our team.",
    color: "text-[oklch(0.8_0.18_70)]",
    border: "border-[oklch(0.8_0.18_70)]/40",
  },
];

function ResourcesPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Resources
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Knowledge to Power Discovery
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Explore guides, datasets, and educational material curated by Ecomedic Squad scientists
            to support the next generation of researchers and clinicians.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {resources.map(({ icon: Icon, title, desc, color, border }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 transition-all hover:border-neon-pink/50 hover:shadow-neon"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${border} ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-base text-muted-foreground">{desc}</p>
              <a
                href="https://ecomedicblogs.codebreakers.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan hover:underline"
              >
                Visit resource →
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
