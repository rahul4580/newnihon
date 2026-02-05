import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'Missing OPENROUTER_API_KEY. Add it to polfolioTimes/.env.local (OPENROUTER_API_KEY=...) or set it in your deployment environment variables, then restart the server.',
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const messages = Array.isArray(body?.messages) ? body.messages : [];

    if (messages.length === 0) {
      return NextResponse.json({ error: 'Missing messages' }, { status: 400 });
    }

    const model = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.OPENROUTER_REFERER || 'http://localhost:3000',
        'X-Title': process.env.OPENROUTER_APP_NAME || 'Nihon Bot',
      },
      body: JSON.stringify({
        model,
        messages,
        temperature: 0.6,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data?.error?.message || 'OpenRouter request failed' },
        { status: res.status }
      );
    }

    const text = data?.choices?.[0]?.message?.content;
    if (typeof text !== 'string') {
      return NextResponse.json({ error: 'Invalid response from OpenRouter' }, { status: 502 });
    }

    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
