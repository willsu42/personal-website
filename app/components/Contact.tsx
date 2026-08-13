"use client";

import { useI18n } from "@/lib/i18n";
import { social } from "@/lib/content";
import { ArrowOutIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./icons";

export function Contact() {
  const { t } = useI18n();
  return (
    <section className="contact" id="contact">
      <div className="glyph">&amp;</div>

      <p className="big" dangerouslySetInnerHTML={{ __html: t("contact.big") }} />
      <p className="sub">{t("contact.sub")}</p>

      <div className="contact-actions">
        <a className="cbtn primary" href={`mailto:${social.email}`}>
          <span className="icon" aria-hidden><MailIcon /></span>
          {social.email}
          <span className="arrow"><ArrowOutIcon /></span>
        </a>
        <a className="cbtn ghost" href={social.linkedin} target="_blank" rel="noopener">
          <span className="icon" aria-hidden><LinkedInIcon /></span>
          LinkedIn
          <span className="arrow"><ArrowOutIcon /></span>
        </a>
        <a className="cbtn ghost" href={social.github} target="_blank" rel="noopener">
          <span className="icon" aria-hidden><GitHubIcon /></span>
          GitHub
          <span className="arrow"><ArrowOutIcon /></span>
        </a>
        <a className="cbtn ghost" href={`tel:${social.phone.replace(/[^+\d]/g, "")}`}>
          <span className="icon" aria-hidden><PhoneIcon /></span>
          {social.phone}
        </a>
      </div>

      <div className="contact-foot">
        <div>{t("contact.foot1")}</div>
        <div>{t("contact.foot2")}</div>
      </div>
    </section>
  );
}
