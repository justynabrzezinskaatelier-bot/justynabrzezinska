export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  label: string;
  lead: string;
  description: string;
  imageFirst: string;
  imageSecond: string;
  imageThird: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
  idealFor: string[];
  benefits: string[];
  includes: string[];
  process: string[];
  faq: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "makijaz-slubny-kielce",
    title: "Makijaż ślubny, który wygląda elegancko od pierwszego spojrzenia do ostatniego tańca",
    shortTitle: "Makijaż ślubny",
    subtitle: "Kielce · Beauty Atelier",
    label: "Bridal Experience",
    lead:
      "Makijaż ślubny premium dla Panny Młodej, która chce czuć się spokojnie, pięknie i sobą w najważniejszym dniu.",
    description:
      "Tworzymy makijaż dopasowany do urody, sukni, fryzury, światła i charakteru ceremonii. Efekt ma być świeży, trwały i fotograficzny, ale bez wrażenia maski.",
    imageFirst: "/services/wedding-makeup.webp",
    imageSecond: "/services/wedding-makeup-02.webp",
    imageThird: "/services/wedding-makeup-03.webp",
    imageAlt: "Elegancki makijaż ślubny wykonany w Beauty Atelier Kielce",
    seoTitle: "Makijaż ślubny Kielce",
    seoDescription:
      "Ekskluzywny makijaż ślubny w Kielcach. Naturalny, trwały i dopasowany do Ciebie.",
    idealFor: [
      "Panny Młodej, która chce wyglądać elegancko i naturalnie",
      "ślubu cywilnego, kościelnego, plenerowego i kameralnej ceremonii",
      "stylizacji z makijażem próbnym i omówieniem całego looku",
      "kobiet, które chcą uniknąć przypadkowego efektu w dniu ślubu",
    ],
    benefits: [
      "spójność makijażu z fryzurą, suknią i biżuterią",
      "trwałość przygotowana na emocje, zdjęcia i wiele godzin uroczystości",
      "świadoma praca z cerą, strukturą skóry i proporcjami twarzy",
      "efekt dopracowany z bliska, na żywo i w obiektywie",
    ],
    includes: [
      "konsultację stylizacji i oczekiwanego efektu",
      "dobór kolorystyki do urody, sukni i bukietu",
      "przygotowanie skóry pod trwały makijaż",
      "makijaż właściwy z utrwaleniem",
      "wskazówki dotyczące przygotowania cery przed ślubem",
    ],
    process: [
      "Rozmowa o stylu ślubu, sukni, fryzurze i inspiracjach.",
      "Dobór kierunku makijażu oraz omówienie trwałości i komfortu.",
      "Wykonanie makijażu z precyzyjnym wykończeniem skóry, oczu i ust.",
      "Utrwalenie efektu i finalna kontrola w świetle dziennym.",
    ],
    faq: [
      {
        question: "Czy warto wykonać makijaż próbny?",
        answer:
          "Tak. Makijaż próbny daje spokój, pozwala dopracować odcień, intensywność i cały charakter stylizacji przed dniem ślubu.",
      },
      {
        question: "Ile trwa makijaż ślubny?",
        answer:
          "Najczęściej od 90 do 150 minut, zależnie od cery, zakresu przygotowania i oczekiwanego efektu.",
      },
      {
        question: "Jak przygotować cerę?",
        answer:
          "Najważniejsze są regularne nawilżanie, brak nowych agresywnych zabiegów tuż przed ślubem i przyjście z czystą skórą.",
      },
    ],
  },
  {
    slug: "makijaz-okolicznosciowy-kielce",
    title: "Makijaż okolicznościowy, który podkreśla urodę i dodaje pewności",
    shortTitle: "Makijaż okolicznościowy",
    subtitle: "Elegancja w najczystszej formie",
    label: "Occasion Makeup",
    lead:
      "Profesjonalny makijaż na wyjątkowe okazje, gdy chcesz wyglądać świeżo, elegancko i dobrze na zdjęciach.",
    description:
      "Makijaż okolicznościowy dopasowujemy do typu urody, stylizacji, pory dnia i charakteru wydarzenia. Efekt jest wyrazisty tam, gdzie trzeba, ale nadal dopracowany i szlachetny.",
    imageFirst: "/services/occasion-makeup.webp",
    imageSecond: "/services/occasion-makeup-02.webp",
    imageThird: "/services/occasion-makeup-03.webp",
    imageAlt: "Makijaż okolicznościowy w eleganckim stylu",
    seoTitle: "Makijaż okolicznościowy Kielce",
    seoDescription:
      "Profesjonalny makijaż okolicznościowy w Kielcach. Naturalny, elegancki i trwały.",
    idealFor: [
      "wesela, chrzciny, komunie, gale i rodzinne uroczystości",
      "studniówki, eventy, bankiety i ważne spotkania",
      "kobiet, które chcą wyglądać elegancko bez przerysowania",
      "stylizacji dziennych, wieczorowych i fotograficznych",
    ],
    benefits: [
      "makijaż dopasowany do światła dziennego, sali i zdjęć",
      "komfort noszenia bez ciężkiego efektu",
      "podkreślenie atutów urody zamiast zmieniania rysów",
      "trwałe wykończenie gotowe na wiele godzin wydarzenia",
    ],
    includes: [
      "krótką konsultację stylu i okazji",
      "przygotowanie skóry pod makijaż",
      "dobór intensywności oka, ust i konturowania",
      "makijaż z utrwaleniem",
      "rekomendację drobnych poprawek w trakcie wydarzenia",
    ],
    process: [
      "Omawiamy okazję, stylizację i oczekiwany poziom intensywności.",
      "Dobieramy paletę kolorów i wykończenie skóry.",
      "Wykonujemy makijaż z dbałością o detale i proporcje.",
      "Utrwalamy efekt oraz sprawdzamy go w świetle dziennym.",
    ],
    faq: [
      {
        question: "Czy makijaż sprawdzi się na zdjęciach?",
        answer:
          "Tak. Pracujemy tak, aby makijaż wyglądał dobrze zarówno na żywo, jak i w obiektywie.",
      },
      {
        question: "Czy mogę pokazać inspirację?",
        answer:
          "Tak, inspiracje są mile widziane. Na ich podstawie dopasujemy efekt do Twojej urody.",
      },
      {
        question: "Ile wcześniej zarezerwować termin?",
        answer:
          "W sezonie ślubnym i weekendowym najlepiej zrobić to z wyprzedzeniem, szczególnie przy godzinach porannych.",
      },
    ],
  },
  {
    slug: "stylizacja-wlosow-kielce",
    title: "Stylizacja włosów, która domyka cały look",
    shortTitle: "Stylizacja włosów",
    subtitle: "Hair Styling · Kielce",
    label: "Hair Style",
    lead:
      "Fryzury ślubne i okolicznościowe projektowane tak, aby współgrały z makijażem, twarzą i całą stylizacją.",
    description:
      "Stylizacja włosów nie jest dodatkiem na końcu. To element, który buduje proporcje, elegancję i charakter całego wizerunku.",
    imageFirst: "/services/hair-style-look.webp",
    imageSecond: "/services/hair-style-look-02.webp",
    imageThird: "/services/hair-style-look-03.webp",
    imageAlt: "Stylizacja włosów i elegancka fryzura okolicznościowa",
    seoTitle: "Stylizacja włosów Kielce",
    seoDescription:
      "Profesjonalna stylizacja włosów w Kielcach. Fryzury ślubne i okolicznościowe dopasowane do całej stylizacji.",
    idealFor: [
      "fryzur ślubnych, próbnych i okolicznościowych",
      "fal, soft waves, upięć, półupięć i eleganckich koków",
      "stylizacji do makijażu i sesji zdjęciowej",
      "kobiet, które chcą trwałej fryzury bez sztucznego efektu",
    ],
    benefits: [
      "dobór fryzury do twarzy, sukienki, dekoltu i biżuterii",
      "trwałość przy zachowaniu lekkości i naturalnego ruchu",
      "spójność z makijażem i charakterem wydarzenia",
      "estetyczne wykończenie widoczne także na zdjęciach z tyłu i profilu",
    ],
    includes: [
      "omówienie inspiracji i rodzaju włosów",
      "dobór objętości, tekstury i formy fryzury",
      "stylizację z utrwaleniem",
      "dopasowanie detali do ozdób lub welonu",
      "wskazówki dotyczące przygotowania włosów przed wizytą",
    ],
    process: [
      "Analizujemy długość, gęstość i podatność włosów.",
      "Dobieramy fryzurę do stylizacji, makijażu i okazji.",
      "Budujemy kształt, objętość i wykończenie.",
      "Utrwalamy efekt tak, aby fryzura pozostała elegancka przez wydarzenie.",
    ],
    faq: [
      {
        question: "Czy włosy powinny być umyte przed wizytą?",
        answer:
          "Najczęściej najlepiej umyć je dzień wcześniej lub zgodnie z indywidualną rekomendacją po konsultacji.",
      },
      {
        question: "Czy można wpiąć ozdoby lub welon?",
        answer:
          "Tak. Warto zabrać ozdoby na wizytę, aby dopasować je do fryzury i bezpiecznie je umocować.",
      },
      {
        question: "Czy stylizacja nadaje się do sesji zdjęciowej?",
        answer:
          "Tak. Dbamy o kształt fryzury także w profilu, z tyłu i w ruchu, co jest ważne przy zdjęciach.",
      },
    ],
  },
  {
    slug: "beauty-photo-kielce",
    title: "Beauty & Photo - stylizacja gotowa na obiektyw",
    shortTitle: "Beauty & Photo",
    subtitle: "Kielce · Studio Experience",
    label: "Beauty & Photo",
    lead:
      "Kompleksowe przygotowanie beauty do sesji zdjęciowych, wizerunkowych i kobiecych, gdzie liczy się detal.",
    description:
      "Makijaż i włosy przygotowujemy z myślą o świetle, obiektywie i finalnych kadrach. To usługa dla kobiet, marek i twórczyń, które chcą wyglądać profesjonalnie przed aparatem.",
    imageFirst: "/services/beautyphoto.webp",
    imageSecond: "/services/beautyphoto-02.webp",
    imageThird: "/services/beautyphoto-03.webp",
    imageAlt: "Makijaż i stylizacja beauty przygotowane do sesji zdjęciowej",
    seoTitle: "Beauty & Photo Kielce",
    seoDescription:
      "Profesjonalne przygotowanie beauty do sesji zdjęciowych w Kielcach: makijaż, włosy i spójna stylizacja.",
    idealFor: [
      "sesji beauty, kobiecych, biznesowych i wizerunkowych",
      "kampanii marek beauty, portfolio i social mediów",
      "kobiet, które chcą wyglądać profesjonalnie na zdjęciach",
      "sesji studyjnych i naturalnych kadrów w świetle dziennym",
    ],
    benefits: [
      "makijaż odporny na światło studyjne i zbliżenia",
      "włosy dopracowane pod kadr, profil i ruch",
      "spójna estetyka dopasowana do celu sesji",
      "look, który wspiera wizerunek, a nie konkuruje z osobowością",
    ],
    includes: [
      "omówienie celu sesji i klimatu zdjęć",
      "makijaż fotograficzny dopasowany do światła",
      "stylizację włosów pod obiektyw",
      "finalne dopracowanie detali przed zdjęciami",
      "rekomendacje dotyczące utrzymania efektu w trakcie sesji",
    ],
    process: [
      "Ustalamy charakter sesji, kadry, styl i oczekiwany efekt.",
      "Dobieramy makijaż i włosy pod światło oraz typ fotografii.",
      "Tworzymy kompletny look gotowy do pracy z fotografem.",
      "Dopracowujemy detale widoczne w zbliżeniach.",
    ],
    faq: [
      {
        question: "Czym różni się makijaż do sesji od zwykłego makijażu?",
        answer:
          "Makijaż do sesji musi pracować ze światłem i obiektywem. Ważna jest struktura skóry, kontrola połysku i detal w zbliżeniach.",
      },
      {
        question: "Czy usługa obejmuje włosy?",
        answer:
          "Tak, Beauty & Photo zakłada spójne przygotowanie makijażu i włosów pod finalny efekt zdjęć.",
      },
      {
        question: "Czy mogę przyjść z moodboardem?",
        answer:
          "Tak. Moodboard, inspiracje lub założenia fotografa bardzo pomagają w stworzeniu dopasowanego looku.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
