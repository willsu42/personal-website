export const social = {
  email: "yuchensu24@gmail.com",
  phone: "+1 (217) 200-1698",
  linkedin: "https://linkedin.com/in/yuchen-will-su",
  github: "https://github.com/willsu42",
};

export type Project = {
  kind: "eng" | "pm";
  yearKey: string;
  titleKey: string;
  bodyKey: string;
  tagKey: "tag.coder" | "tag.pm";
  stack: string[];
  ascii?: string;
  badge?: string;
  placeholder: string;
};

export const projects: Project[] = [
  {
    kind: "eng",
    yearKey: "work.p1.year",
    titleKey: "work.p1.title",
    bodyKey: "work.p1.body",
    tagKey: "tag.coder",
    stack: ["AutoGen", "LangGraph", "n8n", "RAG", "MCP", "Multimodal AI"],
    ascii: "┌─ agent ─┐\n│ ▓▓▓░░░░ │\n│ tool use│\n└─────────┘",
    placeholder: "// IS492 · Generative AI",
  },
  {
    kind: "pm",
    yearKey: "work.p2.year",
    titleKey: "work.p2.title",
    bodyKey: "work.p2.body",
    tagKey: "tag.pm",
    stack: ["Business Process Design", "Competitive Analysis", "Risk Review", "GTM Strategy"],
    badge: "PM",
    placeholder: "// IS534 · Information Consulting",
  },
  {
    kind: "eng",
    yearKey: "work.p3.year",
    titleKey: "work.p3.title",
    bodyKey: "work.p3.body",
    tagKey: "tag.coder",
    stack: ["LangChain", "Simulated Gameplay", "Eval Design"],
    ascii: "┌─ sim ────┐\n│  ●─●─●   │\n│  │ ╲ │   │\n│  ●─●─●   │\n└──────────┘",
    placeholder: "// HCI research, UIUC",
  },
];

export type Experience = {
  kind: "eng" | "pm";
  yrKey: string;
  yr?: string;
  locKey: string;
  titleKey: string;
  orgKey?: string;
  org?: string;
  bodyKey: string;
  tags: string[];
};

export const experience: Experience[] = [
  {
    kind: "pm",
    yrKey: "",
    yr: "2022 — 2023",
    locKey: "exp.r1.loc",
    titleKey: "exp.r1.title",
    org: "Taipei City Government",
    bodyKey: "exp.r1.body",
    tags: ["Cybersecurity", "Team Leadership", "Vulnerability Mgmt", "Cloud APIs"],
  },
  {
    kind: "eng",
    yrKey: "",
    yr: "2021 — 2022",
    locKey: "exp.r2.loc",
    titleKey: "exp.r2.title",
    org: "Elitegroup Computer Systems Co., Ltd.",
    bodyKey: "exp.r2.body",
    tags: ["EDI / WebMethods", "C#/.NET", "Oracle ERP", "SQL"],
  },
];

export type Education = {
  yr: string;
  loc: string;
  titleKey: string;
  org: string;
  bodyKey: string;
  tags: string[];
};

export const education: Education[] = [
  {
    yr: "2024 — 2026",
    loc: "Champaign, IL",
    titleKey: "edu.r1.title",
    org: "University of Illinois Urbana-Champaign",
    bodyKey: "edu.r1.body",
    tags: ["Generative AI", "Distributed Systems", "Information Consulting"],
  },
  {
    yr: "2016 — 2020",
    loc: "Taoyuan, Taiwan",
    titleKey: "edu.r2.title",
    org: "National Central University",
    bodyKey: "edu.r2.body",
    tags: ["Algorithms", "Data Structures", "Probability & Statistics"],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const technicalSkillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "C#", "C/C++", "Java", "R", "Swift/iOS", "JavaScript", "React.js", "Node.js"],
  },
  {
    label: "AI / ML",
    items: ["Multi-Agent LLM Systems", "RAG", "MCP", "AI Agentic Workflows", "Machine Learning", "Data Science"],
  },
];

export const infraSkillGroups: SkillGroup[] = [
  {
    label: "Cloud / Infra",
    items: ["AWS", "Azure", "GCP", "Kubernetes", "Distributed Architectures", "SQL / Postgres", "Computer Networking", "SDLC Security", "DevOps", "REST APIs", "Git"],
  },
  {
    label: "Certifications",
    items: ["AWS Certified Solutions Architect – Associate (SAA-C03)"],
  },
];

export const heroLeftChips = ["Python", "Multi-Agent Systems", "RAG", "MCP"];
export const heroRightChips = ["Cybersecurity", "Team Leadership", "EDI Systems", "Cloud Infra"];
