import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],

        sitemap: "https://justynabrzezinska.vercel.app/sitemap.xml",

        host: "https://justynabrzezinska.vercel.app",
    };
}