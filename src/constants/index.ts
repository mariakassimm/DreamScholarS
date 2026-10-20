import { NavLink } from "@/types";

export const SITE_NAME = "DreamScholar";
export const SITE_URL = "https://dreamscholar.example.com";
export const SITE_DESCRIPTION =
  "Discover fully funded scholarships around the world. Browse by country, degree, and field of study — updated regularly for students who dream big.";
export const CONTACT_EMAIL = "hello@dreamscholar.example.com";
export const PRIVACY_LAST_UPDATED = "July 2026";
export const TERMS_LAST_UPDATED = "July 2026";

export const NAV_LINKS: NavLink[] = [
  { label: "Scholarships", href: "/scholarships" },
  { label: "Countries", href: "/countries" },
  { label: "Degrees", href: "/degrees" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "All Scholarships", href: "/scholarships" },
    { label: "Browse by Country", href: "/countries" },
    { label: "Browse by Degree", href: "/degrees" },
    { label: "Guides & Tips", href: "/guides" },
  ],
  company: [
    { label: "About DreamScholar", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  popularDegrees: [
    { label: "Bachelor's Scholarships", href: "/degrees/bachelor" },
    { label: "Master's Scholarships", href: "/degrees/master" },
    { label: "PhD Scholarships", href: "/degrees/phd" },
  ],
};
