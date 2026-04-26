import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ecomedic Squad" },
      {
        name: "description",
        content:
          "How Ecomedic Squad collects, uses, and protects your information when you visit our research website.",
      },
      { property: "og:title", content: "Privacy Policy — Ecomedic Squad" },
      {
        property: "og:description",
        content: "Our privacy practices and your rights as a visitor to ecomedicsquad.com.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Privacy <span className="text-gradient-brand">Policy</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-muted-foreground">
          <Section title="1. Introduction">
            <p>
              Ecomedic Squad ("we", "us", or "our") respects your privacy. This Privacy Policy
              explains how we collect, use, and safeguard information when you visit our website. By
              using our site, you agree to the practices described below.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We may collect the following categories of information:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                Information you provide voluntarily (such as your name and email when contacting us).
              </li>
              <li>
                Technical data automatically collected, including IP address, browser type, device
                type, and pages visited.
              </li>
              <li>Cookies and similar tracking technologies for analytics and site functionality.</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use collected information to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Operate, maintain, and improve our website and research content.</li>
              <li>Respond to inquiries and communicate updates relevant to our research.</li>
              <li>Analyze usage trends and protect against fraudulent or unauthorized activity.</li>
            </ul>
          </Section>

          <Section title="4. Cookies">
            <p>
              We use cookies and similar technologies to remember preferences, measure traffic, and
              improve user experience. You may disable cookies through your browser settings, though
              some features may not function properly as a result.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>
              We may use third-party services (such as analytics providers) that collect information
              under their own privacy policies. We do not sell your personal information.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal information only as long as necessary for the purposes outlined in
              this policy, or as required by law.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, or delete
              personal information we hold about you, or to object to certain processing. To exercise
              these rights, please contact us using the details below.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect
              your information. However, no online transmission is fully secure, and we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The latest version will always be
              posted on this page with an updated "Last updated" date.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>
              For questions about this Privacy Policy or our data practices, please contact us at{" "}
              <a
                href="mailto:contact@ecomedicsquad.com"
                className="text-neon-cyan hover:underline"
              >
                contact@ecomedicsquad.com
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      <div className="mt-2 space-y-2 text-base">{children}</div>
    </div>
  );
}
