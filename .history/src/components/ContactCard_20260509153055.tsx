"use client";

import { useState } from "react";
import styles from "@/app/kontakt/Kontakt.module.css";

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

                {showCallOptions && (
                    <div className={styles.callDropdown}>

                        <a href="tel:+48604576265">
                            <span>Make Up</span>
                            <strong>+48 604 576 265</strong>
                        </a>

                        <a href="tel:+48721567128">
                            <span>Hair</span>
                            <strong>+48 721 567 128</strong>
                        </a>

                    </div>
                )}
            </div>
        </div>
    );
}

function IconPin() {
    return <span>📍</span>;
}

function IconPhone() {
    return <span>✆</span>;
}

function IconMail() {
    return <span>✉</span>;
}