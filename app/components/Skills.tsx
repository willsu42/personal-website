"use client";

import { useI18n } from "@/lib/i18n";
import { infraSkillGroups, technicalSkillGroups, type SkillGroup } from "@/lib/content";

function SkillGroupBlock({ group }: { group: SkillGroup }) {
  return (
    <div className="skill-group">
      <div className="skill-group-label">{group.label}</div>
      <div className="role-meta">
        {group.items.map((item) => <span key={item} className="chip">{item}</span>)}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();
  return (
    <section className="block skills-section" id="skills">
      <div className="section-head">
        <div>
          <div className="label">{t("skills.label")}</div>
          <h2 style={{ color: "#fff" }} dangerouslySetInnerHTML={{ __html: t("skills.title") }} />
        </div>
        <div className="meta">{t("skills.meta")}</div>
      </div>

      <div className="skills">
        <div className="skill-col">
          <h3><span className="num">01</span> <span>{t("skills.tech")}</span></h3>
          {technicalSkillGroups.map((g) => <SkillGroupBlock key={g.label} group={g} />)}
        </div>
        <div className="skill-col pm">
          <h3><span className="num">02</span> <span>{t("skills.lead")}</span></h3>
          {infraSkillGroups.map((g) => <SkillGroupBlock key={g.label} group={g} />)}
        </div>
      </div>
    </section>
  );
}
