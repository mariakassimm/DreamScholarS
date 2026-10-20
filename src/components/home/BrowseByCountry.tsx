import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import CountryCard from "@/components/country/CountryCard";
import { getAllCountries } from "@/lib/data";

export default function BrowseByCountry() {
  const countries = getAllCountries().slice(0, 6);

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Destinations"
            title="Browse by Country"
            description="Explore scholarship opportunities organized by study destination."
          />
          <ButtonLink href="/countries" variant="outline" className="flex-shrink-0">
            View All Countries
          </ButtonLink>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </Container>
    </section>
  );
}
