import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE_NAME, CONTACT_EMAIL, PRIVACY_LAST_UPDATED } from "@/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects information, including details on cookies and advertising.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-ink">Privacy Policy</h1>
          <p className="mt-3 text-sm text-ink-muted">Last updated: {PRIVACY_LAST_UPDATED}</p>

          <div className="mt-10 space-y-10 leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">1. Introduction</h2>
              <p className="mt-3">
                This Privacy Policy explains how {SITE_NAME} (&quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;) handles information when
                you visit our website. We built {SITE_NAME} to help students
                find scholarship information, and we want to be transparent
                about what happens when you use the site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">2. Information We Collect</h2>
              <p className="mt-3">
                {SITE_NAME} does not require you to create an account, and we
                do not operate a backend database that stores personal
                submissions. Specifically:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Any contact or newsletter forms on this site are provided
                  for your convenience; if a form is not yet connected to a
                  live email or mailing-list service, submitting it will not
                  transmit your information anywhere.
                </li>
                <li>
                  We do not knowingly collect sensitive personal information
                  such as financial account details, government ID numbers,
                  or health information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                3. Cookies and Similar Technologies
              </h2>
              <p className="mt-3">
                Like most websites, {SITE_NAME} and its third-party partners
                (described below) may use cookies, web beacons, and similar
                technologies to operate the site, remember your preferences,
                and — where applicable — show relevant advertising. You can
                control or delete cookies through your browser settings at
                any time; blocking cookies may affect some site
                functionality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                4. Advertising and Third-Party Services
              </h2>
              <p className="mt-3">
                {SITE_NAME} may display advertisements served by Google
                AdSense and other third-party advertising networks, and may
                use analytics services such as Google Analytics to
                understand site traffic. These third parties may use cookies
                and similar technologies to collect information about your
                visits to this and other websites in order to provide
                advertisements about goods and services of interest to you.
              </p>
              <p className="mt-3">
                Google&apos;s use of advertising cookies enables it and its
                partners to serve ads to you based on your visit to this
                site and/or other sites on the internet. You can opt out of
                personalized advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  Google Ads Settings
                </a>
                . You can also visit{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  www.aboutads.info
                </a>{" "}
                (US) or{" "}
                <a
                  href="https://www.youronlinechoices.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:no-underline"
                >
                  www.youronlinechoices.eu
                </a>{" "}
                (EU) to opt out of participating vendors&apos; use of
                cookies for personalized advertising.
              </p>
              <p className="mt-3">
                Third-party vendors, including Google, may show
                {" "}
                {SITE_NAME}&apos;s ads on other websites you visit across the
                internet based on your prior visits to this site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                5. Analytics
              </h2>
              <p className="mt-3">
                If we use analytics tools (such as Google Analytics or
                Vercel Analytics), they may collect information such as your
                approximate location (derived from IP address), device and
                browser type, pages visited, and time spent on the site.
                This information is aggregated and used to understand and
                improve the site — it is not used to personally identify
                individual visitors by us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                6. Your Rights (GDPR / UK GDPR)
              </h2>
              <p className="mt-3">
                If you are located in the European Economic Area or the UK,
                you have rights under GDPR/UK GDPR, including the right to
                access, correct, delete, or restrict the use of any personal
                data we hold about you, and the right to object to
                processing based on legitimate interests (including
                interest-based advertising). To exercise these rights,
                contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline hover:no-underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                7. California Privacy Rights (CCPA/CPRA)
              </h2>
              <p className="mt-3">
                If you are a California resident, you may have the right to
                know what personal information is collected, to request
                deletion of your personal information, and to opt out of
                the &quot;sale&quot; or &quot;sharing&quot; of personal
                information (which can include certain uses of advertising
                cookies) under the CCPA/CPRA. To submit a request, contact
                us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline hover:no-underline">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">8. Children&apos;s Privacy</h2>
              <p className="mt-3">
                {SITE_NAME} is intended for prospective and current students
                generally aged 16 and older who are researching scholarship
                opportunities, and is not directed at children under 13. We
                do not knowingly collect personal information from children
                under 13. If you believe a child has provided us with
                personal information, please contact us so we can address
                it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">9. External Links</h2>
              <p className="mt-3">
                {SITE_NAME} links to official scholarship provider websites
                and other external resources. We are not responsible for
                the privacy practices or content of those external sites.
                We encourage you to review the privacy policy of any site
                you visit.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">10. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &quot;Last
                updated&quot; date. We encourage you to review this page
                periodically.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">11. Contact Us</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, contact us
                at{" "}
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
