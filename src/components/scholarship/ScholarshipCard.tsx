import Link from "next/link";
import { CalendarClock, MapPin, GraduationCap } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { Scholarship } from "@/types";

export default function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  return (
    <Link
      href={`/scholarships/${scholarship.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lifted"
    >
      <div className="flex items-start justify-between gap-3">
        <Badge tone={scholarship.funding === "Fully Funded" ? "primary" : "neutral"}>
          {scholarship.funding}
        </Badge>
        <Badge tone="warning">Check deadline</Badge>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
        {scholarship.title}
      </h3>

      <p className="mt-1 text-sm text-ink-muted">{scholarship.university}</p>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          {scholarship.country}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
          {scholarship.degree.join(", ")}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarClock className="h-4 w-4 text-primary" aria-hidden="true" />
          {scholarship.duration}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
        {scholarship.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} tone="neutral">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
