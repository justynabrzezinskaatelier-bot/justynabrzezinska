"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const links = [
    { label: "Start", href: "#" },
    { label: "Usługi", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Opinie", href: "#reviews" },
    { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={`container ${styles.wrapper}`}>
                    <a href="#" className={styles.logo}>
                        <Image
                            src="/Logo.svg"
                            alt="Justyna Brzezińska Beauty Atelier"
                            width={180}
                            height={60}
                            priority
                        />
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

                    <button
                        className={styles.menuButton}
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        Menu
                    </button>
                </div>
            </header>

            <div
                className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""
                    }`}
            >
                <button
                    className={styles.closeButton}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    ×
                </button>
                <div className={styles.mobileLogo}>
                    <Image
                        src="/JB-logo.svg"
                        alt="JB Logo"
                        width={90}
                        height={90}
                        priority
                    />
                </div>
                <nav className={styles.mobileNav}>
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#booking"
                        className={styles.mobileCTA}
                        onClick={() => setIsOpen(false)}
                    >
                        Umów wizytę
                    </a>
                </nav>
            </div>
        </>
    );
}