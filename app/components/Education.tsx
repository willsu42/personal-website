"use client";

import { useI18n } from "@/lib/i18n";
import { education } from "@/lib/content";

export function Education() {
  const { t } = useI18n();
  return (
    <section className="block" id="education">
      <div className="section-head">
        <div>
          <div className="label">{t("edu.label")}</div>
          <h2 dangerouslySetInnerHTML={{ __html: t("edu.title") }} />
        </div>
        <div className="meta" dangerouslySetInnerHTML={{ __html: t("edu.meta") }} />
      </div>

      <div className="timeline">
        {education.map((row, i) => (
          <div key={i} className="trow eng">
            <div className="when">
              <span className="yr">{row.yr}</span>
              <span>{row.loc}</span>
            </div>
            <div className="dot" />
            <div className="what">
              <h3>{t(row.titleKey)}</h3>
              <p className="org">{row.org}</p>
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
