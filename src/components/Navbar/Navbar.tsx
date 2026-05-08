"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const links = [
    { label: "Start", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Opinie", href: "/opinie" },
    { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // SCROLL EFFECT
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // BODY SCROLL LOCK
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <header
                className={`${styles.header} ${isScrolled ? styles.scrolled : ""
                    }`}
            >
                <div className={styles.inner}>

                    {/* LOGO */}
                    <Link
                        href="/"
                        className={styles.logo}
                        aria-label="Justyna Brzezińska Beauty Atelier"
                    >
                        <Image
                            src="/JB-logo.svg"
                            alt="Justyna Brzezińska Beauty Atelier"
                            width={170}
                            height={55}
                            priority
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav
                        className={styles.nav}
                        aria-label="Nawigacja główna"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.navLink}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <Link
                        href="/kontakt"
                        className={styles.cta}
                    >
                        Umów wizytę
                    </Link>

                    {/* BURGER */}
                    <button
                        type="button"
                        className={styles.burger}
                        onClick={() => setIsOpen(true)}
                        aria-label="Otwórz menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* OVERLAY */}
            {isOpen && (
                <button
                    type="button"
                    aria-label="Zamknij menu"
                    className={styles.overlay}
                    onClick={closeMenu}
                />
            )}

            {/* MOBILE MENU */}
            <aside
                id="mobile-menu"
                className={`${styles.mobileMenu} ${isOpen ? styles.open : ""
                    }`}
                aria-hidden={!isOpen}
            >
                {/* CLOSE */}
                <button
                    type="button"
                    className={styles.close}
                    onClick={closeMenu}
                    aria-label="Zamknij menu"
                >
                    ×
                </button>

                <div className={styles.mobileContent}>

                    {/* MOBILE LOGO */}
                    <Link
                        href="/"
                        className={styles.mobileLogo}
                        onClick={closeMenu}
                        aria-label="Strona główna"
                    >
                        <Image
                            src="/Logo.svg"
                            alt="Logo Beauty Atelier"
                            width={250}
                            height={250}
                            priority
                        />
                    </Link>

                    {/* MOBILE NAV */}
                    <nav
                        className={styles.mobileNav}
                        aria-label="Menu mobilne"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={styles.mobileLink}
                                onClick={closeMenu}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* MOBILE CTA */}
                    <Link
                        href="/kontakt"
                        className={styles.mobileCTA}
                        onClick={closeMenu}
                    >
                        Umów wizytę
                    </Link>
                </div>
            </aside>
        </>
    );
}