import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";
import { services } from "@/lib/services";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image
            src="/JB-logo.svg"
            alt={siteConfig.name}
            width={180}
            height={60}
          />

          <p>
            Profesjonalny makijaż i stylizacja włosów w Kielcach. Beauty
            Atelier stworzone dla kobiet ceniących estetykę, jakość i
            indywidualne podejście.
          </p>
        </div>

        <div className={styles.column}>
          <h3>Nawigacja</h3>

          <nav>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.column}>
          <h3>Usługi</h3>

          <div className={styles.links}>
            {services.map((service) => (
              <Link key={service.slug} href={`/uslugi/${service.slug}`}>
                {service.shortTitle} Kielce
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3>Kontakt</h3>

          <div className={styles.contact}>
            <a href={siteConfig.phones.makeup.href}>
              {siteConfig.phones.makeup.display}
            </a>

            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>

            <p>
              {siteConfig.address.city}
              <br />
              {siteConfig.address.street}
            </p>
          </div>

          <div className={styles.socials}>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>

            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Wszelkie prawa
          zastrzeżone.
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
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
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
