import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import EmptyState from "@/components/ui/EmptyState";
import {
  getAllCountries,
  getCountryBySlug,
  getScholarshipsByCountry,
} from "@/lib/data";

export async function generateStaticParams() {
  return getAllCountries().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return {};

  return {
    title: `Study in ${country.name} — Scholarships & Funding`,
    description: country.description,
    alternates: { canonical: `/countries/${country.slug}` },
  };
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const scholarships = getScholarshipsByCountry(country.slug);

  return (
    <div className="pb-20">
      <section className="relative h-72 w-full overflow-hidden sm:h-80">
        <Image
          src={country.heroImage}
          alt={`Study destination: ${country.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
        <Container className="relative flex h-full flex-col justify-end pb-8 text-white">
          <p className="text-4xl" aria-hidden="true">{country.flagEmoji}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Study in {country.name}
          </h1>
          <p className="mt-2 max-w-xl text-white/85">{country.region}</p>
        </Container>
      </section>

      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink">
              About Studying in {country.name}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">{country.description}</p>

            <h3 className="mt-8 font-display text-lg font-semibold text-ink">
              Popular Universities
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {country.popularUniversities.map((uni) => (
                <li
                  key={uni}
                  className="flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-sm text-ink-soft shadow-soft"
                >
                  <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
                  {uni}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              At a Glance
            </p>
            <p className="mt-3 font-display text-3xl font-semibold text-primary">
              {scholarships.length}
            </p>
            <p className="text-sm text-ink-muted">Scholarships available</p>
          </div>
        </div>

        <section className="mt-14" aria-labelledby="scholarships-heading">
          <h2 id="scholarships-heading" className="font-display text-2xl font-semibold text-ink">
            Scholarships in {country.name}
          </h2>
          {scholarships.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {scholarships.map((s) => (
                <ScholarshipCard key={s.id} scholarship={s} />
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <EmptyState
                title="No scholarships listed yet"
                description="Check back soon — we regularly add new opportunities for this destination."
              />
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}
