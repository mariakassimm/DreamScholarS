import { AlertTriangle } from "lucide-react";

export default function VerifyDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-muted">
        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" aria-hidden="true" />
        <span>
          Scholarship details can change without notice. Always check the
          official website before applying or for any requirement changes.
        </span>
      </p>
    );
  }

  return (
    <div className="flex gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-5">
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" aria-hidden="true" />
      <div>
        <p className="font-display text-sm font-semibold text-amber-900">
          Always verify before you apply
        </p>
        <p className="mt-1 text-sm leading-relaxed text-amber-900/80">
          DreamScholar works hard to keep this information accurate, but
          eligibility rules, benefits, application steps, and deadlines can
          change from one cycle to the next and can differ by country or
          university. Before applying, or if anything here seems out of
          date, please confirm the current details directly on the official
          scholarship website linked on this page. If this page and the
          official website ever disagree, the official website is always
          right.
        </p>
      </div>
    </div>
  );
}
