"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { social } from "@/lib/content";
import { GitHubIcon, LinkedInIcon } from "./icons";

const TABS: { id: string; sectionId: string; key: string }[] = [
  { id: "about", sectionId: "hero", key: "nav.about" },
  { id: "education", sectionId: "education", key: "nav.education" },
  { id: "portfolio", sectionId: "work", key: "nav.portfolio" },
  { id: "experience", sectionId: "experience", key: "nav.experience" },
  { id: "skills", sectionId: "skills", key: "nav.skills" },
  { id: "contact", sectionId: "contact", key: "nav.contact" },
];

export function Nav() {
  const { lang, setLang, t } = useI18n();
  const [active, setActive] = useState("about");

  useEffect(() => {
    const update = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = TABS[0];
      for (const tab of TABS) {
        const el = document.getElementById(tab.sectionId);
        if (el && el.offsetTop <= y) current = tab;
      }
      setActive(current.id);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const onAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.length > 1 && href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="nav">
      <div className="brand" dangerouslySetInnerHTML={{ __html: t("brand") }} />
      <div className="links">
        {TABS.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className={active === tab.id ? "active" : undefined}
            onClick={(e) => onAnchorClick(e, `#${tab.id}`)}
          >
            {t(tab.key)}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <a className="social" href={social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a className="social" href={social.github} target="_blank" rel="noopener" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <span className="lang-switch" role="group" aria-label="Language">
          <button type="button" className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
          <span className="lang-sep">/</span>
          <button type="button" className={`lang-btn ${lang === "zh" ? "active" : ""}`} onClick={() => setLang("zh")}>繁體中文</button>
        </span>
      </div>
    </nav>
  );
}
