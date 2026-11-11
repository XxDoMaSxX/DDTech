import { I18nProvider } from "./i18n";
import { useScrollReveal } from "./hooks";
import Intro from "./components/Intro";
import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Principles from "./components/Principles";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useScrollReveal();
  return (
    <I18nProvider>
      <Intro />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Principles />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
