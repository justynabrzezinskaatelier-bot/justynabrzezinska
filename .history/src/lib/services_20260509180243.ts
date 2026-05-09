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
            "Idealny na eventy, gale i sesje zdjęciowe.",
        seoTitle: "Makijaż okolicznościowy Kielce",
        seoDescription:
            "Profesjonalny makijaż na każdą okazję w Kielcach."
    }
];