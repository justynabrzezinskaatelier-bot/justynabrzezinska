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

                {/* CARD */}
                <div className={styles.card}>
                    <h2>Dane kontaktowe</h2>

                    {/* ADDRESS */}
                    <div className={styles.row}>

                        <p><IconPin /> Kielce, ul. Świętego Leonarda 1</p>
                    </div>

                    {/* PHONE */}
                    <div className={styles.row}>
                        <p className={styles.label}>Make up</p>
                        <a href="tel:+48604576265">
                            <IconPhone /> +48 604 576 265
                        </a>
                    </div>
                    <div className={styles.row}>
                        <p className={styles.label}>Hair</p>
                        <a href="tel:+48604576265">
                            <IconPhone /> +48 721 567 128
                        </a>
                    </div>

                    {/* EMAIL */}
                    <div className={styles.row}>

                        <a
                            href="mailto:justynabrzezinska.atelier@gmail.com?subject=Rezerwacja wizyty Beauty Atelier&body=Dzień dobry,%0D%0AChciałabym umówić wizytę."
                        >
                            <IconMail /> justynabrzezinska.atelier@gmail.com
                        </a>
                    </div>

                    <a className={styles.cta} href="tel:+48604576265">
                        Zadzwoń teraz
                    </a>
                </div>

                {/* MAP */}
                <div className={styles.mapWrapper}>
                    <iframe
                        title="Beauty Atelier Kielce"
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
function IconPin() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <circle
                cx="12"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
}

function IconPhone() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2
        19.79 19.79 0 0 1-8.63-3.07
        19.5 19.5 0 0 1-6-6
        19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
        c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91
        a16 16 0 0 0 6 6l1.58-1.14a2 2 0 0 1 2.11-.45
        c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    );
}

function IconMail() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
                d="M4 4h16v16H4V4z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M4 6l8 6 8-6"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
}