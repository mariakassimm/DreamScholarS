import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import { getAllFaqs } from "@/lib/data";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about using DreamScholar, scholarship funding types, eligibility, and the application process.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqs = getAllFaqs();
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
    url: `${SITE_URL}/faq`,
  };

  return (
    <div className="py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Everything you need to know about using DreamScholar to find your
            next fully funded opportunity.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="mb-4 font-display text-xl font-semibold text-ink">
                {category}
              </h2>
              <Accordion items={faqs.filter((f) => f.category === category)} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
