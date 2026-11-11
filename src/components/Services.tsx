import { useI18n } from "../i18n";
import { ServiceIcon } from "./icons";

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2 className="section-title">{t.servicesSection.title}</h2>
          <p className="section-lead">{t.servicesSection.lead}</p>
        </div>
        <div className="svc-grid">
          {t.services.map((s, i) => (
            <article
              className="svc reveal"
              key={s.id}
              style={{ animationDelay: `${(i % 3) * 90}ms` }}
            >
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
