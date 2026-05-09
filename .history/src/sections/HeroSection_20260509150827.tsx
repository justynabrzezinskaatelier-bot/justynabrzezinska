import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero} id="top">

            {/* overlay */}
            <div className={styles.overlay} />

            <div className={styles.content}>

                <p className={styles.subtitle}>
                    Beauty Atelier • Kielce
                </p>

                <h1 className={styles.title}>
                    Makijaż i stylizacja włosów, <br />
                    które podkreślają Twoją naturalną elegancję
                </h1>

                <p className={styles.description}>
                    Makijaż ślubny, okolicznościowy i sesyjny tworzony z precyzją,
                    doświadczeniem i wyczuciem estetyki.
                </p>

                <div className={styles.actions}>
                    <a href="/kontakt" className={styles.primary}>
                        Umów wizytę
                    </a>

                    <a href="#services" className={styles.secondary}>
                        Zobacz usługi
                    </a>
                </div>

            </div>
        </section>
    );
}