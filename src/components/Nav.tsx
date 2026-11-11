import { useState } from "react";
import { useI18n } from "../i18n";
import { useScrolled } from "../hooks";
import Logo from "./Logo";

export default function Nav() {
  const { t, lang, setLang } = useI18n();
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close} aria-label="DDTech">
          <Logo />
          DDTech
        </a>

        <div className="nav-links">
          <a href="#services" onClick={close}>{t.nav.work}</a>
          <a href="#process" onClick={close}>{t.nav.process}</a>
          <a href="#stack" onClick={close}>{t.nav.about}</a>
          <a href="#contact" onClick={close}>{t.nav.contact}</a>
        </div>

        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            <button
              className={lang === "lt" ? "active" : ""}
              onClick={() => setLang("lt")}
              aria-pressed={lang === "lt"}
            >
              LT
            </button>
            <span>/</span>
            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
          <a href="#contact" className="btn btn-primary nav-cta">{t.nav.cta}</a>
          <button
            className="burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
