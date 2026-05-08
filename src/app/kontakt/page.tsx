import styles from "./Kontakt.module.css";

export const metadata = {
    title: "Kontakt | Beauty Atelier Kielce",
    description:
        "Skontaktuj się z Justyna Brzezińska Beauty Atelier w Kielcach. Makijaż ślubny, okolicznościowy i stylizacja włosów.",
};

export default function KontaktPage() {
    return (
        <main className={styles.page}>

            {/* HERO */}
            <section className={styles.hero}>
                <p className={styles.label}>Kontakt</p>

                <h1 className={styles.title}>
                    Umów swoją wizytę w Beauty Atelier
                </h1>

                <p className={styles.subtitle}>
                    Kielce • Świętego Leonarda 1
                </p>
            </section>

            {/* CONTENT */}
            <section className={styles.content}>

                <div className={styles.card}>
                    <h2>Dane kontaktowe</h2>

                    <p>📍 Kielce, ul. Świętego Leonarda 1</p>
                    <p>📞 +48 604 576 265</p>
                    <p>✉️ justynabrzezinska.atelier@gmail.com</p>

                    <a className={styles.cta} href="tel:+48604576265">
                        Zadzwoń teraz
                    </a>
                </div>

                <div className={styles.mapWrapper}>
                    <iframe
                        title="Google Maps - Beauty Atelier Kielce"
                        src="https://www.google.com/maps?q=Świętego%20Leonarda%201%20Kielce&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </section>
        </main>
    );
}