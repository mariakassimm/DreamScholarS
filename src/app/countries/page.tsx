import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import CountryCard from "@/components/country/CountryCard";
import { getAllCountries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Browse Scholarships by Country",
  description:
    "Explore fully funded scholarships organized by study destination, from Japan and Germany to the United States and beyond.",
  alternates: { canonical: "/countries" },
};

export default function CountriesPage() {
  const countries = getAllCountries();

  return (
    <div className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Browse by Country
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            Discover scholarship opportunities across {countries.length}{" "}
            popular study destinations around the world.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </Container>
    </div>
  );
}
