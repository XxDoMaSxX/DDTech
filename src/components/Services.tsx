import { useI18n } from "../i18n";
import { ServiceIcon } from "./icons";

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{t.servicesSection.title}</h2>
          <p className="section-lead">{t.servicesSection.lead}</p>
        </div>
        <div className="svc-grid">
          {t.services.map((s) => (
            <article className="svc" key={s.id}>
              <div className="svc-ico">
                <ServiceIcon id={s.id} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
