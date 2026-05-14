export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",

        "@type": "BeautySalon",

        "@id": "https://justynabrzezinska.vercel.app/#beautysalon",

        name: "Justyna Brzezińska Beauty Atelier",

        alternateName: [
            "JB Atelier",
            "Justyna Brzezińska Make Up & Hair Studio",
            "Beauty Atelier Kielce",
        ],

        description:
            "Profesjonalny makijaż i stylizacja włosów w Kielcach. Makijaż ślubny, okolicznościowy, fryzury oraz usługi beauty premium.",

        url: "https://justynabrzezinska.vercel.app",

        image: "https://justynabrzezinska.vercel.app/og-image.jpg",

        logo: "https://justynabrzezinska.vercel.app/favicon-96x96.png",

        email: "justynabrzezinska.atelier@gmail.com",

        telephone: "+48604576265",

        priceRange: "$$",

        address: {
            "@type": "PostalAddress",

            streetAddress: "ul. Świętego Leonarda 1",

            addressLocality: "Kielce",

            addressRegion: "Świętokrzyskie",

            postalCode: "25-311",

            addressCountry: "PL",
        },

        geo: {
            "@type": "GeoCoordinates",

            latitude: 50.87033,

            longitude: 20.62752,
        },

        areaServed: [
            {
                "@type": "City",
                name: "Kielce",
            },
            {
                "@type": "AdministrativeArea",
                name: "Świętokrzyskie",
            },
        ],

        contactPoint: [
            {
                "@type": "ContactPoint",

                telephone: "+48604576265",

                contactType: "customer service",

                areaServed: "PL",

                availableLanguage: ["Polish"],

                description: "Make Up",
            },
            {
                "@type": "ContactPoint",

                telephone: "+48721567128",

                contactType: "customer service",

                areaServed: "PL",

                availableLanguage: ["Polish"],

                description: "Hair",
            },
        ],

        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",

                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],

                opens: "09:00",

                closes: "20:00",
            },
        ],

        serviceType: [
            "Makijaż ślubny",
            "Makijaż okolicznościowy",
            "Stylizacja włosów",
            "Beauty photo",
        ],

        hasOfferCatalog: {
            "@type": "OfferCatalog",

            name: "Usługi Beauty",

            itemListElement: [
                {
                    "@type": "Offer",

                    itemOffered: {
                        "@type": "Service",

                        name: "Makijaż ślubny",

                        url: "https://justynabrzezinska.vercel.app/uslugi/makijaz-slubny-kielce",
                    },
                },
                {
                    "@type": "Offer",

                    itemOffered: {
                        "@type": "Service",

                        name: "Makijaż okolicznościowy",

                        url: "https://justynabrzezinska.vercel.app/uslugi/makijaz-okolicznosciowy-kielce",
                    },
                },
                {
                    "@type": "Offer",

                    itemOffered: {
                        "@type": "Service",

                        name: "Stylizacja włosów",

                        url: "https://justynabrzezinska.vercel.app/uslugi/stylizacja-wlosow-kielce",
                    },
                },
                {
                    "@type": "Offer",

                    itemOffered: {
                        "@type": "Service",

                        name: "Beauty Photo",

                        url: "https://justynabrzezinska.vercel.app/uslugi/beauty-photo-kielce",
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }}
        />
    );
}