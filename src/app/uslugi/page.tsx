import type { Metadata } from "next";
import ServicesPage from "@/sections/ServicesPage/ServicesPage";

export const metadata: Metadata = {
    title: "Usługi | Justyna Brzezińska Beauty Atelier",
    description:
        "Makijaż ślubny, makijaż okolicznościowy i stylizacja włosów w Kielcach. Premium Beauty Atelier.",

    keywords: [
        "makijaż Kielce",
        "makijaż ślubny Kielce",
        "stylizacja włosów Kielce",
        "makeup artist Kielce",
        "beauty atelier Kielce",
    ],
};

export default function UsługiPage() {
    return <ServicesPage />;
}