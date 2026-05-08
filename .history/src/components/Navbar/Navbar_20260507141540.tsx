"use client";

import styles from "./Navbar.module.css";

const links = [
    { label: "Start", href: "#" },
    { label: "Usługi", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Opinie", href: "#reviews" },
    { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.wrapper}`}>
                <a href="#" className={styles.logo}>
                    JB
                </a>

                <nav className={styles.nav}>
                    {links.map((link) => (
                        <a key={link.label} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a href="#booking" className={styles.cta}>
                    Umów wizytę
                </a>
            </div>
        </header>
    );
}