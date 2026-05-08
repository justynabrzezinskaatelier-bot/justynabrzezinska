import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Justyna Brzezińska Beauty Atelier",
  description:
    "Makijaż i stylizacja włosów w Kielcach. Makeup & Hair Studio.",
  link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"
link rel="icon" type="image/svg+xml" href="/favicon.svg"
link rel="shortcut icon" href="/favicon.ico"
link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"
meta name="apple-mobile-web-app-title" content="JB Atelier"
link rel="manifest" href="/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}