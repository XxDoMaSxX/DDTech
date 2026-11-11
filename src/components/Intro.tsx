import { useEffect, useState } from "react";
import Logo from "./Logo";

/**
 * One-shot intro that plays on every load/refresh: the DDTech monogram draws
 * itself, the wordmark wipes in, then the panel lifts away to reveal the page.
 * Skipped entirely for reduced-motion users.
 */
export default function Intro() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const done = window.setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 2000);
    return () => {
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-inner">
        <Logo className="intro-mark" />
        <span className="intro-word">DDTech</span>
      </div>
    </div>
  );
}
