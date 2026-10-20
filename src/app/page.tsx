import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturedScholarships from "@/components/home/FeaturedScholarships";
import BrowseByCountry from "@/components/home/BrowseByCountry";
import BrowseByDegree from "@/components/home/BrowseByDegree";
import LatestGuides from "@/components/home/LatestGuides";
import WhyDreamScholar from "@/components/home/WhyDreamScholar";
import Newsletter from "@/components/home/Newsletter";
import { SITE_URL } from "@/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DreamScholar",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/scholarships?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <FeaturedScholarships />
      <BrowseByCountry />
      <BrowseByDegree />
      <LatestGuides />
      <WhyDreamScholar />
      <Newsletter />
    </>
  );
}
