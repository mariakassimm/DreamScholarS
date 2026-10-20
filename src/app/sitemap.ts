import { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";
import {
  getAllScholarships,
  getAllCountries,
  getAllDegrees,
  getAllGuides,
} from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/scholarships",
    "/countries",
    "/degrees",
    "/guides",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const scholarshipRoutes: MetadataRoute.Sitemap = getAllScholarships().map((s) => ({
    url: `${SITE_URL}/scholarships/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const countryRoutes: MetadataRoute.Sitemap = getAllCountries().map((c) => ({
    url: `${SITE_URL}/countries/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const degreeRoutes: MetadataRoute.Sitemap = getAllDegrees().map((d) => ({
    url: `${SITE_URL}/degrees/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const guideRoutes: MetadataRoute.Sitemap = getAllGuides().map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: new Date(g.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...scholarshipRoutes,
    ...countryRoutes,
    ...degreeRoutes,
    ...guideRoutes,
  ];
}
