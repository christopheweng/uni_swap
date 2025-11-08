import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "台灣寒轉考懶人包｜Uni Swap 轉學考資訊站",
  description:
    "快速查詢各大學寒假轉學考簡章、報名與考試時間，自傳撰寫建議與準備方向整理，一站式掌握轉學資訊。",
  verification: {
    google: "gSj0oI09d4hiDUgO1uzeBP5EE9EKNe0lnm6hbSWdJ_g",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <head>
        {/* set initial theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const s = localStorage.getItem('theme'); const d = s ? s === 'dark' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.classList.toggle('dark', d); } catch (_) {} })();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
