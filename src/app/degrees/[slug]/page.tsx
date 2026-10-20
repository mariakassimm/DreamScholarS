import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import EmptyState from "@/components/ui/EmptyState";
import { getAllDegrees, getDegreeBySlug, getScholarshipsByDegree } from "@/lib/data";

export async function generateStaticParams() {
  return getAllDegrees().map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const degree = getDegreeBySlug(slug);
  if (!degree) return {};

  return {
    title: degree.title,
    description: degree.description,
    alternates: { canonical: `/degrees/${degree.slug}` },
  };
}

export default async function DegreeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const degree = getDegreeBySlug(slug);
  if (!degree) notFound();

  const scholarships = getScholarshipsByDegree(degree.name);

  return (
    <div className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink">{degree.title}</h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">{degree.description}</p>
          <p className="mt-3 text-sm text-ink-muted">
            Typical duration: <span className="font-medium text-ink">{degree.averageDuration}</span>
          </p>
        </div>

        <section className="mt-10" aria-labelledby="degree-scholarships-heading">
          <h2 id="degree-scholarships-heading" className="sr-only">
            {degree.title} Scholarships
          </h2>
          {scholarships.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {scholarships.map((s) => (
                <ScholarshipCard key={s.id} scholarship={s} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No scholarships listed yet"
              description="Check back soon for new opportunities at this degree level."
            />
          )}
        </section>
      </Container>
    </div>
  );
}
