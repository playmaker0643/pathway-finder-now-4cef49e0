import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Search, FlaskConical, HeartPulse, Users, Atom, Microscope, ClipboardList, ShieldCheck, BarChart3 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import heroImage from "@/assets/hero-capsule.png";
import labImage from "@/assets/lab-microscope.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ecomedic Squad — Pioneering Drug Discovery & Disease Research" },
      {
        name: "description",
        content:
          "Ecomedic Squad advances scientific research in drug discovery and disease understanding to create impactful healthcare solutions worldwide.",
      },
      { property: "og:title", content: "Ecomedic Squad — Pioneering Drug Discovery & Disease Research" },
      {
        property: "og:description",
        content:
          "Expanding scientific frontiers and leading new healthcare solutions through drug discovery, disease mechanisms, and bioinformatics.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { icon: Search, value: "150+", label: "Pioneering Research Studies", sub: "Completed & Ongoing" },
  { icon: FlaskConical, value: "65+", label: "Novel Drugs Analyzed", sub: "Preclinical to Clinical" },
  { icon: HeartPulse, value: "35+", label: "Focus Diseases Studied", sub: "Across Therapeutic Areas" },
  { icon: Users, value: "30+", label: "Strategic Research Partners", sub: "Global Partnerships" },
];

const researchAreas = [
  {
    icon: Atom,
    title: "Drug Discovery",
    desc: "Identifying and validating novel drug candidates through advanced methodologies.",
  },
  {
    icon: Microscope,
    title: "Disease Mechanisms",
    desc: "Understanding the molecular and cellular mechanisms of complex diseases.",
  },
  {
    icon: ClipboardList,
    title: "Preclinical Studies",
    desc: "Conducting in vitro and in vivo studies to assess safety and efficacy.",
  },
  {
    icon: ShieldCheck,
    title: "Therapeutic Validation",
    desc: "Validating therapeutic targets and biomarkers for better outcomes.",
  },
  {
    icon: BarChart3,
    title: "Data & Bioinformatics",
    desc: "Leveraging data science and bioinformatics for research insights.",
  },
];

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-neon-pink/40 bg-surface/60 px-4 py-1.5 text-xs font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-pink shadow-[0_0_8px_oklch(0.72_0.27_350)]" />
              Research for Better Tomorrow
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Expanding Scientific{" "}
              <span className="text-gradient-brand">Frontiers.</span>
              <br />
              Leading New Healthcare Solutions.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Ecomedic Squad is rapidly expanding its research scope into pioneering drug discovery
              and breakthrough disease understanding to establish impactful and innovative
              healthcare solutions worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://ecomedicblogs.codebreakers.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.03]"
              >
                Start
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-neon-cyan"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
            <img
              src={heroImage}
              alt="Glowing pharmaceutical capsule surrounded by molecular structures and DNA strands"
              className="mx-auto w-full max-w-xl rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/60 bg-surface/70 p-6 backdrop-blur sm:p-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label, sub }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-neon-purple/50 text-neon-purple">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-extrabold text-foreground sm:text-4xl">{value}</div>
                <div className="mt-1 text-sm font-medium text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini About */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
              Science. Innovation. <span className="text-gradient-brand">Impact.</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Ecomedic Squad is a research-driven organization focused on exploring the intersection
              of drugs and diseases. Our mission is to uncover new insights, validate therapeutic
              targets, and accelerate the development of safe and effective treatments.
            </p>
            <a
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan hover:underline"
            >
              Know More About Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-neon-pink/20 to-neon-cyan/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Microscope className="h-32 w-32 text-foreground/80 drop-shadow-[0_0_30px_oklch(0.85_0.16_200/0.6)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Research areas */}
      <section id="research" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Our Research Areas
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Focused. Relevant. <span className="text-gradient-brand">Real-world Impact.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {researchAreas.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 transition-all hover:border-neon-pink/50 hover:shadow-neon"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neon-cyan/40 text-neon-cyan">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
