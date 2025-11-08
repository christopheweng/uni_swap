import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY?.trim();
    if (!apiKey) {
      // 在 production 環境避免洩漏過多設定資訊
      const isProd = process.env.NODE_ENV === 'production';
      return NextResponse.json(
        { error: isProd ? '伺服器設定錯誤' : 'Server missing OPENAI_API_KEY' },
        { status: 500 }
      );
    }

    const { text, focus }: { text?: string; focus?: string[] } = await req.json();
    if (!text || !text.trim()) {
      return NextResponse.json({ error: '請提供自傳內容' }, { status: 400 });
    }

    const focusJoined = (focus && focus.length ? focus.join('、') : '全面');

    const system =
      '你是一名台灣大學轉學審查委員，擅長針對自傳草稿提供具體、可操作且可量化的改善建議，語氣專業但友善。';

    const user = `審查重點：${focusJoined}\n\n請依序輸出：\n1) 3-5 點關鍵問題摘要\n2) 段落級具體修改建議（指出問題與改善方向）\n3) 可量化與證據補強清單（用項目列出）\n4) 與申請系所的匹配度強化建議\n5) 以精簡有力的語氣，提供一版修訂後的段落示範（可直接使用）\n\n自傳草稿如下：\n\n\u0060\u0060\u0060\n${text}\n\u0060\u0060\u0060`;

    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.3,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
      }),
    });

    if (!resp.ok) {
      const isProd = process.env.NODE_ENV === 'production';
      let bodyText = '';
      try {
        bodyText = await resp.text();
      } catch {
        bodyText = '';
      }
      let parsedMsg: string | undefined;
      try {
        const parsed = JSON.parse(bodyText);
        parsedMsg = parsed?.error?.message || parsed?.message;
      } catch {}

      return NextResponse.json(
        {
          error: 'OpenAI API 錯誤',
          upstreamStatus: resp.status,
          ...(isProd ? {} : { detail: parsedMsg || bodyText || 'unknown error' }),
        },
        { status: 502 }
      );
    }

    const data = await resp.json();
    const content = data?.choices?.[0]?.message?.content ?? '';
    return NextResponse.json({ content });
  } catch (err: any) {
    const isProd = process.env.NODE_ENV === 'production';
    return NextResponse.json(
      { error: '伺服器錯誤', ...(isProd ? {} : { detail: String(err?.message ?? err) }) },
      { status: 500 }
    );
  }
}
