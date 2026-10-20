import scholarshipsData from "@/data/scholarships.json";
import countriesData from "@/data/countries.json";
import guidesData from "@/data/guides.json";
import degreesData from "@/data/degrees.json";
import faqsData from "@/data/faqs.json";
import { Scholarship, Country, Guide, FaqItem, DegreeLevel } from "@/types";

const scholarships = scholarshipsData as Scholarship[];
const countries = countriesData as Country[];
const guides = guidesData as Guide[];
const faqs = faqsData as FaqItem[];

export interface DegreeInfo {
  slug: string;
  name: DegreeLevel;
  title: string;
  description: string;
  averageDuration: string;
}

const degrees = degreesData as DegreeInfo[];

export function getAllScholarships(): Scholarship[] {
  return scholarships;
}

export function getFeaturedScholarships(): Scholarship[] {
  return scholarships.filter((s) => s.featured);
}

export function getScholarshipBySlug(slug: string): Scholarship | undefined {
  return scholarships.find((s) => s.slug === slug);
}

export function getScholarshipsByCountry(countrySlug: string): Scholarship[] {
  return scholarships.filter((s) => s.countrySlug === countrySlug);
}

export function getScholarshipsByDegree(degree: string): Scholarship[] {
  const normalized = degree.toLowerCase();
  return scholarships.filter((s) =>
    s.degree.some((d) => d.toLowerCase() === normalized)
  );
}

export function getRelatedScholarships(
  current: Scholarship,
  limit = 3
): Scholarship[] {
  return scholarships
    .filter(
      (s) =>
        s.id !== current.id &&
        (s.countrySlug === current.countrySlug ||
          s.degree.some((d) => current.degree.includes(d)))
    )
    .slice(0, limit);
}

export function searchScholarships(query: string): Scholarship[] {
  const q = query.trim().toLowerCase();
  if (!q) return scholarships;
  return scholarships.filter((s) =>
    [s.title, s.country, s.university, ...s.tags, ...s.fieldsOfStudy]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}

export function getAllCountries(): Country[] {
  return countries;
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getAllDegrees(): DegreeInfo[] {
  return degrees;
}

export function getDegreeBySlug(slug: string): DegreeInfo | undefined {
  return degrees.find((d) => d.slug === slug);
}

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getRelatedGuides(current: Guide, limit = 3): Guide[] {
  return guides
    .filter((g) => g.id !== current.id && g.category === current.category)
    .slice(0, limit);
}

export function getAllFaqs(): FaqItem[] {
  return faqs;
}
