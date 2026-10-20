import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GuideCard from "@/components/guide/GuideCard";
import { getAllGuides } from "@/lib/data";

export const metadata: Metadata = {
  title: "Scholarship Guides & Application Tips",
  description:
    "Practical, actionable guides on motivation letters, interviews, timelines, and funding to help you build a stronger scholarship application.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink">Guides</h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Practical advice on writing, planning, and preparing your
            scholarship applications with confidence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </Container>
    </div>
  );
}
