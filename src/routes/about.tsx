import { createFileRoute } from "@tanstack/react-router";
import { Search, FlaskConical, HeartHandshake, Leaf } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import teamImage from "@/assets/about-team.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ecomedic Squad" },
      {
        name: "description",
        content:
          "Ecomedic Squad is a collective of passionate minds united by one purpose: improving health through knowledge, research, and compassionate action.",
      },
      { property: "og:title", content: "About Us — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Curiosity, science, and compassion — the principles guiding our work to study, identify, and treat diseases.",
      },
      { property: "og:image", content: teamImage },
      { name: "twitter:image", content: teamImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Search,
    title: "Curiosity",
    desc: "Curiosity drives us to ask deeper questions about diseases and the world they shape.",
    color: "text-neon-pink",
    border: "border-neon-pink/40",
  },
  {
    icon: FlaskConical,
    title: "Science",
    desc: "Science guides our discoveries, grounding every insight in evidence and rigor.",
    color: "text-neon-cyan",
    border: "border-neon-cyan/40",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    desc: "Compassion ensures our work always serves people, communities, and humanity at large.",
    color: "text-neon-purple",
    border: "border-neon-purple/40",
  },
  {
    icon: Leaf,
    title: "Hope",
    desc: "We stand as a symbol of dedication, innovation, and hope for a healthier future.",
    color: "text-[oklch(0.8_0.18_70)]",
    border: "border-[oklch(0.8_0.18_70)]/40",
  },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
              About Us
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              About Us — <span className="text-gradient-brand">Ecomedic Squad</span>
            </h1>
            <div className="mt-5 max-w-xl space-y-4 text-base text-muted-foreground sm:text-lg">
              <p>
                At Ecomedic Squad, we are a collective of passionate minds united by one purpose:
                improving health through knowledge, research, and compassionate action.
              </p>
              <p>
                We believe that understanding diseases is the first step toward defeating them.
                That's why our team is dedicated to studying the science behind illnesses,
                identifying their causes, and uncovering patterns that shape how they affect
                individuals and communities.
              </p>
              <p className="font-semibold text-foreground">But we don't stop at observation.</p>
              <p>
                We actively work toward early detection, accurate identification, and effective
                treatment strategies. By combining scientific research with real-world insight, we
                aim to bridge the gap between knowledge and care.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />
            <img
              src={teamImage}
              alt="Research team collaborating in front of monitors showing molecular structures"
              className="w-full rounded-2xl border border-border/60"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            Our approach is simple but powerful
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {principles.map(({ icon: Icon, title, desc, color, border }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 transition-all hover:border-neon-purple/50 hover:shadow-neon"
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
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Leadership
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-foreground sm:text-3xl">
            Meet Our <span className="text-gradient-brand">CEO</span>
          </h2>
        </div>
        <article className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border/60 bg-surface/70 p-6 text-center sm:mt-8 sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-brand text-2xl font-extrabold text-white">
            MM
          </div>
          <h3 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
            Maher Al-Muhsini
          </h3>
          <p className="mt-1 text-lg text-muted-foreground" dir="rtl" lang="ar">
            ماهر المحسني
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-neon-cyan">
            Chief Executive Officer
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Leading Ecomedic Squad with a vision rooted in scientific integrity, compassionate care,
            and a relentless drive to transform health outcomes for communities worldwide.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-border/60 bg-surface/70 p-6 sm:p-8">
          <p className="text-base text-muted-foreground sm:text-lg">
            In a rapidly changing world filled with health challenges, Ecomedic Squad stands as a
            symbol of dedication, innovation, and hope. We are committed to making a difference —
            not just in laboratories or classrooms, but in the lives of people everywhere.
          </p>
          <blockquote className="mt-6 border-l-4 border-neon-pink pl-4 text-lg italic text-foreground sm:text-xl">
            "We don't just study diseases — we work to change their story."
          </blockquote>
        </article>
      </section>
    </PageShell>
  );
}
