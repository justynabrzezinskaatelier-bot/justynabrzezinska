import styles from "./ServicesSection.module.css";
import Link from "next/link";

const services = [
    {
        title: "Makijaż ślubny",
        description:
            "Trwały i elegancki makijaż ślubny dopasowany do urody, stylizacji i charakteru ceremonii.",
        slug: "makijaz-slubny-kielce",
    },
    {
        title: "Makijaż okolicznościowy",
        description:
            "Profesjonalny makijaż na wyjątkowe okazje, podkreślający naturalne piękno i pewność siebie.",
        slug: "makijaz-okolicznosciowy-kielce",
    },
    {
        title: "Stylizacja włosów",
        description:
            "Nowoczesne fryzury i stylizacje tworzone z dbałością o harmonię całego wizerunku.",
        slug: "stylizacja-wlosow-kielce",
    },
    {
        title: "Beauty & photo",
        description:
            "Kompleksowe przygotowanie do sesji zdjęciowych oraz współpraca przy projektach beauty.",
        slug: "beauty-photo-kielce",
    },
];

export default function ServicesSection() {
    return (
        <section className={styles.section} id="services">

            <div className={styles.top}>
                <p className={styles.label}>Usługi</p>

                <h2 className={styles.title}>
                    Makijaż i stylizacja włosów w Kielcach
                </h2>

                <p className={styles.description}>
                    Tworzymy spójne i trwałe stylizacje beauty dopasowane do
                    indywidualnej urody, okazji i charakteru klientki.
                </p>
            </div>

            <div className={styles.grid}>
                {services.map((service) => (
                    <article key={service.title} className={styles.card}>
                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        <Link href={`/uslugi/${service.slug}`}>
                            Dowiedz się więcej
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}