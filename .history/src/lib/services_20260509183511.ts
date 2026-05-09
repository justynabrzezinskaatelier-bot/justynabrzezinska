export type Service = {
    slug: string;
    title: string;
    subtitle: string;
    label: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
};

export const services: Service[] = [
    {
        slug: "makijaz-slubny-kielce",
        title: "Makijaż ślubny, który nie potrzebuje filtrów",
        subtitle: "Kielce · Beauty Atelier",
        label: "Bridal Experience",
        description:
            "Dla kobiet, które chcą wyglądać sobą — tylko w najlepszej wersji.",
        seoTitle: "Makijaż ślubny Kielce | Beauty Atelier",
        seoDescription:
            "Ekskluzywny makijaż ślubny w Kielcach. Naturalny, trwały i dopasowany do Ciebie."
    },
    {
        slug: "makijaz-okolicznosciowy-kielce",
        title: "Makijaż, który podkreśla — nie zmienia",
        subtitle: "Elegancja w najczystszej formie",
        label: "Occasion Makeup",
        description:
            "Profesjonalny makijaż na eventy, gale i sesje zdjęciowe — dopasowany do Twojej urody i stylu.",
        seoTitle: "Makijaż okolicznościowy Kielce | Beauty Atelier",
        seoDescription:
            "Profesjonalny makijaż okolicznościowy w Kielcach. Naturalny, elegancki i trwały."
    },
    {
        slug: "stylizacja-wlosow-kielce",
        title: "Włosy, które domykają całość stylizacji",
        subtitle: "Hair Styling · Kielce",
        label: "Hair Style",
        description:
            "Nowoczesne fryzury dopasowane do makijażu i charakteru stylizacji — od soft waves po eleganckie upięcia.",
        seoTitle: "Stylizacja włosów Kielce | Beauty Atelier",
        seoDescription:
            "Profesjonalna stylizacja włosów w Kielcach. Fryzury ślubne i okolicznościowe."
    },
    {
        slug: "beauty-photo-kielce",
        title: "Beauty & Photo — perfekcja przed obiektywem",
        subtitle: "Kielce · Studio Experience",
        label: "Beauty & Photo",
        description:
            "Kompleksowe przygotowanie do sesji zdjęciowych — makijaż, włosy i finalny look gotowy do aparatu.",
        seoTitle: "Beauty & Photo Kielce | Makijaż do sesji zdjęciowych",
        seoDescription:
            "Profesjonalne przygotowanie beauty do sesji zdjęciowych w Kielcach."
    }
];