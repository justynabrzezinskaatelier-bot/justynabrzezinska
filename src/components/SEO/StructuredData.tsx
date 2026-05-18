import { absoluteUrl, siteConfig } from "@/config/site";
import { services } from "@/lib/services";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: siteConfig.language,
        publisher: {
          "@id": absoluteUrl("/#beautysalon"),
        },
      },
      {
        "@type": "BeautySalon",
        "@id": absoluteUrl("/#beautysalon"),
        name: siteConfig.name,
        alternateName: [
          siteConfig.shortName,
          "Justyna Brzezińska Make Up & Hair Studio",
          "Beauty Atelier Kielce",
        ],
        description: siteConfig.description,
        url: siteConfig.url,
        image: absoluteUrl("/og-image.jpg"),
        logo: absoluteUrl("/favicon-96x96.png"),
        email: siteConfig.email,
        telephone: siteConfig.phones.makeup.schema,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        areaServed: [
          {
            "@type": "City",
            name: siteConfig.address.city,
          },
          {
            "@type": "AdministrativeArea",
            name: siteConfig.address.region,
          },
        ],
        sameAs: [siteConfig.socials.instagram, siteConfig.socials.facebook],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phones.makeup.schema,
            contactType: "customer service",
            areaServed: "PL",
            availableLanguage: ["Polish"],
            description: "Make up",
          },
          {
            "@type": "ContactPoint",
            telephone: siteConfig.phones.hair.schema,
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Usługi Beauty",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.shortTitle,
              description: service.seoDescription,
              areaServed: siteConfig.address.city,
              provider: {
                "@id": absoluteUrl("/#beautysalon"),
              },
              url: absoluteUrl(`/uslugi/${service.slug}`),
            },
          })),
        },
      },
    ],
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
