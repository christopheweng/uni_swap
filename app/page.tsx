// app/page.tsx
import { exams } from '../data/exams';
import AutobioEditor from './components/AutobioEditor';
import ThemeToggle from './components/ThemeToggle';
import ExamTable from './components/ExamTable';

export default function Home() {
  // 節省伺服器端負擔：排序交給前端元件處理

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* 標題 */}
        <header className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div className="text-center flex-1">
              <h1 className="text-3xl font-bold mb-2">
                台灣各大學寒轉學考簡章與時程彙總
              </h1>
              <p className="text-sm text-[var(--muted-text)]">
                （目前為人工整理，請以各校官方公告為準）
              </p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* 搜尋 + 表格（前端過濾/排序） */}
        <ExamTable data={exams} />

        {/* 底部：建議與自傳編輯器 */}
        <section className="mt-10 space-y-6">
          <div className="rounded-lg shadow-sm border p-4 bg-[var(--panel-bg)] border-[var(--panel-border)]">
            <h2 className="text-lg font-semibold mb-2 text-[var(--guidance-fg)]">自傳與讀書計畫撰寫建議</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[var(--guidance-fg)]">
              <div>
                <h3 className="font-semibold mb-1 text-[var(--guidance-fg)]">自傳建議</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>動機與轉學原因：為何想轉、想學什麼。</li>
                  <li>學習與實作：課堂、專題、競賽或實習成果。</li>
                  <li>能力與證照：課內外技能、工具、語言能力。</li>
                  <li>反思與成長：遇到的挑戰、如何面對與改變。</li>
                  <li>系所連結：申請科系的匹配度與可帶來的貢獻。</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-[var(--guidance-fg)]">讀書計畫建議</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>學習目標：短中期重點與預期成果。</li>
                  <li>課程規劃：基礎補強與專業選修方向。</li>
                  <li>時間安排：學期與每週的大致節奏。</li>
                  <li>補強策略：弱項與資源（書、線上課、實作）。</li>
                  <li>研究/專題：有興趣領域與初步想法。</li>
                </ul>
              </div>
            </div>
            <p className="text-xs mt-3 text-[var(--guidance-fg)]/90">小提醒：內容具體、可量化，並連結到系所培養目標更有說服力。</p>
          </div>

          {/* 自傳草稿 + ChatGPT 審查 */}
          <AutobioEditor />

          <footer className="text-center text-xs mt-4 text-[var(--muted-text)]">
            資料僅供參考，請再次確認各校官網公告。本站不代表任何學校單位。
          </footer>
        </section>
      </div>
    </main>
  );
}
