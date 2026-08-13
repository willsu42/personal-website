import type { Metadata } from "next";
import { Barlow, Fraunces, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yu-Chen Su (Will) — AI Engineer",
  description:
    "Personal portfolio of Yu-Chen Su (Will) — AI Engineer with a background in cybersecurity and enterprise IT, building multi-agent LLM systems, RAG, and MCP integrations.",
  openGraph: {
    title: "Yu-Chen Su (Will) — AI Engineer",
    description:
      "Personal portfolio of Yu-Chen Su (Will) — AI Engineer with a background in cybersecurity and enterprise IT, building multi-agent LLM systems, RAG, and MCP integrations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yu-Chen Su (Will) — AI Engineer",
    description:
      "Personal portfolio of Yu-Chen Su (Will) — AI Engineer, cybersecurity + enterprise IT background.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
    >
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
