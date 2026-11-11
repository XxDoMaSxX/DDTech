import { useI18n, TECH } from "../i18n";

export default function Stack() {
  const { t } = useI18n();
  return (
    <section id="stack" className="section">
      <div className="container stack">
        <div className="reveal">
          <h2 className="section-title">{t.stackSection.title}</h2>
          <p className="section-lead">{t.stackSection.lead}</p>
          <p className="stack-note">{t.stackSection.note}</p>
        </div>
        <div className="chips">
          {TECH.map((tech, i) => (
            <span
              className="chip reveal"
              key={tech}
              style={{ animationDelay: `${Math.min(i, 14) * 35}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
