"use client";

import { useMemo, useState } from "react";
import type { Exam } from "../../data/exams";
import { classifyUniversity } from "../../data/universityTags";

type Props = {
  data: Exam[];
};

export default function ExamTable({ data }: Props) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<string[]>([]); // '國立' | '私立' | '科技大學'

  const toggle = (key: string) => {
    setFilters((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const filtered = useMemo(() => {
    // 排 115 簡章優先
    const sorted = [...data].sort((a, b) => {
      const a115 = a.brochure.includes("115");
      const b115 = b.brochure.includes("115");
      if (a115 === b115) return 0;
      return a115 ? -1 : 1;
    });

    const q = query.trim();
    const hasFilter = filters.length > 0;

    return sorted.filter((item) => {
      // 關鍵字：學校名稱包含
      if (q && !item.university.includes(q)) return false;

      if (!hasFilter) return true;

      const tags = classifyUniversity(item.university);
      // 勾選任一條件即可通過（OR）
      let pass = false;
      if (filters.includes("國立") && tags.national) pass = true;
      if (filters.includes("私立") && tags.private) pass = true;
      if (filters.includes("科技大學") && tags.tech) pass = true;
      return pass;
    });
  }, [data, query, filters]);

  const displayNote = (note?: string) => {
    if (!note) return "";
    return /https?:\/\//.test(note) ? note : "";
  };

  return (
    <section className="space-y-3">
      {/* 搜尋與過濾 */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜尋學校名稱…"
          className="w-full md:w-1/2 px-3 py-2 rounded border text-sm bg-[var(--panel-bg)] border-[var(--panel-border)]"
        />
        <div className="flex flex-wrap gap-2 text-xs">
          {["國立", "私立", "科技大學"].map((k) => (
            <button
              type="button"
              key={k}
              onClick={() => toggle(k)}
              className={`px-2 py-1 rounded border transition ${
                filters.includes(k)
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-[var(--panel-bg)] text-[var(--foreground)] border-[var(--panel-border)]"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      {/* 表格 */}
      <div className="shadow-sm rounded-lg overflow-hidden border bg-[var(--panel-bg)] border-[var(--panel-border)]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[var(--muted-bg)]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">學校</th>
                <th className="px-4 py-3 text-left font-semibold">報名</th>
                <th className="px-4 py-3 text-left font-semibold">考試</th>
                <th className="px-4 py-3 text-left font-semibold">放榜日期</th>
                <th className="px-4 py-3 text-left font-semibold">寒轉簡章</th>
                <th className="px-4 py-3 text-left font-semibold">備註</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => (
                <tr
                  key={`${item.university}-${idx}`}
                  className={idx % 2 === 0 ? "bg-[var(--panel-bg)]" : "bg-[var(--muted-bg)]"}
                >
                  {/* 學校 */}
                  <td className="px-4 py-3 align-top">{item.university}</td>

                  {/* 報名 */}
                  <td className="px-4 py-3 align-top whitespace-nowrap">{item.apply}</td>

                  {/* 考試方式／日期 */}
                  <td className="px-4 py-3 align-top">{item.exam}</td>

                  {/* 放榜日期 */}
                  <td className="px-4 py-3 align-top whitespace-nowrap">{item.result}</td>

                  {/* 簡章：有網址就顯示可點連結，沒有就純文字 */}
                  <td className="px-4 py-3 align-top">
                    {item.brochureUrl ? (
                      <a
                        href={item.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-[var(--link)]"
                      >
                        {item.brochure}
                      </a>
                    ) : (
                      item.brochure
                    )}
                  </td>

                  {/* 備註：若無連結則不顯示 */}
                  <td className="px-4 py-3 align-top">{displayNote(item.note)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
