import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { Guide } from "@/types";
import { formatDate } from "@/lib/utils";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={guide.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Badge tone="accent" className="w-fit">{guide.category}</Badge>
        <h3 className="mt-3 line-clamp-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
          {guide.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{guide.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
          <span>{formatDate(guide.publishedAt)}</span>
          <span>{guide.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
