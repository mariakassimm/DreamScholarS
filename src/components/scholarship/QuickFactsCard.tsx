import {
  MapPin,
  GraduationCap,
  Clock,
  Languages,
  Wallet,
  ExternalLink,
} from "lucide-react";
import { Scholarship } from "@/types";
import Badge from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export default function QuickFactsCard({ scholarship }: { scholarship: Scholarship }) {
  const facts = [
    { icon: MapPin, label: "Country", value: scholarship.country },
    { icon: GraduationCap, label: "Degree Level", value: scholarship.degree.join(", ") },
    { icon: Wallet, label: "Funding", value: scholarship.funding },
    { icon: Clock, label: "Duration", value: scholarship.duration },
    {
      icon: Languages,
      label: "English Test",
      value: scholarship.ieltsRequired
        ? `Generally required — commonly around IELTS ${scholarship.minIelts ?? ""} or equivalent, but confirm with your specific university/route`
        : "Not required for this track, based on official guidance — confirm current rules for your situation",
    },
  ];

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-ink">Quick Facts</h2>
        <Badge tone="warning">Verify details</Badge>
      </div>

      <dl className="space-y-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
              <fact.icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                {fact.label}
              </dt>
              <dd className="text-sm font-medium text-ink">{fact.value}</dd>
            </div>
          </div>
        ))}

        <div className="flex items-start gap-3 rounded-xl bg-amber-50 p-3">
          <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
            <Clock className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-amber-800">
              Deadline
            </dt>
            <dd className="text-sm leading-relaxed text-amber-900">
              {scholarship.deadlineInfo}
            </dd>
          </div>
        </div>
      </dl>

      <ButtonLink
        href={scholarship.officialWebsite}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="mt-6 w-full"
      >
        Visit Official Website
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </ButtonLink>
      <p className="mt-3 text-center text-xs text-ink-muted">
        Always confirm current deadlines and requirements there.
      </p>
    </aside>
  );
}
