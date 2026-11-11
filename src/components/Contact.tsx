import { useState, type FormEvent } from "react";
import { useI18n } from "../i18n";
import { ArrowRight } from "./icons";

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`DDTech — ${name || email}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="contact-left">
          <h2>{c.title}</h2>
          <p>{c.lead}</p>
          <a className="contact-email" href={`mailto:${c.email}`}>
            <small>{c.emailLabel}</small>
            <b>{c.email}</b>
          </a>
        </div>

        <form className="form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="name">{c.nameLabel}</label>
            <input id="name" name="name" type="text" placeholder={c.nameph} required />
          </div>
          <div className="field">
            <label htmlFor="email">{c.emailField}</label>
            <input id="email" name="email" type="email" placeholder={c.emailph} required />
          </div>
          <div className="field">
            <label htmlFor="message">{c.msgLabel}</label>
            <textarea id="message" name="message" rows={4} placeholder={c.msgph} required />
          </div>
          <button type="submit" className="btn btn-primary">
            {c.cta} <ArrowRight />
          </button>
          <p className={`form-note${sent ? " ok" : ""}`}>{sent ? c.sent : c.note}</p>
        </form>
      </div>
    </section>
  );
}
