import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Country } from "@/types";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={`/countries/${country.slug}`}
      className="group relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl shadow-soft transition-shadow hover:shadow-lifted"
    >
      <Image
        src={country.heroImage}
        alt={`Scholarships to study in ${country.name}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="relative flex items-center justify-between p-5 text-white">
        <div>
          <p className="text-2xl" aria-hidden="true">{country.flagEmoji}</p>
          <h3 className="font-display text-lg font-semibold">{country.name}</h3>
          <p className="text-sm text-white/80">{country.totalScholarships} scholarships</p>
        </div>
        <ArrowUpRight className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
      </div>
    </Link>
  );
}
