import { I18nProvider } from "./i18n";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Principles from "./components/Principles";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <I18nProvider>
      <Intro />
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
