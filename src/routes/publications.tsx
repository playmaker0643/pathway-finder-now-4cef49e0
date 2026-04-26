import { createFileRoute } from "@tanstack/react-router";
import { FileText, ExternalLink } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import labImage from "@/assets/lab-microscope.jpg";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Ecomedic Squad" },
      {
        name: "description",
        content:
          "Peer-reviewed publications, preprints, and research reports from Ecomedic Squad scientists across drug discovery and disease research.",
      },
      { property: "og:title", content: "Publications — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Browse our peer-reviewed publications, preprints, and research reports.",
      },
      { property: "og:image", content: labImage },
      { name: "twitter:image", content: labImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PublicationsPage,
});

const publications = [
  {
    year: "2024",
    title: "Targeting Inflammatory Pathways in Chronic Disease: A Translational Review",
    authors: "Ecomedic Squad Research Team",
    journal: "Journal of Translational Medicine",
    tag: "Peer-Reviewed",
  },
  {
    year: "2024",
    title: "Computational Approaches to Drug Repurposing in Rare Diseases",
    authors: "Ecomedic Squad Bioinformatics Group",
    journal: "Briefings in Bioinformatics",
    tag: "Peer-Reviewed",
  },
  {
    year: "2023",
    title: "Mechanistic Insights into Novel Kinase Inhibitor Candidates",
    authors: "Ecomedic Squad Drug Discovery Group",
    journal: "Preprint — bioRxiv",
    tag: "Preprint",
  },
  {
    year: "2023",
    title: "Biomarker Discovery for Early-Stage Therapeutic Validation",
    authors: "Ecomedic Squad Translational Team",
    journal: "Frontiers in Pharmacology",
    tag: "Peer-Reviewed",
  },
];

function PublicationsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Publications
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Sharing Discovery with the World
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Our scientists publish peer-reviewed studies, preprints, and reports that advance the
            global understanding of drugs, diseases, and therapeutic innovation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {publications.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-surface/70 p-5 transition-all hover:border-neon-cyan/50 sm:flex-row sm:items-start sm:p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/40 text-neon-cyan">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-neon-pink/40 px-2.5 py-0.5 text-xs font-semibold text-neon-pink">
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-foreground">{p.title}</h2>
                <p className="mt-1 text-base text-muted-foreground">{p.authors}</p>
                <p className="mt-1 text-sm italic text-muted-foreground">{p.journal}</p>
              </div>
              <a
                href="https://ecomedicblogs.codebreakers.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-neon-cyan hover:text-neon-cyan"
              >
                Read <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
