import { useI18n, TECH } from "../i18n";

export default function Stack() {
  const { t } = useI18n();
  return (
    <section id="stack" className="section">
      <div className="container stack">
        <div>
          <h2 className="section-title">{t.stackSection.title}</h2>
          <p className="section-lead">{t.stackSection.lead}</p>
          <p className="stack-note">{t.stackSection.note}</p>
        </div>
        <div className="chips">
          {TECH.map((tech) => (
            <span className="chip" key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
