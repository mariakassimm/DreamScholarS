import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import { getFeaturedScholarships } from "@/lib/data";

export default function FeaturedScholarships() {
  const featured = getFeaturedScholarships().slice(0, 6);

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Featured"
            title="Featured Scholarships"
            description="A hand-picked selection of high-impact, fully funded opportunities across top destinations."
          />
          <ButtonLink href="/scholarships" variant="outline" className="flex-shrink-0">
            View All Scholarships
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))}
        </div>
      </Container>
    </section>
  );
}
