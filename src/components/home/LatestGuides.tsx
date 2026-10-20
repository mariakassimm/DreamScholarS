import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import GuideCard from "@/components/guide/GuideCard";
import { getAllGuides } from "@/lib/data";

export default function LatestGuides() {
  const guides = getAllGuides().slice(0, 3);

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Resources"
            title="Latest Guides"
            description="Practical, actionable advice to strengthen every part of your scholarship application."
          />
          <ButtonLink href="/guides" variant="outline" className="flex-shrink-0">
            View All Guides
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </Container>
    </section>
  );
}
