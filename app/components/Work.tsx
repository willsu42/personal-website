"use client";

import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/content";

export function Work() {
  const { t } = useI18n();
  return (
    <section className="block" id="work">
      <span id="portfolio" className="anchor" />
      <div className="section-head">
        <div>
          <div className="label">{t("work.label")}</div>
          <h2 dangerouslySetInnerHTML={{ __html: t("work.title") }} />
        </div>
        <div className="meta" dangerouslySetInnerHTML={{ __html: t("work.meta") }} />
      </div>

      <div className="projects">
        {projects.map((p, i) => (
          <article key={i} className={`pcard ${p.kind}`}>
            <div className="thumb">
              <div className="stripes" />
              {p.ascii && <pre className="ascii">{p.ascii}</pre>}
              {p.badge && <div className="badge">{p.badge}</div>}
              <div className="placeholder-tag">{p.placeholder}</div>
            </div>
            <div className="body">
              <div className="tagrow">
                <span className={`ptag ${p.kind}`}>{t(p.tagKey)}</span>
                <span className="year">{p.kind === "eng" && i === 2 ? "2024" : t(p.yearKey)}</span>
              </div>
              <h3>{t(p.titleKey)}</h3>
              <p>{t(p.bodyKey)}</p>
              <div className="stack">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
