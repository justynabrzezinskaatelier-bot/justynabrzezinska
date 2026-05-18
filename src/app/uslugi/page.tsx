import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import ServicesPage from "@/sections/ServicesPage/ServicesPage";

export const metadata: Metadata = {
  title: "Usługi",
  description:
    "Makijaż ślubny, makijaż okolicznościowy, stylizacja włosów i beauty photo w Kielcach.",
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/uslugi",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "Usługi | Justyna Brzezińska Beauty Atelier",
    description:
      "Poznaj usługi Beauty Atelier: makijaż ślubny, okolicznościowy, stylizacja włosów i beauty photo.",
    url: absoluteUrl("/uslugi"),
    images: [
      {
        url: absoluteUrl("/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function UslugiPage() {
  return <ServicesPage />;
}
