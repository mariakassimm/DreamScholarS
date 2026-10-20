import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SearchBar from "@/components/home/SearchBar";
import { getAllScholarships, getAllCountries } from "@/lib/data";

export default function Hero() {
  const scholarshipCount = getAllScholarships().length;
  const countryCount = getAllCountries().length;

  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-white">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(600px circle at 10% 10%, rgba(37,99,235,0.06), transparent), radial-gradient(500px circle at 90% 30%, rgba(124,58,237,0.06), transparent)",
        }}
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center gap-8 py-20 text-center sm:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {scholarshipCount}+ scholarships researched from official sources
        </span>

        <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          Find the scholarship that funds your future
        </h1>

        <p className="max-w-xl text-balance text-lg leading-relaxed text-ink-muted">
          DreamScholar helps students discover fully and partially funded
          scholarships across {countryCount}+ countries — with honest
          eligibility notes and a direct link to the official source for
          every listing.
        </p>

        <SearchBar />

        <p className="text-sm text-ink-muted">
          Popular: Japan · Germany · UK · USA · Canada · Fully Funded Master&apos;s
        </p>
      </Container>
    </section>
  );
}
