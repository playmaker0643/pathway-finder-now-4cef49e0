import { createFileRoute } from "@tanstack/react-router";
import { Atom, Microscope, ClipboardList, ShieldCheck, BarChart3 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import labImage from "@/assets/lab-microscope.jpg";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Ecomedic Squad" },
      {
        name: "description",
        content:
          "Explore Ecomedic Squad's research programs in drug discovery, disease mechanisms, preclinical studies, therapeutic validation, and bioinformatics.",
      },
      { property: "og:title", content: "Research — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Our research programs span drug discovery, disease mechanisms, preclinical studies, and bioinformatics.",
      },
      { property: "og:image", content: labImage },
      { name: "twitter:image", content: labImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

const programs = [
  {
    icon: Atom,
    title: "Drug Discovery",
    desc: "Identifying and validating novel small-molecule and biologic drug candidates through advanced screening, structure-based design, and target validation.",
    color: "text-neon-pink",
    border: "border-neon-pink/40",
  },
  {
    icon: Microscope,
    title: "Disease Mechanisms",
    desc: "Investigating molecular and cellular pathways underlying complex diseases to uncover actionable therapeutic targets.",
    color: "text-neon-cyan",
    border: "border-neon-cyan/40",
  },
  {
    icon: ClipboardList,
    title: "Preclinical Studies",
    desc: "Designing and executing in vitro and in vivo studies that rigorously evaluate efficacy, safety, and pharmacokinetics.",
    color: "text-neon-purple",
    border: "border-neon-purple/40",
  },
  {
    icon: ShieldCheck,
    title: "Therapeutic Validation",
    desc: "Validating therapeutic targets and biomarkers across diverse models to de-risk translation into clinical research.",
    color: "text-[oklch(0.8_0.18_70)]",
    border: "border-[oklch(0.8_0.18_70)]/40",
  },
  {
    icon: BarChart3,
    title: "Data & Bioinformatics",
    desc: "Applying computational biology, machine learning, and large-scale omics analysis to accelerate discovery and insight.",
    color: "text-[oklch(0.7_0.2_145)]",
    border: "border-[oklch(0.7_0.2_145)]/40",
  },
];

function ResearchPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Our Research
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Programs Advancing Modern Medicine
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Ecomedic Squad runs interdisciplinary research programs that move scientific ideas from
            hypothesis to therapeutic relevance. Each program is led by experienced scientists and
            supported by collaborators across academia, clinics, and industry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc, color, border }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 transition-all hover:border-neon-pink/50 hover:shadow-neon"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${border} ${color}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-bold text-foreground">{title}</h2>
              <p className="mt-2 text-base text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
