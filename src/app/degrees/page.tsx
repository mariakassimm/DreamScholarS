import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookOpen, FlaskConical, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { getAllDegrees, getScholarshipsByDegree } from "@/lib/data";

export const metadata: Metadata = {
  title: "Browse Scholarships by Degree Level",
  description:
    "Find fully funded scholarships for Bachelor's, Master's, and PhD study, matched to your current stage of education.",
  alternates: { canonical: "/degrees" },
};

const icons = {
  bachelor: BookOpen,
  master: GraduationCap,
  phd: FlaskConical,
};

export default function DegreesPage() {
  const degrees = getAllDegrees();

  return (
    <div className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Browse by Degree
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Explore scholarships organized by degree level, from undergraduate
            programs to doctoral research funding.
          </p>
        </div>

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
                <h2 className="mt-5 font-display text-xl font-semibold text-ink">
                  {degree.title}
                </h2>
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
    </div>
  );
}
