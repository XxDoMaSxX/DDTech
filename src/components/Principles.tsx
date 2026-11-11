import { useI18n } from "../i18n";

export default function Principles() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t.principlesSection.title}</h2>
          <p className="section-lead">{t.principlesSection.lead}</p>
        </div>
        <div className="principles">
          {t.principles.map((p) => (
            <div className="principle" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
