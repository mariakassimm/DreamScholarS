"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import Input from "@/components/ui/Input";
import FilterChip from "@/components/ui/FilterChip";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import EmptyState from "@/components/ui/EmptyState";
import { Scholarship } from "@/types";

const DEGREE_FILTERS = ["All", "Bachelor", "Master", "PhD"];
const FUNDING_FILTERS = ["All", "Fully Funded", "Partially Funded"];

export default function ScholarshipExplorer({
  scholarships,
}: {
  scholarships: Scholarship[];
}) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [degree, setDegree] = useState("All");
  const [funding, setFunding] = useState("All");

  // Pick up a ?q= value from the URL (e.g. from the homepage search bar)
  // on the client, since this page is statically exported and has no
  // server available at request time to read the query string.
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scholarships.filter((s) => {
      const matchesQuery =
        !q ||
        [s.title, s.country, s.university, ...s.tags, ...s.fieldsOfStudy]
          .join(" ")
          .toLowerCase()
          .includes(q);
      const matchesDegree = degree === "All" || s.degree.includes(degree as any);
      const matchesFunding = funding === "All" || s.funding === funding;
      return matchesQuery && matchesDegree && matchesFunding;
    });
  }, [scholarships, query, degree, funding]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
        <label htmlFor="scholarship-search" className="sr-only">
          Search scholarships
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
            aria-hidden="true"
          />
          <Input
            id="scholarship-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by country, university, field, or keyword..."
            className="pl-11"
          />
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Degree Level
          </p>
          <div className="flex flex-wrap gap-2">
            {DEGREE_FILTERS.map((d) => (
              <FilterChip key={d} label={d} active={degree === d} onClick={() => setDegree(d)} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
            Funding Type
          </p>
          <div className="flex flex-wrap gap-2">
            {FUNDING_FILTERS.map((f) => (
              <FilterChip key={f} label={f} active={funding === f} onClick={() => setFunding(f)} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-ink-muted" role="status">
        {filtered.length} scholarship{filtered.length === 1 ? "" : "s"} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ScholarshipCard key={s.id} scholarship={s} />
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <EmptyState />
        </div>
      )}
    </div>
  );
}
