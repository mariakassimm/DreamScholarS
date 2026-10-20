export type DegreeLevel = "Bachelor" | "Master" | "PhD";

export interface FundingDetail {
  label: string;
  covered: boolean;
}

export interface Scholarship {
  id: string;
  slug: string;
  title: string;
  university: string;
  country: string;
  countrySlug: string;
  degree: DegreeLevel[];
  funding: "Fully Funded" | "Partially Funded";
  fundingDetails: FundingDetail[];
  /**
   * Free-text guidance on timing instead of a fixed date. Exact deadlines vary
   * by country, university, and year, and stating a specific date as fact risks
   * misleading applicants. Always point to the official source for exact dates.
   */
  deadlineInfo: string;
  duration: string;
  ieltsRequired: boolean;
  minIelts?: number;
  fieldsOfStudy: string[];
  overview: string;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  applicationProcess: string[];
  timeline: { stage: string; period: string }[];
  officialWebsite: string;
  tags: string[];
  featured?: boolean;
  faqs: { question: string; answer: string }[];
}

export interface Country {
  id: string;
  slug: string;
  name: string;
  flagEmoji: string;
  region: string;
  description: string;
  totalScholarships: number;
  popularUniversities: string[];
  heroImage: string;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  content: GuideSection[];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}
