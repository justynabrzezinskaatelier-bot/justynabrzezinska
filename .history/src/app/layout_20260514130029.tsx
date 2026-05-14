import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import StructuredData from "@/components/SEO/StructuredData";
import Script from "next/script";

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
  metadataBase: new URL("https://justynabrzezinska.vercel.app"),

  title: {
    default:
      "Justyna Brzezińska Beauty Atelier – Make Up & Hair Studio Kielce",

    template: "%s | Justyna Brzezińska Beauty Atelier",
  },

  description:
    "Profesjonalny makijaż i stylizacja włosów w Kielcach. Makijaż ślubny, okolicznościowy, fryzury oraz usługi beauty tworzone z pasją i perfekcją.",

  keywords: [
    "makijaż Kielce",
    "makijaż ślubny Kielce",
    "makijażystka Kielce",
    "stylizacja włosów Kielce",
    "fryzury ślubne Kielce",
    "beauty atelier Kielce",
    "make up Kielce",
    "makijaż okolicznościowy Kielce",
    "wizażystka Kielce",
    "beauty photo Kielce",
  ],

  authors: [
    {
      name: "Justyna Brzezińska Beauty Atelier",
    },
  ],

  creator: "Justyna Brzezińska Beauty Atelier",

  publisher: "Justyna Brzezińska Beauty Atelier",

  category: "Beauty",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://justynabrzezinska.vercel.app",
  },

  openGraph: {
    type: "website",

    locale: "pl_PL",

    url: "https://justynabrzezinska.vercel.app",

    siteName: "Justyna Brzezińska Beauty Atelier",

    title: "Justyna Brzezińska Beauty Atelier",

    description:
      "Profesjonalny makijaż i stylizacja włosów w Kielcach. Makeup & Hair Studio.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Justyna Brzezińska Beauty Atelier",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Justyna Brzezińska Beauty Atelier",

    description:
      "Makijaż ślubny, stylizacja włosów i profesjonalne usługi beauty w Kielcach.",

    images: ["/og-image.jpg"],
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JB Atelier",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J5RJF28SQW"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-J5RJF28SQW');
    `}
        </Script>
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}