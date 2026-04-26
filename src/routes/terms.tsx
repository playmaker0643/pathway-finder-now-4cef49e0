import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Ecomedic Squad" },
      {
        name: "description",
        content:
          "The terms governing your use of the Ecomedic Squad research website, including disclaimers and limitations of liability.",
      },
      { property: "og:title", content: "Terms & Conditions — Ecomedic Squad" },
      {
        property: "og:description",
        content: "Rules and disclaimers for using ecomedicsquad.com.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Terms &amp; <span className="text-gradient-brand">Conditions</span>
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-10 space-y-8 text-muted-foreground">
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the Ecomedic Squad website, you agree to be bound by these Terms
              &amp; Conditions and our Privacy Policy. If you do not agree, please do not use this
              site.
            </p>
          </Section>

          <Section title="2. Use of the Site">
            <p>
              You agree to use the site only for lawful purposes and in a manner that does not
              infringe the rights of, or restrict or inhibit, anyone else's use of the site.
            </p>
          </Section>

          <Section title="3. Research & Medical Disclaimer">
            <p>
              Content on this site is provided for <strong>informational and educational purposes
              only</strong>. It is not intended as medical advice, diagnosis, or treatment. Always
              seek the advice of a qualified healthcare provider regarding any medical condition.
              Ecomedic Squad makes no warranties about the completeness, reliability, or accuracy of
              this information.
            </p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on this site — including text, graphics, logos, icons, and images — is the
              property of Ecomedic Squad or its licensors and is protected by applicable copyright
              and trademark laws. You may not reproduce, distribute, or create derivative works
              without our prior written consent.
            </p>
          </Section>

          <Section title="5. External Links">
            <p>
              Our site may contain links to third-party websites. We are not responsible for the
              content, policies, or practices of any third-party sites and provide such links for
              convenience only.
            </p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Ecomedic Squad shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or
              relating to your use of, or inability to use, this site.
            </p>
          </Section>

          <Section title="7. Indemnification">
            <p>
              You agree to indemnify and hold harmless Ecomedic Squad and its team from any claims,
              damages, or expenses arising from your use of the site or violation of these terms.
            </p>
          </Section>

          <Section title="8. Changes to These Terms">
            <p>
              We may revise these Terms &amp; Conditions at any time. Continued use of the site
              following any changes constitutes acceptance of those changes.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p>
              These terms are governed by and construed in accordance with applicable laws of the
              jurisdiction in which Ecomedic Squad operates, without regard to its conflict of law
              provisions.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              For any questions about these terms, please reach us at{" "}
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
