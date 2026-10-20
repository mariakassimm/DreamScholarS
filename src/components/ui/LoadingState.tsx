export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
      <div className="mb-4 h-40 rounded-xl bg-slate-100" />
      <div className="mb-2 h-4 w-3/4 rounded bg-slate-100" />
      <div className="mb-2 h-4 w-1/2 rounded bg-slate-100" />
      <div className="h-4 w-2/3 rounded bg-slate-100" />
    </div>
  );
}

export default function LoadingGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
