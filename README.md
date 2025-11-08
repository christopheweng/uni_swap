# 台灣各大學寒轉學考簡章與時程彙總

一個用 Next.js 製作、部署在 Vercel 的小工具網站，整理台灣各大學「寒假轉學考」的：

- 報名期間
- 考試方式 / 日期
- 放榜日期
- 簡章資訊（含 115 簡章連結）
- 備註（面試 / 術科 / 筆試時間等）

方便準備寒轉的學生快速查表比較。

網站連結：<https://uni-swap-sigma.vercel.app>

---

## 功能簡介

- 以表格形式列出多所大學寒轉資訊
- 115 簡章會優先排序，並連到整理頁（或官方簡章）
- 手機 / 桌面皆可瀏覽（用 Tailwind 做簡單 RWD）
- 頁面底部提供 Line / 微信聯絡方式，可做付費諮詢等延伸服務

---

## 技術棧

- **Framework**：Next.js (App Router)
- **UI**：React + Tailwind CSS
- **部署**：Vercel
- **資料來源**：手動整理（`data/exams.ts`），部分簡章連結參考各校官方 / 龍門等整理頁

---

## 專案結構（重點檔案）

```text
app/
  page.tsx         # 首頁：表格 + 底部聯絡資訊
  layout.tsx       # 全站 layout / metadata
  robots.ts        # robots.txt 的設定（允許搜尋引擎索引）
  sitemap.ts       # sitemap.xml 設定，給搜尋引擎用
  components/
    ExamTable.tsx  # （若有拆出）寒轉表格元件
data/
  exams.ts         # 寒轉資料主檔（學校、報名、考試、放榜、簡章、備註）
  universityTags.ts# （選用）學校標籤 / 類別
