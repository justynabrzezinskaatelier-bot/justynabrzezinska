export const siteConfig = {
  url: "https://justynabrzezinska.vercel.app",
  name: "Justyna Brzezińska Beauty Atelier",
  shortName: "JB Atelier",
  title: "Justyna Brzezińska Beauty Atelier - Make Up & Hair Studio Kielce",
  titleTemplate: "%s | Justyna Brzezińska Beauty Atelier",
  description:
    "Profesjonalny makijaż i stylizacja włosów w Kielcach. Makijaż ślubny, okolicznościowy, fryzury ślubne oraz stylizacje beauty tworzone z precyzją i wyczuciem estetyki.",
  locale: "pl_PL",
  language: "pl",
  category: "Beauty",
  lastUpdated: "2026-05-18",
  email: "justynabrzezinska.atelier@gmail.com",
  address: {
    street: "ul. Świętego Leonarda 1",
    city: "Kielce",
    region: "Świętokrzyskie",
    postalCode: "25-311",
    country: "PL",
  },
  geo: {
    latitude: 50.87033,
    longitude: 20.62752,
  },
  phones: {
    makeup: {
      label: "Make up",
      display: "+48 604 576 265",
      href: "tel:+48604576265",
      schema: "+48604576265",
    },
    hair: {
      label: "Hair",
      display: "+48 721 567 128",
      href: "tel:+48721567128",
      schema: "+48721567128",
    },
  },
  socials: {
    instagram: "https://www.instagram.com/justynabrzezinska.makeup.hair/",
    facebook: "https://www.facebook.com/justmakeup.kielce/",
  },
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
} as const;

export const navLinks = [
  { label: "Start", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
