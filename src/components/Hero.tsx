import { useI18n } from "../i18n";
import { ArrowRight } from "./icons";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <header id="top" className="hero">
      <div className="container hero-in">
        <h1>
          {h.titleA} <span className="dim">{h.titleB}</span>
        </h1>
        <p className="hero-lead">{h.lead}</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            {h.ctaPrimary} <ArrowRight />
          </a>
          <a href="#services" className="btn btn-ghost">{h.ctaSecondary}</a>
        </div>
        <p className="hero-doing">{h.doing}</p>
      </div>
    </header>
  );
}
