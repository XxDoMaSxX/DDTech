import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "lt" | "en";

type Service = { id: string; title: string; blurb: string };
type Step = { title: string; body: string };
type Principle = { title: string; body: string };

export type Content = {
  nav: { work: string; process: string; about: string; contact: string; cta: string };
  hero: {
    titleA: string;
    titleB: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    doing: string;
  };
  servicesSection: { title: string; lead: string };
  services: Service[];
  processSection: { title: string; lead: string };
  steps: Step[];
  principlesSection: { title: string; lead: string };
  principles: Principle[];
  stackSection: { title: string; lead: string; note: string };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    email: string;
    cta: string;
    nameLabel: string;
    emailField: string;
    msgLabel: string;
    nameph: string;
    emailph: string;
    msgph: string;
    note: string;
    sent: string;
  };
  footer: { line: string; rights: string };
};

export const CONTENT: Record<Lang, Content> = {
  lt: {
    nav: { work: "Paslaugos", process: "Kaip dirbame", about: "Technologijos", contact: "Kontaktai", cta: "Pakalbėkime" },
    hero: {
      titleA: "Kuriame ir prižiūrime",
      titleB: "programinę įrangą verslui.",
      lead: "DDTech — senior lygio inžinierių komanda, turinti daugiau nei 8 metų patirtį IT srityje. Kuriame naujas sistemas, atnaujiname senas, prižiūrime infrastruktūrą ir pasirūpiname, kad viskas veiktų greitai bei saugiai.",
      ctaPrimary: "Aptarkime projektą",
      ctaSecondary: "Mūsų paslaugos",
      doing: "Sistemos · Automatizavimas · Klaidų šalinimas · Našumas · Sauga · Infrastruktūra · Integracijos",
    },
    servicesSection: {
      title: "Ką darome",
      lead: "Imamės tiek viso projekto, tiek vienos konkrečios problemos — kaip jums patogiau.",
    },
    services: [
      { id: "systems", title: "Sistemų kūrimas", blurb: "Interneto platformos, vidinės sistemos ir API — nuo idėjos iki veikiančio produkto." },
      { id: "process", title: "Procesų automatizavimas", blurb: "Pasikartojančias rankines užduotis automatizuojame, kad jų nebereikėtų atlikti ranka." },
      { id: "debug", title: "Klaidų šalinimas", blurb: "Nustatome tikrąją gedimo priežastį ir ją pašaliname — net ir sename, apleistame kode." },
      { id: "performance", title: "Našumo gerinimas", blurb: "Pagreitiname lėtas sistemas: optimizuojame duomenų bazes, užklausas ir architektūrą." },
      { id: "security", title: "Kibernetinė apsauga", blurb: "Saugumo auditas, spragų šalinimas ir stebėsena, kad jūsų duomenys būtų apsaugoti." },
      { id: "infra", title: "Infrastruktūra ir serveriai", blurb: "Serverių paruošimas, talpinimas ir priežiūra, kad sistemos veiktų be pertrūkių." },
      { id: "devops", title: "DevOps ir diegimas", blurb: "Automatinis diegimas ir konteinerizacija, kad naujos versijos vartotojus pasiektų sklandžiai." },
      { id: "plugins", title: "Įskiepiai ir integracijos", blurb: "Praplečiame jau naudojamus įrankius ir sujungiame juos su kitomis sistemomis." },
      { id: "audit", title: "Konsultacijos ir auditas", blurb: "Įvertiname jūsų kodą ar architektūrą ir pateikiame aiškias rekomendacijas, ką verta tobulinti." },
    ],
    processSection: {
      title: "Kaip vyksta darbas",
      lead: "Keturi aiškūs etapai. Kiekviename iš jų žinote, kas vyksta ir ką gausite.",
    },
    steps: [
      { title: "Pokalbis", body: "Išklausome, ko jums reikia, užduodame klausimus ir atvirai pasakome, ar galime padėti." },
      { title: "Sąmata", body: "Parengiame aiškią darbų apimtį, kainą ir terminą. Sprendimą priimate neskubėdami." },
      { title: "Darbas", body: "Dirbame mažais etapais ir rezultatą rodome kas savaitę, o ne tik pabaigoje." },
      { title: "Priežiūra", body: "Paleidžiame sistemą, stebime jos veikimą ir liekame pasiekiami, jei ko nors prireiktų." },
    ],
    principlesSection: {
      title: "Kaip dirbame",
      lead: "Keli dalykai, dėl kurių bendradarbiauti su mumis paprasta.",
    },
    principles: [
      { title: "Pradedame nuo pokalbio", body: "Pirmiausia įsigiliname į problemą ir atvirai pasakome, ar ją apskritai verta spręsti programavimu." },
      { title: "Aiški kaina ir terminai", body: "Sąmatą pateikiame iš anksto — jokių netikėtumų galutinėje sąskaitoje." },
      { title: "Aiškus bendravimas", body: "Sudėtingus techninius dalykus paaiškiname paprastai ir suprantamai." },
      { title: "Nepaliekame po paleidimo", body: "Sistema turi veikti ir po metų, todėl liekame pasiekiami ir vėliau." },
    ],
    stackSection: {
      title: "Su kuo dirbame",
      lead: "Dirbame su beveik visomis pagrindinėmis programavimo kalbomis ir infrastruktūra. Renkamės technologijas, kurias galėsite patikimai palaikyti ir po kelerių metų.",
      note: "Nematote savo technologijos? Parašykite — greičiausiai jau esame su ja dirbę.",
    },
    contact: {
      title: "Pakalbėkime",
      lead: "Trumpai aprašykite projektą ar problemą. Atsakysime per vieną darbo dieną ir atvirai pasakysime, ar galime padėti.",
      emailLabel: "Arba rašykite tiesiogiai",
      email: "info@ddtech.lt",
      cta: "Siųsti žinutę",
      nameLabel: "Vardas",
      emailField: "El. paštas",
      msgLabel: "Žinutė",
      nameph: "Jūsų vardas",
      emailph: "vardas@imone.lt",
      msgph: "Keli sakiniai apie jūsų projektą ar problemą",
      note: "Atsakysime per vieną darbo dieną.",
      sent: "Ačiū! Atsidarė jūsų el. pašto programa su paruošta žinute. Atsakysime per vieną darbo dieną.",
    },
    footer: { line: "Programavimo studija.", rights: "Visos teisės saugomos." },
  },

  en: {
    nav: { work: "Services", process: "How we work", about: "Technology", contact: "Contact", cta: "Let's talk" },
    hero: {
      titleA: "We build and maintain",
      titleB: "software for businesses.",
      lead: "DDTech is a team of senior-level engineers with over 8 years of experience in IT. We build new systems, modernise old ones, look after infrastructure and make sure everything runs fast and securely.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Our services",
      doing: "Systems · Automation · Bug fixing · Performance · Security · Infrastructure · Integrations",
    },
    servicesSection: {
      title: "What we do",
      lead: "We take on a whole project or one specific problem — whatever suits you.",
    },
    services: [
      { id: "systems", title: "Custom systems", blurb: "Web platforms, internal tools and APIs — from idea to a working product." },
      { id: "process", title: "Process automation", blurb: "We move manual, repetitive work into code that does it for you." },
      { id: "debug", title: "Debugging & fixes", blurb: "We pinpoint the real cause of a failure and fix it — even in old, neglected code." },
      { id: "performance", title: "Performance", blurb: "We make slow systems fast — optimising databases, queries and architecture." },
      { id: "security", title: "Cybersecurity", blurb: "Security audits, closing vulnerabilities and monitoring, so your data stays protected." },
      { id: "infra", title: "Infrastructure & servers", blurb: "Server setup, hosting and upkeep so your systems keep running without downtime." },
      { id: "devops", title: "DevOps & deployment", blurb: "Automated deployment and containerisation, so new versions reach users smoothly." },
      { id: "plugins", title: "Plugins & integrations", blurb: "We extend the tools you already use and connect them to your other systems." },
      { id: "audit", title: "Consulting & audits", blurb: "We review your code or architecture and give clear recommendations on what to improve." },
    ],
    processSection: {
      title: "How the work goes",
      lead: "Four clear steps. At every one you know what's happening and what you get.",
    },
    steps: [
      { title: "Conversation", body: "You tell us what you need. We ask questions and say honestly whether we can help." },
      { title: "Estimate", body: "We lay out scope, price and timeline. You decide without being rushed." },
      { title: "Build", body: "We work in small steps and show results every week, not only at the end." },
      { title: "Maintain", body: "We launch, keep watch and stay reachable if anything comes up." },
    ],
    principlesSection: {
      title: "How we work",
      lead: "A few things that make us easy to work with.",
    },
    principles: [
      { title: "We start with a conversation", body: "First we understand the problem and tell you honestly whether code is even the right fix." },
      { title: "Clear price and timeline", body: "You get an estimate up front. No surprises on the final invoice." },
      { title: "Clear communication", body: "We explain complex technical things simply and clearly." },
      { title: "We don't vanish after launch", body: "It has to still work a year later, so we stay close." },
    ],
    stackSection: {
      title: "What we work with",
      lead: "We code in nearly every major language and run the infrastructure too — we pick what you'll still be able to maintain years from now.",
      note: "Don't see your stack? Reach out — chances are we've already worked with it.",
    },
    contact: {
      title: "Let's talk",
      lead: "Send a short note about your project or problem. We reply within one business day and tell you honestly if we can help.",
      emailLabel: "Or email us directly",
      email: "info@ddtech.lt",
      cta: "Send message",
      nameLabel: "Name",
      emailField: "Email",
      msgLabel: "Message",
      nameph: "Your name",
      emailph: "name@company.com",
      msgph: "A few sentences about the project or problem",
      note: "We reply within 1 business day.",
      sent: "Thanks — your email app just opened. We'll reply within 1 business day.",
    },
    footer: { line: "Software engineering studio.", rights: "All rights reserved." },
  },
};

export const TECH = [
  "TypeScript", "JavaScript", "Python", "Java", "C#", "C++", "C",
  "Go", "Rust", "PHP", "Kotlin", "Swift", "Ruby", "Assembly", "SQL",
  "React", "Next.js", "Node.js", ".NET", "Laravel",
  "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Linux", "Nginx", "Terraform",
];

type I18n = { lang: Lang; setLang: (l: Lang) => void; t: Content };

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof localStorage !== "undefined" ? localStorage.getItem("ddtech-lang") : null;
    if (saved === "lt" || saved === "en") return saved;
    return "lt";
  });

  useEffect(() => {
    try {
      localStorage.setItem("ddtech-lang", lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18n>(() => ({ lang, setLang, t: CONTENT[lang] }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
