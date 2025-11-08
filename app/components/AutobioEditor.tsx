"use client";

import { useMemo, useState } from "react";

export default function AutobioEditor() {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState<string[]>(["結構與邏輯", "說服力與匹配度"]);
  const [copied, setCopied] = useState(false);

  const charCount = text.length;

  const focusJoined = useMemo(() => (focus.length ? focus.join("、") : "全面"), [focus]);

  const prompt = useMemo(() => {
    return `你是一名台灣大學轉學審查委員，請針對以下自傳草稿進行專業審查與重寫建議。\n\n審查重點：${focusJoined}\n\n請依序輸出：\n1) 3-5 點關鍵問題摘要\n2) 段落級具體修改建議（指出問題與改善方向）\n3) 可量化與證據補強清單（用項目列出）\n4) 與申請系所的匹配度強化建議\n5) 以精簡有力的語氣，提供一版修訂後的段落示範（可直接使用）\n\n自傳草稿如下：\n\n\u0060\u0060\u0060\n${text}\n\u0060\u0060\u0060`;
  }, [text, focusJoined]);

  const onCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // no-op
    }
  };

  const onDownload = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "autobiography-draft.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // 站內 GPT 審查暫停使用；改為僅複製提示到 ChatGPT

  const toggleFocus = (key: string) => {
    setFocus((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const items = [
    "結構與邏輯",
    "說服力與匹配度",
    "可量化與證據",
    "文句精煉與錯別字",
    "內容取捨與聚焦",
  ];

  return (
    <div className="rounded-lg shadow-sm border p-4 bg-[var(--panel-bg)] border-[var(--panel-border)]">
      <div className="flex items-center justify-between gap-2 mb-2">
        <h2 className="text-lg font-semibold">自傳草稿（ChatGPT 審查）</h2>
        <span className="text-xs text-[var(--muted-text)]">{charCount} 字</span>
      </div>

      <p className="text-xs mb-3 text-[var(--muted-text)]">
        在下方撰寫或貼上你的自傳草稿；目前站內 GPT 審查暫停，請點「複製 ChatGPT 審查提示」並貼到 ChatGPT 取得建議。
      </p>

      <div className="mb-3">
        <label className="block text-xs font-medium text-[var(--muted-text)] mb-1">
          審查面向（可複選）
        </label>
        <div className="flex flex-wrap gap-2">
          {items.map((k) => (
            <button
              type="button"
              key={k}
              onClick={() => toggleFocus(k)}
              className={`px-2 py-1 rounded border text-xs transition ${focus.includes(k) ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-900" : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700"}`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <textarea
        className="w-full h-48 md:h-64 p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm placeholder-slate-400 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500"
        placeholder={
          "建議包含：轉學動機、相關學習/成果、能力與證照、困難與成長、未來規劃與系所連結。\n\n例：\n我因對資料分析產生興趣，期望轉入XX系……（具體經驗與成果）……未來希望在XX領域深化，並規劃在大三參與XX實驗室……"
        }
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap items-center gap-2 mt-3">
        <button
          type="button"
          onClick={onCopyPrompt}
          className="px-3 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
        >
          複製 ChatGPT 審查提示
        </button>
        <button
          type="button"
          onClick={() => setText("")}
          className="px-3 py-2 rounded bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        >
          清空
        </button>
        <button
          type="button"
          onClick={onDownload}
          className="px-3 py-2 rounded bg-slate-100 text-slate-700 text-sm hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
        >
          下載草稿 .txt
        </button>
        {copied && (
          <span className="text-xs text-green-600">已複製！前往 ChatGPT 貼上即可。</span>
        )}
      </div>

      {/* 站內 GPT 審查暫停：不顯示結果區塊 */}

      <details className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        <summary className="cursor-pointer select-none">查看將送給 ChatGPT 的完整提示</summary>
        <pre className="mt-2 whitespace-pre-wrap bg-slate-50 border border-slate-200 p-2 rounded dark:bg-slate-900 dark:border-slate-700">
{prompt}
        </pre>
      </details>
    </div>
  );
}
