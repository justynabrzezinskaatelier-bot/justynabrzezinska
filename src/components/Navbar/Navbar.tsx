"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => {
    burgerRef.current?.focus();
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label={siteConfig.name}>
            <Image
              src="/JB-logo.svg"
              alt={siteConfig.name}
              width={170}
              height={55}
            />
          </Link>

          <nav className={styles.nav} aria-label="Nawigacja główna">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/kontakt" className={styles.cta}>
            Umów wizytę
          </Link>

          <button
            ref={burgerRef}
            type="button"
            className={styles.burger}
            onClick={openMenu}
            aria-label="Otwórz menu"
            aria-expanded={isOpen}
            aria-controls={isOpen ? "mobile-menu" : undefined}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Zamknij menu"
            className={styles.overlay}
            onClick={closeMenu}
          />

          <aside
            id="mobile-menu"
            className={`${styles.mobileMenu} ${styles.open}`}
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne"
          >
            <button
              type="button"
              className={styles.close}
              onClick={closeMenu}
              aria-label="Zamknij menu"
            >
              ×
            </button>

            <div className={styles.mobileContent}>
              <Link
                href="/"
                className={styles.mobileLogo}
                onClick={closeMenu}
                aria-label="Strona główna"
              >
                <Image
                  src="/Logo.svg"
                  alt={siteConfig.name}
                  width={250}
                  height={250}
                  priority
                />
              </Link>

              <nav className={styles.mobileNav} aria-label="Menu mobilne">
                {navLinks.map((link) => (
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
      )}
    </>
  );
}
