import Link from "next/link";
import { GraduationCap, BookOpen, FlaskConical, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllDegrees, getScholarshipsByDegree } from "@/lib/data";

const icons = {
  bachelor: BookOpen,
  master: GraduationCap,
  phd: FlaskConical,
};

export default function BrowseByDegree() {
  const degrees = getAllDegrees();

  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Degree Levels"
          title="Browse by Degree"
          description="Find scholarships tailored to your current stage of study."
          align="center"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {degrees.map((degree) => {
            const Icon = icons[degree.slug as keyof typeof icons] ?? GraduationCap;
            const count = getScholarshipsByDegree(degree.name).length;
            return (
              <Link
                key={degree.slug}
                href={`/degrees/${degree.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {degree.name}&apos;s Degree
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {degree.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {count} scholarships
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
