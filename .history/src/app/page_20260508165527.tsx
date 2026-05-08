import Image from "next/image";
import styles from "@/styles/Home.module.css";

import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";

export default function Home() {
  return (
    <main>


      <section>
        <HeroSection />
        <ServicesSection />
      </section>
    </main>
  );
}