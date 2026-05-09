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

                {/* SERVICES (DYNAMICZNE) */}
                <div className={styles.column}>
                    <h3>Usługi</h3>

                    <div className={styles.links}>
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/uslugi/${service.slug}`}
                            >
                                {service.title}
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