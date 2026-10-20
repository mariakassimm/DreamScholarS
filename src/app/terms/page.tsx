import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_NAME, CONTACT_EMAIL, TERMS_LAST_UPDATED } from "@/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms and conditions for using ${SITE_NAME}.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-ink">Terms of Service</h1>
          <p className="mt-3 text-sm text-ink-muted">Last updated: {TERMS_LAST_UPDATED}</p>

          <div className="mt-10 space-y-10 leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing or using {SITE_NAME} (the &quot;Site&quot;), you
                agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                2. Informational Purpose Only — Not an Official Provider
              </h2>
              <p className="mt-3">
                {SITE_NAME} is an independent, informational directory. We
                are <strong>not</strong> a government agency, university,
                scholarship provider, or official representative of any of
                the organizations described on this Site. We do not process
                applications, make funding decisions, or guarantee
                admission or award of any scholarship.
              </p>
              <p className="mt-3">
                Scholarship eligibility requirements, benefits, application
                procedures, and deadlines change frequently and can vary by
                country, university, and application cycle. Always confirm
                current details on the official website linked from each
                listing before making any decisions or submitting an
                application. If information on this Site ever conflicts
                with an official source, the official source controls.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">3. No Guarantee of Outcomes</h2>
              <p className="mt-3">
                We make no representations or warranties about the
                accuracy, completeness, or timeliness of any content on
                this Site, and we do not guarantee that you will be
                eligible for, shortlisted for, or awarded any scholarship
                referenced here. Use of this Site is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">4. Acceptable Use</h2>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Use the Site for any unlawful purpose or in violation of any applicable law</li>
                <li>Scrape, harvest, or systematically extract content from the Site using automated tools without our prior written consent</li>
                <li>Attempt to interfere with, disrupt, or gain unauthorized access to the Site or its underlying systems</li>
                <li>Misrepresent your affiliation with {SITE_NAME} or use the Site to impersonate any person or entity</li>
                <li>Click on, or induce others to click on, advertisements displayed on the Site for any purpose other than genuine interest</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">5. Intellectual Property</h2>
              <p className="mt-3">
                The design, layout, original written content, and branding
                of {SITE_NAME} are owned by us or our licensors and are
                protected by applicable intellectual property laws.
                Scholarship program names, logos, and trademarks referenced
                on this Site belong to their respective owners and are used
                for identification and informational purposes only; no
                affiliation or endorsement is implied.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">6. Third-Party Links and Advertising</h2>
              <p className="mt-3">
                This Site contains links to third-party websites, including
                official scholarship providers, and may display third-party
                advertisements (for example, via Google AdSense). We do not
                control and are not responsible for the content, accuracy,
                or practices of any third-party site or advertiser. Your
                interactions with third parties, including any transactions
                or applications, are solely between you and that third
                party.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">7. Disclaimer of Warranties</h2>
              <p className="mt-3">
                THE SITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND
                &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">8. Limitation of Liability</h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {SITE_NAME} and its
                operators shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of
                opportunity (including missed scholarship deadlines or
                denied applications), arising from your use of, or
                inability to use, the Site or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">9. Changes to the Site and These Terms</h2>
              <p className="mt-3">
                We may modify, suspend, or discontinue the Site, or update
                these Terms, at any time without prior notice. Continued
                use of the Site after changes are posted constitutes
                acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">10. Governing Law</h2>
              <p className="mt-3">
                These Terms are governed by the laws of the jurisdiction in
                which {SITE_NAME} operates, without regard to conflict-of-law
                principles. <em>(Site owner: replace this section with your
                actual jurisdiction before publishing — for example,
                &quot;the laws of the State of Delaware, USA&quot; or
                &quot;the laws of England and Wales.&quot;)</em>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">11. Contact Us</h2>
              <p className="mt-3">
                Questions about these Terms can be sent to{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline hover:no-underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
