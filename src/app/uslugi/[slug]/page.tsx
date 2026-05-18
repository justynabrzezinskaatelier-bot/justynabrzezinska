import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, siteConfig } from "@/config/site";
import { getService, services } from "@/lib/services";
import styles from "@/styles/Service.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const path = `/uslugi/${service.slug}`;

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: `${service.seoTitle} | ${siteConfig.name}`,
      description: service.seoDescription,
      url: absoluteUrl(path),
      images: [
        {
          url: absoluteUrl("/og-image.jpg"),
          width: 1200,
          height: 630,
          alt: service.shortTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.seoTitle} | ${siteConfig.name}`,
      description: service.seoDescription,
      images: [absoluteUrl("/og-image.jpg")],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return notFound();
  }

  const serviceUrl = absoluteUrl(`/uslugi/${service.slug}`);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.seoDescription,
    provider: {
      "@id": absoluteUrl("/#beautysalon"),
      name: siteConfig.name,
    },
    areaServed: siteConfig.address.city,
    url: serviceUrl,
    image: absoluteUrl(service.imageFirst),
    serviceType: service.shortTitle,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Start",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Usługi",
        item: absoluteUrl("/uslugi"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: serviceUrl,
      },
    ],
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.label}>{service.label}</p>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.lead}>{service.lead}</p>

          <div className={styles.heroActions}>
            <Link href="/kontakt" className={styles.primaryCta}>
              Zarezerwuj termin
            </Link>
            <Link href="/uslugi" className={styles.secondaryCta}>
              Zobacz wszystkie usługi
            </Link>
          </div>
        </div>

        <div className={styles.heroImageWrap}>
          <Image
            src={service.imageSecond}
            alt={service.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 44vw"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.subtitle}>{service.subtitle}</p>
        <p>{service.description}</p>
      </section>

      <section className={styles.split}>
        <div>
          <p className={styles.sectionLabel}>Dla kogo</p>
          <h2>To dobry wybór, jeśli chcesz efektu bez przypadkowości</h2>
        </div>

        <div className={styles.listGrid}>
          {service.idealFor.map((item) => (
            <article key={item} className={styles.card}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.featureBand}>
        <p className={styles.sectionLabel}>Efekt</p>
        <h2>Co zyskujesz</h2>

        <div className={styles.benefitsGrid}>
          {service.benefits.map((benefit) => (
            <article key={benefit} className={styles.benefit}>
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className={styles.mediaImageWrap}>
          <Image
            src={service.imageThird}
            alt={service.imageAlt}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className={styles.mediaImage}
          />
        </div>

        <div className={styles.includes}>
          <p className={styles.sectionLabel}>Zakres</p>
          <h2>Co zawiera usługa</h2>

          <ul>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.process}>
        <p className={styles.sectionLabel}>Proces</p>
        <h2>Jak wygląda współpraca</h2>

        <div className={styles.processGrid}>
          {service.process.map((step, index) => (
            <article key={step} className={styles.processCard}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.faq}>
        <p className={styles.sectionLabel}>FAQ</p>
        <h2>Najczęstsze pytania</h2>

        <div className={styles.faqList}>
          {service.faq.map((item) => (
            <article key={item.question} className={styles.faqItem}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <p className={styles.sectionLabel}>{service.shortTitle}</p>
        <h2>Umów termin i omów swoją stylizację</h2>
        <p>
          Najlepszy efekt zaczyna się od dobrej rozmowy. Napisz lub zadzwoń,
          żeby sprawdzić dostępność terminu.
        </p>

        <Link href="/kontakt" className={styles.cta}>
          Przejdź do kontaktu
        </Link>
      </section>
    </main>
  );
}
