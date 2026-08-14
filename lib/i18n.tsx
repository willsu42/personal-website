"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

type Dict = Record<string, string>;

const T: Record<Lang, Dict> = {
  en: {
    "brand": "YU-CHEN SU<br/>  Will<br/>",
    "nav.about": "about", "nav.education": "education", "nav.skills": "skills", "nav.experience": "experience", "nav.portfolio": "portfolio", "nav.contact": "contact",
    "hero.left.eyebrow": "Builder mode", "hero.left.title": "Engineer",
    "hero.left.sub": "I build AI systems — multi-agent workflows, RAG, MCP.",
    "hero.left.cta": "See AI work",
    "hero.left.corner1": "01 — Engineer", "hero.left.corner2": "$ whoami → AI engineer",
    "hero.right.eyebrow": "Leadership mode",
    "hero.right.title": "Tech <span class=\"accent\" style=\"font-family: sans-serif\">&amp;</span> Leadership",
    "hero.right.sub": "I've led security and systems teams — 9 people, 30 departments.",
    "hero.right.cta": "See leadership work",
    "hero.right.corner1": "02 — Leadership", "hero.right.corner2": "— Systems → Impact",
    "photo.tag": "Yu-Chen Su · Will",
    "work.label": "01 — Featured Work", "work.title": "Selected <em>projects</em>, two ways.",
    "work.meta": "Updated · 2026<br/>03 of 03 shown",
    "tag.coder": "[ Engineering ]", "tag.pm": "[ Leadership ]",
    "work.p1.year": "2025", "work.p1.title": "Multi-Agent LLM Workflows & Deepfake Detection",
    "work.p1.body": "Built and evaluated multi-agent LLM workflows (AutoGen, LangGraph, n8n) and a deepfake detection platform using GitHub Copilot CLI as an agent harness. Added RAG and MCP integrations to cut hallucination and extend agent tool use, plus multimodal image/video analysis.",
    "work.p2.year": "2025", "work.p2.title": "Nike AI Strategy & Digital Transformation Roadmap",
    "work.p2.body": "Project Manager for a graduate case-study team building an AI strategy roadmap for Nike — scoped the engagement, designed business processes, ran competitive analysis and a red-team risk review, and delivered go-to-market recommendations.",
    "work.p3.year": "2025", "work.p3.title": "HCI Research — Educational Board Game for Language Learning",
    "work.p3.body": "Research assistant under Dr. Jessie Chin at UIUC. Designed evaluation metrics for player comprehension and built a LangChain simulated-gameplay testing framework to validate AI-agent behavior before real-player deployment.",
    "skills.label": "04 — Capabilities", "skills.title": "Two stacks, <em>one engineer.</em>",
    "skills.meta": "Languages, AI/ML, infra & certs", "skills.tech": "Technical", "skills.lead": "Infra & Certifications",
    "exp.label": "03 — Experience", "exp.title": "Security and systems, <em>before AI.</em>",
    "exp.meta": "2021 — 2023<br/>2 roles · Taipei",
    "exp.r1.loc": "Taipei", "exp.r1.title": "Cybersecurity Professional Specialist",
    "exp.r1.body": "Supervised 3 cybersecurity companies and a 9-person on-site team for the Bureau of Information Technology. Resolved cybersecurity issues across 30 departments and 110 offices, and managed asset/vulnerability-management systems covering 20,000 PCs and servers. Deployed cloud-integrated APIs, firewalls, DNS, TCP/IP network security, and SSL/TLS certs.",
    "exp.r2.loc": "Taipei", "exp.r2.title": "IT Engineer",
    "exp.r2.body": "Orchestrated large-scale EDI (WebMethods) integrations with 7 global partners including Amazon, Intel, and Dell — including a 6-month Intel project building 60 tailored C#/.NET programs. Built Oracle ERP and SQL systems handling 20,000 manufacturing records/day. Replaced paid file-transfer tooling with open-source C#/C++ tools, saving $10K/yr and lifting efficiency 30%.",
    "edu.label": "02 — Education", "edu.title": "From <em>information science</em> to AI engineering.",
    "edu.meta": "2016 — 2026<br/>2 degrees",
    "edu.r1.title": "M.S. in Information Management",
    "edu.r1.body": "Generative AI (IS492): built/evaluated multi-agent LLM workflows and a deepfake detection platform, with RAG and MCP integrations. Distributed Systems (CS425): consensus-based replication and distributed stream processing. Information Consulting (IS534): PM for an AI strategy case study for Nike.",
    "edu.r2.title": "B.S. in Information Science",
    "edu.r2.body": "Capstone: mobile app (Java/Android Studio + Swift/iOS) helping novice investors practice investment strategies. Coursework: algorithms, data structures, calculus, discrete math & graph theory, linear algebra, probability & statistics.",
    "contact.big": "Open to <em>AI engineering</em> roles.",
    "contact.sub": "Graduating May 2026 from UIUC. Open to AI/ML engineering roles and conversations on multi-agent systems, RAG, and applied AI. Fastest reply via email.",
    "contact.foot1": "© 2026 · Yu-Chen (Will) Su", "contact.foot2": "Champaign, IL"
  },
  zh: {
    "brand": "蘇友辰<br/>  Will Su<br/>",
    "nav.about": "關於", "nav.education": "學歷", "nav.skills": "技能", "nav.experience": "經歷", "nav.portfolio": "作品", "nav.contact": "聯絡",
    "hero.left.eyebrow": "建構者模式", "hero.left.title": "工程師",
    "hero.left.sub": "我打造 AI 系統 —— 多代理工作流程、RAG、MCP。",
    "hero.left.cta": "查看 AI 作品",
    "hero.left.corner1": "01 — 工程師", "hero.left.corner2": "$ whoami → AI 工程師",
    "hero.right.eyebrow": "領導模式",
    "hero.right.title": "技術 <span class=\"accent\" style=\"font-family: sans-serif\">&amp;</span> 領導力",
    "hero.right.sub": "我曾帶領資安與系統團隊 —— 9 人團隊,橫跨 30 個機關。",
    "hero.right.cta": "查看領導經歷",
    "hero.right.corner1": "02 — 領導力", "hero.right.corner2": "— 系統 → 影響",
    "photo.tag": "蘇友辰· Will Su",
    "work.label": "01 — 精選作品", "work.title": "兩條路徑,<em>同一份</em>用心。",
    "work.meta": "更新於 · 2026<br/>已展示 03 / 03",
    "tag.coder": "[ 工程 ]", "tag.pm": "[ 領導力 ]",
    "work.p1.year": "2025", "work.p1.title": "多代理 LLM 工作流程與深偽偵測平台",
    "work.p1.body": "建構並評估多代理 LLM 工作流程(AutoGen、LangGraph、n8n),並以 GitHub Copilot CLI 作為 Agent 執行環境打造深偽偵測平台。導入 RAG 與 MCP 整合以降低幻覺、擴充 Agent 工具使用能力,並結合多模態影像/影片分析。",
    "work.p2.year": "2025", "work.p2.title": "Nike AI 策略與數位轉型藍圖",
    "work.p2.body": "擔任研究所案例研究團隊的專案經理,為 Nike 打造 AI 策略藍圖 —— 界定專案範圍、設計商業流程、執行競爭分析與紅隊風險審查,並提出上市建議。",
    "work.p3.year": "2025", "work.p3.title": "人機互動研究 —— 語言學習教育桌遊",
    "work.p3.body": "於 UIUC 擔任 Dr. Jessie Chin 指導下的研究助理。設計玩家理解與學習成果的評估指標,並以 LangChain 建構模擬遊戲測試框架,在真人測試前驗證 AI Agent 行為。",
    "skills.label": "04 — 能力", "skills.title": "兩套技術堆疊,<em>同一位工程師。</em>",
    "skills.meta": "程式語言、AI/ML、基礎架構與證照", "skills.tech": "技術能力", "skills.lead": "基礎架構與證照",
    "exp.label": "03 — 經歷", "exp.title": "在 AI 之前,<em>先是資安與系統。</em>",
    "exp.meta": "2021 — 2023<br/>2 段經歷 · 台北",
    "exp.r1.loc": "台北", "exp.r1.title": "資訊安全專業技師",
    "exp.r1.body": "督導 3 家與資訊局合作的資安廠商,並帶領 9 人現場團隊。處理橫跨 30 個機關、110 個辦公室的資安議題,管理涵蓋 2 萬台電腦與伺服器的資產與弱點管理系統。部署雲端整合 API、防火牆、DNS、TCP/IP 網路安全與 SSL/TLS 憑證。",
    "exp.r2.loc": "台北", "exp.r2.title": "資訊工程師",
    "exp.r2.body": "主導與 Amazon、Intel、Dell 等 7 家全球夥伴的大型 EDI(WebMethods)整合,包含一項為期 6 個月、以 C#/.NET 開發 60 支客製化程式的 Intel 專案。建置 Oracle ERP 與 SQL 系統,每日處理 2 萬筆製造紀錄。以開源 C#/C++ 工具取代付費檔案傳輸系統,每年節省 1 萬美元、效率提升 30%。",
    "edu.label": "02 — 學歷", "edu.title": "從<em>資訊科學</em>到 AI 工程。",
    "edu.meta": "2016 — 2026<br/>2 個學位",
    "edu.r1.title": "資訊管理碩士",
    "edu.r1.body": "生成式 AI(IS492):建構並評估多代理 LLM 工作流程與深偽偵測平台,並整合 RAG 與 MCP。分散式系統(CS425):基於共識的複製與分散式串流處理。資訊顧問(IS534):擔任 Nike AI 策略案例研究專案經理。",
    "edu.r2.title": "資訊科學學士",
    "edu.r2.body": "畢業專題:開發協助新手投資人練習投資策略的行動應用程式(Java/Android Studio + Swift/iOS)。修習課程:演算法、資料結構、微積分、離散數學與圖論、線性代數、機率與統計。",
    "contact.big": "開放<em>AI 工程</em>職缺機會。",
    "contact.sub": "2026 年 5 月自 UIUC 畢業。開放 AI/ML 工程職缺,也歡迎交流多代理系統、RAG 與應用 AI 相關話題。電子郵件回覆最快。",
    "contact.foot1": "© 2026 · 蘇友辰(Will Su)", "contact.foot2": "Champaign, IL"
  }
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("site.lang") as Lang | null;
      if (stored === "en" || stored === "zh") setLangState(stored);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("site.lang", l); } catch {}
  }, []);

  const t = useCallback((key: string) => T[lang][key] ?? T.en[key] ?? key, [lang]);

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function THtml({ k, as: Tag = "span", className }: { k: string; as?: keyof React.JSX.IntrinsicElements; className?: string }) {
  const { t } = useI18n();
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: t(k) }} />;
}

export function TText({ k, as: Tag = "span", className }: { k: string; as?: keyof React.JSX.IntrinsicElements; className?: string }) {
  const { t } = useI18n();
  return <Tag className={className}>{t(k)}</Tag>;
}
