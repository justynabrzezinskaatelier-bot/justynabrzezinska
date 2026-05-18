import Link from "next/link";
import { services } from "@/lib/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.top}>
        <p className={styles.label}>Usługi</p>

        <h2 className={styles.title}>Makijaż i stylizacja włosów w Kielcach</h2>

        <p className={styles.description}>
          Tworzymy spójne i trwałe stylizacje beauty dopasowane do
          indywidualnej urody, okazji i charakteru klientki.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.slug} className={styles.card}>
            <h3>{service.shortTitle}</h3>

            <p>{service.seoDescription}</p>

            <Link href={`/uslugi/${service.slug}`}>Dowiedz się więcej</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
