import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import styles from "@/styles/Service.module.css";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
    const service = services.find(s => s.slug === params.slug);

    if (!service) return {};

    return {
        title: service.seoTitle,
        description: service.seoDescription,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const service = services.find(s => s.slug === slug);

    if (!service) return notFound();

    return (
        < main className={styles.page} >

            {/* HERO */}
            < section className={styles.hero} >
                <p className={styles.label}>{service.label}</p>

                <h1 className={styles.title}>
                    {service.title}
                </h1>

                <p className={styles.subtitle}>
                    {service.subtitle}
                </p>
            </ section >

            {/* CONTENT */}
            <section className={styles.section} >
                <p>{service.description}</p>
            </section >

            {/* CTA */}
            <section className={styles.ctaSection} >
                <a href="/kontakt" className={styles.cta}>
                    Zarezerwuj termin
                </a>
            </section >

        </main >
    );
}