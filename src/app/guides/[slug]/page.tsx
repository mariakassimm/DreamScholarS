import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import GuideCard from "@/components/guide/GuideCard";
import AdUnit from "@/components/ui/AdUnit";
import { getAllGuides, getGuideBySlug, getRelatedGuides } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { SITE_URL } from "@/constants";

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url: `${SITE_URL}/guides/${guide.slug}`,
      type: "article",
    },
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(guide);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    datePublished: guide.publishedAt,
    image: guide.coverImage,
    url: `${SITE_URL}/guides/${guide.slug}`,
  };

  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-slate-100 bg-white py-12">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-sm text-ink-muted">
            <Link href="/guides" className="hover:text-primary">Guides</Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-ink">{guide.category}</span>
          </nav>
          <Badge tone="accent">{guide.category}</Badge>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-ink-muted">
            {formatDate(guide.publishedAt)} · {guide.readTime}
          </p>
        </Container>
      </section>

      <Container className="mt-10">
        <div className="relative mb-10 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
          <Image
            src={guide.coverImage}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <article className="mx-auto max-w-3xl space-y-10">
          {guide.content.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-ink">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>

        {/*
          Example manual ad placement. Renders nothing until you've set
          NEXT_PUBLIC_ADSENSE_CLIENT_ID and created a matching ad unit in
          your AdSense dashboard. Replace "2222222222" with your real slot.
        */}
        <div className="mx-auto mt-10 max-w-3xl">
          <AdUnit slot="2222222222" />
        </div>

        {related.length > 0 && (
          <section className="mx-auto mt-16 max-w-5xl" aria-labelledby="related-guides-heading">
            <h2 id="related-guides-heading" className="font-display text-2xl font-semibold text-ink">
              Related Guides
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((g) => (
                <GuideCard key={g.id} guide={g} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
