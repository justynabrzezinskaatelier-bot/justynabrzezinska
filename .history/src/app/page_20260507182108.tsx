import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section>
        <HeroSection />
      </section>
    </main>
  );
}