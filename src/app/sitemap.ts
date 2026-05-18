import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteConfig.lastUpdated);

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/uslugi"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/kontakt"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/uslugi/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages];
}
