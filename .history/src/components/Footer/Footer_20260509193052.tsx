import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";


export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.top}>

                {/* BRAND */}
                <div className={styles.brand}>
                    <Image
                        src="/JB-logo.svg"
                        alt="Justyna Brzezińska Beauty Atelier"
                        width={180}
                        height={60}
                    />

                    <p>
                        Profesjonalny makijaż i stylizacja włosów
                        w Kielcach. Beauty Atelier stworzone dla kobiet
                        ceniących estetykę, jakość i indywidualne podejście.
                    </p>
                </div>

                {/* NAVIGATION */}
                <div className={styles.column}>
                    <h3>Nawigacja</h3>

                    <nav>
                        <Link href="/">Start</Link>
                        <Link href="/uslugi">Usługi</Link>
                        <Link href="/portfolio">Portfolio</Link>
                        <Link href="/opinie">Opinie</Link>
                        <Link href="/kontakt">Kontakt</Link>
                    </nav>
                </div>

                {/* SERVICES */}


                <div className={styles.column}>
                    <h3>Usługi</h3>

                    <div className={styles.links}>
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/uslugi/${service.slug}`}
                            >
                                {service.title} Kielce
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CONTACT */}
                <div className={styles.column}>
                    <h3>Kontakt</h3>

                    <div className={styles.contact}>
                        <a href="tel:+48604576265">
                            +48 604 576 265
                        </a>

                        <a href="mailto:justynabrzezinska.atelier@gmail.com">
                            justynabrzezinska.atelier@gmail.com
                        </a>

                        <p>
                            Kielce
                            <br />
                            ul. Świętego Leonarda 1
                        </p>
                    </div>

                    {/* SOCIALS */}
                    <div className={styles.socials}>

                        <a
                            href="https://www.instagram.com/justynabrzezinska.makeup.hair/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <InstagramIcon />
                        </a>

                        <a
                            href="https://www.facebook.com/justmakeup.kielce/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FacebookIcon />
                        </a>

                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>
                <p>
                    © {new Date().getFullYear()} Justyna Brzezińska Beauty Atelier.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

function InstagramIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
            />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
                d="M14 8h2V4h-2c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8c0-.6.4-1 1-1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
        </svg>
    );
}