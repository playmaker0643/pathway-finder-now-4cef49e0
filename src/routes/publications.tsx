import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, BarChart3, Globe2, Target, Sparkles } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import labImage from "@/assets/lab-microscope.jpg";
import publicationsHero from "@/assets/publications-hero.jpg";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — Ecomedic Squad" },
      {
        name: "description",
        content:
          "Ecomedic Squad publications: research papers, case studies, reports, and community health insights advancing health awareness and disease understanding.",
      },
      { property: "og:title", content: "Publications — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Research papers, case studies, data-driven reports, and community health publications.",
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
    icon: BookOpen,
    title: "Research Papers",
    desc: "In-depth studies exploring diseases, their causes, progression, and potential solutions. Our research is grounded in scientific rigor and real-world relevance.",
    color: "text-neon-pink",
    border: "border-neon-pink/40",
  },
  {
    icon: FileText,
    title: "Case Studies",
    desc: "Detailed analyses of specific health conditions and scenarios, helping to bridge the gap between theory and practice.",
    color: "text-neon-cyan",
    border: "border-neon-cyan/40",
  },
  {
    icon: BarChart3,
    title: "Reports & Findings",
    desc: "Data-driven reports that highlight trends, patterns, and key observations in disease spread, prevention, and management.",
    color: "text-neon-purple",
    border: "border-neon-purple/40",
  },
  {
    icon: Globe2,
    title: "Community Health Publications",
    desc: "Insights focused on public health challenges, community-based research, and practical solutions for improving health outcomes.",
    color: "text-[oklch(0.8_0.18_70)]",
    border: "border-[oklch(0.8_0.18_70)]/40",
  },
];

const purposes = [
  "Expand knowledge and understanding of diseases",
  "Support early detection and accurate diagnosis",
  "Promote effective treatment and prevention strategies",
  "Contribute to global conversations on health and wellness",
];

function PublicationsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
              Publications
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
              Publications — <span className="text-gradient-brand">Ecomedic Squad</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              At Ecomedic Squad, our work goes beyond research — we share knowledge that informs,
              inspires, and drives change. Our publications reflect our commitment to advancing
              health awareness, improving disease understanding, and contributing meaningful insights
              to the scientific and global health community.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
            <img
              src={publicationsHero}
              alt="Stack of medical research papers and tablet showing data charts"
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
          What We Publish
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {publications.map(({ icon: Icon, title, desc, color, border }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 transition-all hover:border-neon-cyan/50 hover:shadow-neon"
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
        <article className="rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-pink/40 text-neon-pink">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Our Purpose</h2>
          </div>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">Our publications aim to:</p>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {purposes.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/40 p-4 text-base text-foreground"
              >
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />
                {p}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neon-purple/40 text-neon-purple">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Our Commitment</h2>
          </div>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We are dedicated to producing content that is credible, impactful, and accessible —
            ensuring that our findings can benefit not only professionals but also communities
            worldwide.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
