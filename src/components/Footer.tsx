import { useI18n } from "../i18n";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          DDTech
        </div>
        <p>© {year} DDTech. {t.footer.line} {t.footer.rights}</p>
      </div>
    </footer>
  );
}
