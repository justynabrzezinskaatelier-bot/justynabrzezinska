import Image from "next/image";
import styles from "./ServicesPage.module.css";

const services = [
    {
        title: "Makijaż ślubny",
        description:
            "Elegancki i trwały makijaż ślubny tworzony z dbałością o każdy detal oraz perfekcyjne wykończenie.",
        image: "/services/wedding.jpg",
        href: "/uslugi/makijaz-slubny-kielce",
    },

    {
        title: "Makijaż okolicznościowy",
        description:
            "Profesjonalny makijaż na wyjątkowe okazje podkreślający naturalne piękno i charakter stylizacji.",
        image: "/services/occasion.jpg",
        href: "/uslugi/makijaz-okolicznosciowy-kielce",
    },

    {
        title: "Stylizacja włosów",
        description:
            "Nowoczesne fryzury i stylizacje włosów tworzone w harmonii z makijażem i całą estetyką looku.",
        image: "/services/hair.jpg",
        href: "/uslugi/stylizacja-wlosow-kielce",
    },

    {
        title: "Beauty & Photo",
        description:
            "Kompleksowe przygotowanie beauty do sesji zdjęciowych oraz projektów wizerunkowych.",
        image: "/services/photo.jpg",
        href: "/uslugi/beauty-photo-kielce",
    },
];

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
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className="container">
                    <p className={styles.label}>Beauty Atelier</p>

                    <h1>
                        Makijaż i stylizacja włosów<br />
                        <span> w Kielcach</span>
                    </h1>

                    <p className={styles.description}>
                        Luxury Makeup & Hair Studio tworzone z pasji do
                        estetyki, trwałości i indywidualnego podejścia.
                    </p>
                </div>
            </section>

            <section className={styles.services}>
                <div className="container">
                    <div className={styles.grid}>
                        {services.map((service) => (
                            <article key={service.title} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className={styles.image}
                                    />
                                </div>

                                <div className={styles.content}>
                                    <h2>{service.title}</h2>

                                    <p>{service.description}</p>

                                    <a href={service.href}>Dowiedz się więcej</a>
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
                        Skontaktuj się i stwórzmy wyjątkową stylizację
                        dopasowaną do Ciebie.
                    </p>

                    <a href="#contact">Umów wizytę</a>
                </div>
            </section>
        </main>
    );
}