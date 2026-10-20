import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  FileText,
  ListChecks,
  ChevronRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import QuickFactsCard from "@/components/scholarship/QuickFactsCard";
import Accordion from "@/components/ui/Accordion";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import VerifyDisclaimer from "@/components/ui/VerifyDisclaimer";
import AdUnit from "@/components/ui/AdUnit";
import {
  getAllScholarships,
  getScholarshipBySlug,
  getRelatedScholarships,
} from "@/lib/data";
import { SITE_URL } from "@/constants";

export async function generateStaticParams() {
  return getAllScholarships().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scholarship = getScholarshipBySlug(slug);
  if (!scholarship) return {};

  const title = `${scholarship.title} — ${scholarship.country}`;
  const description = `${scholarship.funding} scholarship for ${scholarship.degree.join(
    ", "
  )} students in ${scholarship.country}. Deadlines vary by cycle — check the official website for current dates.`;

  return {
    title,
    description,
    alternates: { canonical: `/scholarships/${scholarship.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/scholarships/${scholarship.slug}` },
  };
}

export default async function ScholarshipDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scholarship = getScholarshipBySlug(slug);
  if (!scholarship) notFound();

  const related = getRelatedScholarships(scholarship);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: scholarship.title,
    description: scholarship.overview,
    provider: {
      "@type": "Organization",
      name: scholarship.university,
    },
    url: `${SITE_URL}/scholarships/${scholarship.slug}`,
  };

  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-slate-100 bg-white py-12">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-ink-muted">
            <Link href="/scholarships" className="hover:text-primary">Scholarships</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-ink">{scholarship.country}</span>
          </nav>

          <div className="flex flex-wrap gap-2">
            <Badge tone="primary">{scholarship.funding}</Badge>
            {scholarship.degree.map((d) => (
              <Badge key={d} tone="neutral">{d}</Badge>
            ))}
          </div>

          <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            {scholarship.title}
          </h1>
          <p className="mt-2 text-lg text-ink-muted">
            {scholarship.university} · {scholarship.country}
          </p>
        </Container>
      </section>

      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="font-display text-2xl font-semibold text-ink">
                Overview
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{scholarship.overview}</p>
            </section>

            {/*
              Example manual ad placement. Renders nothing until you've set
              NEXT_PUBLIC_ADSENSE_CLIENT_ID and created a matching ad unit
              in your AdSense dashboard — safe to leave in place before
              approval. Replace "1111111111" with your real ad slot ID.
            */}
            <AdUnit slot="1111111111" />

            <section aria-labelledby="benefits-heading">
              <h2 id="benefits-heading" className="font-display text-2xl font-semibold text-ink">
                Benefits
              </h2>
              <ul className="mt-4 space-y-3">
                {scholarship.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-ink-soft">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="eligibility-heading">
              <h2 id="eligibility-heading" className="font-display text-2xl font-semibold text-ink">
                Eligibility
              </h2>
              <ul className="mt-4 space-y-3">
                {scholarship.eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-soft">
                    <ListChecks className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="documents-heading">
              <h2 id="documents-heading" className="font-display text-2xl font-semibold text-ink">
                Documents Typically Requested
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {scholarship.documents.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 text-sm text-ink-soft shadow-soft"
                  >
                    <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-ink-muted">
                Exact required documents can differ by country, university, or application route — confirm the current list on the official website.
              </p>
            </section>

            <section aria-labelledby="process-heading">
              <h2 id="process-heading" className="font-display text-2xl font-semibold text-ink">
                General Application Process
              </h2>
              <ol className="mt-4 space-y-4">
                {scholarship.applicationProcess.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-ink-soft">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="rounded-2xl bg-primary-50 p-6 text-center">
              <p className="font-display text-lg font-semibold text-ink">
                Ready to look into this scholarship?
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                Visit the official website for the current deadline, full
                requirements, and the application form.
              </p>
              <ButtonLink
                href={scholarship.officialWebsite}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-4"
              >
                Visit Official Website
              </ButtonLink>
            </div>

            {scholarship.faqs.length > 0 && (
              <section aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="font-display text-2xl font-semibold text-ink">
                  Frequently Asked Questions
                </h2>
                <div className="mt-4">
                  <Accordion items={scholarship.faqs} />
                </div>
              </section>
            )}

            <VerifyDisclaimer />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <QuickFactsCard scholarship={scholarship} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-display text-2xl font-semibold text-ink">
              Related Scholarships
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ScholarshipCard key={s.id} scholarship={s} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
