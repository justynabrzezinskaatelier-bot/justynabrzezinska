import styles from "./Kontakt.module.css";
import Image from "next/image";

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
                        title="Justyna Brzezińska Beauty Atelier - Lokalizacja"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.940894662408!2d20.63242807581087!3d50.86929395711909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47182788135d02d9%3A0x621e00686da80630!2sJustyna%20Brzezi%C5%84ska%20Beauty%20Atelier%20-%20Make%20Up%20%26%20Hair%20Studio!5e0!3m2!1spl!2spl!4v1778258333331!5m2!1spl!2spl"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>

            </section>
        </main>
    );
}