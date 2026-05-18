import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, siteConfig } from "@/config/site";
import { services } from "@/lib/services";
import styles from "./ServicesPage.module.css";

const process = [
  "Konsultacja i omówienie stylizacji",
  "Dobór makijażu oraz fryzury",
  "Realizacja usługi beauty",
  "Final touch i utrwalenie efektu",
];

const faq = [
  {
    question: "Ile trwa makijaż ślubny?",
    answer:
      "Makijaż ślubny trwa zazwyczaj od 90 do 150 minut w zależności od stylizacji.",
  },
  {
    question: "Czy wykonujecie również fryzury?",
    answer:
      "Tak, atelier oferuje kompleksową stylizację włosów dopasowaną do makijażu.",
  },
  {
    question: "Czy możliwa jest wcześniejsza konsultacja?",
    answer:
      "Tak, przed realizacją usługi możliwe jest omówienie oczekiwań i inspiracji.",
  },
];

export default function ServicesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Usługi beauty - ${siteConfig.name}`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.shortTitle,
      url: absoluteUrl(`/uslugi/${service.slug}`),
    })),
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className={styles.hero}>
        <p className={styles.label}>Beauty Atelier</p>

        <h1>
          Makijaż i stylizacja włosów
          <span> w Kielcach</span>
        </h1>

        <p className={styles.description}>
          Luxury Makeup & Hair Studio tworzone z pasji do estetyki, trwałości i
          indywidualnego podejścia.
        </p>
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <article key={service.slug} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.imageFirst}
                    alt={service.shortTitle}
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <h2>{service.shortTitle}</h2>

                  <p>{service.description}</p>

                  <Link href={`/uslugi/${service.slug}`}>
                    Dowiedz się więcej
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <p className={styles.label}>Proces współpracy</p>

          <div className={styles.processGrid}>
            {process.map((step, index) => (
              <div key={step} className={styles.processCard}>
                <span>0{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <p className={styles.label}>FAQ</p>

          <div className={styles.faqList}>
            {faq.map((item) => (
              <article key={item.question} className={styles.faqItem}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2>Zarezerwuj swój termin</h2>

          <p>
            Skontaktuj się i stwórzmy wyjątkową stylizację dopasowaną do
            Ciebie.
          </p>

          <Link href="/kontakt">Umów wizytę</Link>
        </div>
      </section>
    </main>
  );
}
