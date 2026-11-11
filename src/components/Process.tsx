import { useI18n } from "../i18n";

export default function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="section">
      <div className="container process">
        <div>
          <h2 className="section-title">{t.processSection.title}</h2>
          <p className="section-lead">{t.processSection.lead}</p>
        </div>
        <div className="steps">
          {t.steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step-n">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
