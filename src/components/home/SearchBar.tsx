"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = query.trim() ? `?q=${encodeURIComponent(query.trim())}` : "";
    router.push(`/scholarships${params}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-2 shadow-card sm:flex-row"
      role="search"
      aria-label="Search scholarships"
    >
      <label htmlFor="hero-search" className="sr-only">
        Search scholarships by country, university, or field
      </label>
      <div className="flex flex-1 items-center gap-2 px-3">
        <Search className="h-5 w-5 flex-shrink-0 text-ink-muted" aria-hidden="true" />
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by country, university, or field..."
          className="w-full bg-transparent py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
        />
      </div>
      <Button type="submit" size="md" className="sm:w-auto">
        Search Scholarships
      </Button>
    </form>
  );
}
