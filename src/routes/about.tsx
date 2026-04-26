import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Users2, ShieldCheck, Rocket } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import teamImage from "@/assets/about-team.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ecomedic Squad" },
      {
        name: "description",
        content:
          "Meet the minds and mission of Ecomedic Squad — advancing drug discovery, disease understanding, and ethical research for global healthcare impact.",
      },
      { property: "og:title", content: "About Us — Ecomedic Squad" },
      {
        property: "og:description",
        content:
          "Our vision, methodology, and commitment to ethical research and community impact.",
      },
      { property: "og:image", content: teamImage },
      { name: "twitter:image", content: teamImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Identifying bold scientific ideas and turning them into actionable discoveries.",
  },
  {
    icon: Users2,
    title: "Collaboration",
    desc: "Working with researchers and partners to accelerate breakthrough therapies.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Conducting therapeutic research with transparency, safety, and efficacy.",
  },
  {
    icon: Rocket,
    title: "Impact",
    desc: "Leveraging data, science, and translational insights for real-world outcomes.",
  },
];

function AboutPage() {
  return (
    <PageShell>
      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Meet the Minds and the Mission of{" "}
              <span className="text-gradient-brand">Ecomedic Squad</span>
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground text-2xl sm:text-[2.25rem] sm:leading-snug">
              Ecomedic Squad is dedicated to advancing scientific research in drug discovery and
              disease understanding to create impactful healthcare solutions.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-foreground">The Ecomedic Vision</h2>
                <p className="mt-2 text-muted-foreground text-xl sm:text-2xl">
                  A detailed view of our founding principles — the unique fusion of medical
                  expertise and data-driven computational models, working toward a long-term vision
                  of personalized medicine.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Our Specialized Methodology</h2>
                <p className="mt-2 text-muted-foreground text-xl sm:text-2xl">
                  A deeper explanation of how the squad integrates molecular modeling, AI, and
                  clinical insights to find new therapeutic pathways and validate them rigorously.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Community &amp; Ethics</h2>
                <p className="mt-2 text-muted-foreground text-xl sm:text-2xl">
                  We are dedicated to ethical research, collaboration, and community outreach — making
                  science accessible and our work meaningful for better health outcomes everywhere.
                </p>
              </div>
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

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">
            Our Core Values
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            What <span className="text-gradient-brand">Drives Us</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-border/60 bg-surface/70 p-6 text-center transition-all hover:border-neon-purple/50 hover:shadow-neon"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-neon-pink/40 text-neon-pink">
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
