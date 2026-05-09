"use client";

import { useState } from "react";
import styles from "/Kontakt.module.css";

export default function ContactCard() {
    const [showCallOptions, setShowCallOptions] = useState(false);

    return (
        <div className={styles.card}>
            <h2>Dane kontaktowe</h2>

            {/* ADDRESS */}
            <div className={styles.row}>
                <p>
                    <IconPin /> Kielce, ul. Świętego Leonarda 1
                </p>
            </div>

            {/* PHONE */}
            <p className={styles.phoneLabel}>Make up</p>

            <div className={styles.row}>
                <a href="tel:+48604576265">
                    <IconPhone /> +48 604 576 265
                </a>
            </div>

            <p className={styles.phoneLabel}>Hair</p>

            <div className={styles.row}>
                <a href="tel:+48721567128">
                    <IconPhone /> +48 721 567 128
                </a>
            </div>

            {/* EMAIL */}
            <div className={styles.row}>
                <a href="mailto:justynabrzezinska.atelier@gmail.com">
                    <IconMail /> justynabrzezinska.atelier@gmail.com
                </a>
            </div>

            {/* CTA */}
            <div className={styles.callWrapper}>

                <button
                    className={styles.cta}
                    onClick={() =>
                        setShowCallOptions((prev) => !prev)
                    }
                >
                    Zadzwoń teraz
                </button>

                <div
                    className={`${styles.callDropdown} ${showCallOptions ? styles.dropdownOpen : ""
                        }`}
                >

                    <a href="tel:+48604576265">
                        <span className={styles.phoneLabel}>Make Up</span>
                        <strong>+48 604 576 265</strong>
                    </a>

                    <a href="tel:+48721567128">
                        <span className={styles.phoneLabel}>Hair</span>
                        <strong>+48 721 567 128</strong>
                    </a>

                </div>
            </div>
        </div>
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