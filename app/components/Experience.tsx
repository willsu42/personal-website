"use client";

import { useI18n } from "@/lib/i18n";
import { experience } from "@/lib/content";

export function Experience() {
  const { t } = useI18n();
  return (
    <section className="block" id="experience">
      <div className="section-head">
        <div>
          <div className="label">{t("exp.label")}</div>
          <h2 dangerouslySetInnerHTML={{ __html: t("exp.title") }} />
        </div>
        <div className="meta" dangerouslySetInnerHTML={{ __html: t("exp.meta") }} />
      </div>

      <div className="timeline">
        {experience.map((row, i) => (
          <div key={i} className={`trow ${row.kind}`}>
            <div className="when">
              <span className="yr">{row.yrKey ? t(row.yrKey) : row.yr}</span>
              <span>{t(row.locKey)}</span>
            </div>
            <div className="dot" />
            <div className="what">
              <h3>{t(row.titleKey)}</h3>
              <p className="org">{row.orgKey ? t(row.orgKey) : row.org}</p>
              <p>{t(row.bodyKey)}</p>
              <div className="tagrow">
                {row.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
