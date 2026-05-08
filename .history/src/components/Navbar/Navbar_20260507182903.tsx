"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";

const links = [
    { label: "Start", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Opinie", href: "/opinie" },
    { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
                <div className={styles.inner}>

                    {/* LOGO */}
                    <a href="#top" className={styles.logo}>
                        <Image
                            src="/JB-logo.svg"
                            alt="Justyna Brzezińska Beauty Atelier"
                            width={170}
                            height={55}
                            priority
                        />
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className={styles.nav}>
                        {links.map((link) => (
                            <a key={link.label} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <a href="#contact" className={styles.cta}>
                        Umów wizytę
                    </a>

                    {/* HAMBURGER */}
                    <button
                        className={styles.burger}
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* OVERLAY */}
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* MOBILE MENU */}
            <aside className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>

                <button
                    className={styles.close}
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    ×
                </button>

                <div className={styles.mobileContent}>

                    {/* LOGO - większe, centralne */}
                    <div className={styles.mobileLogo}>
                        <Image
                            src="/Logo.svg"
                            alt="Logo"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>

                    {/* NAV */}
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
                    </nav>

                    {/* CTA */}
                    <a
                        href="#contact"
                        className={styles.mobileCTA}
                        onClick={() => setIsOpen(false)}
                    >
                        Umów wizytę
                    </a>

                </div>
            </aside>
        </>
    );
}