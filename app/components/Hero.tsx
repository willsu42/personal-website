"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { heroLeftChips, heroRightChips } from "@/lib/content";

export function Hero() {
  const { t } = useI18n();
  const [side, setSide] = useState<"left" | "right" | null>(null);

  const onAnchorClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const heroClass = `hero${side === "left" ? " left-active" : side === "right" ? " right-active" : ""}`;

  return (
    <header className={heroClass} id="hero" onMouseLeave={() => setSide(null)}>
      <span id="about" className="anchor" />
      <div className="seam" />

      <div
        className="half left"
        data-side="left"
        onMouseEnter={() => setSide("left")}
        onFocus={() => setSide("left")}
        tabIndex={0}
      >
        <div className="corner tl">{t("hero.left.corner1")}</div>
        <div className="corner bl">{t("hero.left.corner2")}</div>

        <div className="half-inner">
          <div className="eyebrow"><span className="num">01 / 02</span><span>{t("hero.left.eyebrow")}</span></div>
          <h1 className="role">
            <span className="ang">&lt;</span><span className="word">{t("hero.left.title")}</span><span className="ang">/&gt;</span>
          </h1>
          <p className="role-sub">{t("hero.left.sub")}</p>
          <div className="role-meta">
            {heroLeftChips.map((c) => <span key={c} className="chip">{c}</span>)}
          </div>
          <a className="role-cta" href="#work" onClick={(e) => onAnchorClick(e, "#work")}>
            <span>{t("hero.left.cta")}</span> <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div
        className="half right"
        data-side="right"
        onMouseEnter={() => setSide("right")}
        onFocus={() => setSide("right")}
        tabIndex={0}
      >
        <div className="corner tr">{t("hero.right.corner1")}</div>
        <div className="corner br">{t("hero.right.corner2")}</div>

        <div className="half-inner">
          <div className="eyebrow"><span className="num">02 / 02</span><span>{t("hero.right.eyebrow")}</span></div>
          <h1 className="role" dangerouslySetInnerHTML={{ __html: t("hero.right.title") }} />
          <p className="role-sub">{t("hero.right.sub")}</p>
          <div className="role-meta">
            {heroRightChips.map((c) => <span key={c} className="chip">{c}</span>)}
          </div>
          <a className="role-cta" href="#work" onClick={(e) => onAnchorClick(e, "#work")}>
            <span>{t("hero.right.cta")}</span> <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="portrait" aria-hidden>
        <div className="ring outer" />
        <div className="ring" />
        <div className="photo">
          <Image src="/photo.png" alt="Yu-Chen Su" fill sizes="280px" style={{ objectFit: "cover" }} priority />
        </div>
        <div className="name-tag">{t("photo.tag")}</div>
      </div>
    </header>
  );
}
