import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Search, FlaskConical, HeartPulse, Users, Atom, Microscope, ClipboardList, ShieldCheck, BarChart3 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import heroImage from "@/assets/hero-capsule.png";
import labImage from "@/assets/lab-microscope.jpg";
import collaborationImage from "@/assets/research-collaboration.jpg";

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
    color: "text-neon-pink",
    border: "border-neon-pink/40",
  },
  {
    icon: Microscope,
    title: "Disease Mechanisms",
    desc: "Understanding the molecular and cellular mechanisms of complex diseases.",
    color: "text-neon-cyan",
    border: "border-neon-cyan/40",
  },
  {
    icon: ClipboardList,
    title: "Preclinical Studies",
    desc: "Conducting in vitro and in vivo studies to assess safety and efficacy.",
    color: "text-neon-purple",
    border: "border-neon-purple/40",
  },
  {
    icon: ShieldCheck,
    title: "Therapeutic Validation",
    desc: "Validating therapeutic targets and biomarkers for better outcomes.",
    color: "text-[oklch(0.8_0.18_70)]",
    border: "border-[oklch(0.8_0.18_70)]/40",
  },
  {
    icon: BarChart3,
    title: "Data & Bioinformatics",
    desc: "Leveraging data science and bioinformatics for research insights.",
    color: "text-[oklch(0.7_0.2_145)]",
    border: "border-[oklch(0.7_0.2_145)]/40",
  },
];

const statColors = [
  { color: "text-neon-pink", border: "border-neon-pink/50" },
  { color: "text-neon-cyan", border: "border-neon-cyan/50" },
  { color: "text-neon-purple", border: "border-neon-purple/50" },
  { color: "text-[oklch(0.8_0.18_70)]", border: "border-[oklch(0.8_0.18_70)]/50" },
];

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-neon-pink/40 bg-surface/60 px-2 py-1 text-[9px] font-medium text-foreground sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="h-1 w-1 rounded-full bg-neon-pink shadow-[0_0_8px_oklch(0.72_0.27_350)] sm:h-1.5 sm:w-1.5" />
              Research for Better Tomorrow
            </span>
            <h1 className="mt-3 text-xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:mt-5 sm:text-3xl md:text-4xl lg:text-[3.25rem]">
              Expanding Scientific Frontiers.
              <br />
              Leading New Healthcare Solutions.
            </h1>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
              Ecomedic Squad is rapidly expanding its research scope into pioneering drug discovery
              and breakthrough disease understanding to establish impactful and innovative
              healthcare solutions worldwide.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-4">
              <a
                href="https://ecomedicblogs.codebreakers.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1.5 text-[11px] font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.03] sm:gap-2 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Explore Our Research
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#research"
                className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium text-foreground transition-colors hover:text-neon-cyan sm:gap-1.5 sm:px-3 sm:py-2 sm:text-sm"
              >
                Learn More
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
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
        <div className="rounded-2xl border border-border/60 bg-surface/70 p-3 backdrop-blur sm:p-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-8">
            {stats.map(({ icon: Icon, value, label, sub }, i) => {
              const c = statColors[i % statColors.length];
              return (
                <div key={label} className="text-center">
                  <div className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border ${c.border} ${c.color} sm:mb-3 sm:h-14 sm:w-14`}>
                    <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div className="text-base font-extrabold text-foreground sm:text-4xl">{value}</div>
                  <div className="mt-0.5 text-[9px] font-medium leading-tight text-foreground sm:mt-1 sm:text-sm">{label}</div>
                  <div className="text-[8px] leading-tight text-muted-foreground sm:text-xs">{sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini About */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-8 lg:gap-12">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-eyebrow sm:text-xs">
              About Us
            </p>
            <h2 className="mt-2 text-lg font-extrabold leading-tight text-foreground sm:mt-3 sm:text-3xl lg:text-4xl">
              Science. Innovation. <span className="text-foreground">Impact.</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:mt-5 sm:text-base">
              Ecomedic Squad is a research-driven organization focused on exploring the intersection
              of drugs and diseases. Our mission is to uncover new insights, validate therapeutic
              targets, and accelerate the development of safe and effective treatments.
            </p>
            <a
              href="/about"
              className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-neon-cyan hover:underline sm:mt-6 sm:gap-1.5 sm:text-sm"
            >
              Know More About Us
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
            <img
              src={labImage}
              alt="Microscope and laboratory glassware lit with neon pink and cyan light"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl border border-border/60 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Collaboration banner image */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
          <img
            src={collaborationImage}
            alt="Scientists collaborating around a glowing holographic DNA helix in a neon-lit research lab"
            width={1536}
            height={768}
            loading="lazy"
            className="aspect-[2/1] w-full rounded-2xl border border-border/60 object-cover"
          />
        </div>
      </section>

      {/* Research areas */}
      <section id="research" className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Our Research Areas
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Focused. Relevant. Real-world Impact.
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-2 sm:mt-10 sm:gap-5">
          {researchAreas.map(({ icon: Icon, title, desc, color, border }) => (
            <article
              key={title}
              className="rounded-xl border border-border/60 bg-surface/70 p-2 transition-all hover:border-neon-pink/50 hover:shadow-neon sm:rounded-2xl sm:p-6"
            >
              <div className={`mb-2 flex h-7 w-7 items-center justify-center rounded-md border ${border} ${color} sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl`}>
                <Icon className="h-3.5 w-3.5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-[10px] font-bold leading-tight text-foreground sm:text-base">{title}</h3>
              <p className="mt-1 text-[9px] leading-snug text-muted-foreground sm:mt-2 sm:text-sm">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
