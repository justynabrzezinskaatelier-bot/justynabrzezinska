import { MetadataRoute } from "next";

const baseUrl = "https://justynabrzezinska.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        {
            url: "",
            priority: 1,
            changeFrequency: "weekly" as const,
        },

        {
            url: "/uslugi",
            priority: 0.9,
            changeFrequency: "weekly" as const,
        },

        {
            url: "/kontakt",
            priority: 0.8,
            changeFrequency: "monthly" as const,
        },

        {
            url: "/uslugi/makijaz-slubny-kielce",
            priority: 0.95,
            changeFrequency: "weekly" as const,
        },

        {
            url: "/uslugi/makijaz-okolicznosciowy-kielce",
            priority: 0.9,
            changeFrequency: "weekly" as const,
        },

        {
            url: "/uslugi/stylizacja-wlosow-kielce",
            priority: 0.9,
            changeFrequency: "weekly" as const,
        },

        {
            url: "/uslugi/beauty-photo-kielce",
            priority: 0.85,
            changeFrequency: "monthly" as const,
        },
    ];

    return pages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}