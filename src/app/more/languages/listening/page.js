'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import { FaChevronLeft, FaPaperPlane, FaRobot } from 'react-icons/fa';

export default function ListeningPage() {
  const [messages, setMessages] = useState([
    {
      id: 'nihon-bot-welcome',
      role: 'assistant',
      content:
        "Hi! I'm Nihon Bot. Tell me your Japanese level (N5–N1) and what you want to practice (listening, shadowing, dictation, vocab, conversation).",
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef(null);

  const systemMessage = useMemo(
    () => ({
      role: 'system',
      content:
        'You are Nihon Bot, a friendly Japanese tutor focused on listening practice. Keep answers concise, provide Japanese + short English explanations, and suggest a quick listening exercise (shadowing lines, minimal pairs, or comprehension questions).',
    }),
    []
  );

  const generateOfflineReply = useMemo(() => {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const detectLevel = (text) => {
      const t = (text || '').toLowerCase();
      if (t.includes('n1')) return 'N1';
      if (t.includes('n2')) return 'N2';
      if (t.includes('n3')) return 'N3';
      if (t.includes('n4')) return 'N4';
      if (t.includes('n5')) return 'N5';
      return null;
    };

    const detectFocus = (text) => {
      const t = (text || '').toLowerCase();
      if (t.includes('dictation') || t.includes('ディクテーション')) return 'dictation';
      if (t.includes('shadow') || t.includes('シャドー')) return 'shadowing';
      if (t.includes('vocab') || t.includes('単語') || t.includes('語彙')) return 'vocab';
      if (t.includes('conversation') || t.includes('会話') || t.includes('speaking')) return 'conversation';
      if (t.includes('keigo') || t.includes('敬語')) return 'keigo';
      if (t.includes('pitch') || t.includes('accent') || t.includes('アクセント')) return 'pronunciation';
      if (t.includes('listening') || t.includes('聞') || t.includes('聴')) return 'listening';
      return 'listening';
    };

    const findLastUser = (msgs) => {
      for (let i = msgs.length - 1; i >= 0; i -= 1) {
        if (msgs[i]?.role === 'user') return msgs[i].content || '';
      }
      return '';
    };

    const getContext = (msgs, currentText) => {
      const combined = `${findLastUser(msgs)}\n${currentText || ''}`;
      const level = detectLevel(combined) || 'N3';
      const focus = detectFocus(combined);
      return { level, focus };
    };

    const bank = {
      N5: {
        shadowing: [
          { jp: 'きょうは いい てんき ですね。', en: "Today's weather is nice, isn't it?" },
          { jp: 'えきまで あるいて いきます。', en: 'I will walk to the station.' },
          { jp: 'あした はちじに おきます。', en: 'I will wake up at 8 tomorrow.' },
        ],
        dictation: [
          { jp: 'わたしは コーヒーが すきです。', en: 'I like coffee.' },
          { jp: 'いま なんじ ですか。', en: 'What time is it now?' },
        ],
        vocab: [
          { jp: '買う（かう）', en: 'to buy' },
          { jp: '行く（いく）', en: 'to go' },
          { jp: '大きい（おおきい）', en: 'big' },
        ],
        conversation: [
          { jp: 'A: しゅみは なんですか。\nB: えいがを みることです。', en: 'Hobby Q&A' },
        ],
      },
      N4: {
        shadowing: [
          { jp: 'さいきん いそがしくて、あまり ねむれません。', en: "Recently I'm busy, so I can't sleep much." },
          { jp: 'ちゅうい して わたって ください。', en: 'Please be careful when crossing.' },
        ],
        dictation: [
          { jp: 'でんしゃが こんで いたので おくれました。', en: 'I was late because the train was crowded.' },
          { jp: 'あめが ふったら、うちに います。', en: "If it rains, I'll stay home." },
        ],
        vocab: [
          { jp: '予定（よてい）', en: 'schedule/plan' },
          { jp: '必要（ひつよう）', en: 'necessary' },
          { jp: '安心（あんしん）', en: 'relief/peace of mind' },
        ],
        conversation: [
          { jp: 'A: どうして おくれたんですか。\nB: でんしゃが とまりました。', en: 'Reason for being late' },
        ],
      },
      N3: {
        shadowing: [
          { jp: '最近は運動不足なので、週末にランニングを始めました。', en: "I've been lacking exercise, so I started running on weekends." },
          { jp: 'もし時間があれば、あとで少し相談してもいいですか。', en: 'If you have time, could we talk later?' },
        ],
        dictation: [
          { jp: '思ったより早く着いたので、駅の近くで休憩しました。', en: 'I arrived earlier than expected and took a break near the station.' },
          { jp: '説明を聞いても、まだよく分からないところがあります。', en: "Even after listening, there are parts I still don't understand." },
        ],
        vocab: [
          { jp: '結果（けっか）', en: 'result' },
          { jp: '確認（かくにん）', en: 'confirmation' },
          { jp: '改善（かいぜん）', en: 'improvement' },
        ],
        conversation: [
          { jp: 'A: その件、どうなりましたか。\nB: 今確認中ですが、あとで連絡します。', en: 'Work-style update' },
        ],
      },
      N2: {
        shadowing: [
          { jp: '結局のところ、優先順位を見直さない限り状況は変わらないと思います。', en: "In the end, unless we rethink priorities, nothing will change." },
          { jp: '念のため申し上げますが、その資料は社外秘です。', en: 'Just to be safe: that document is confidential.' },
        ],
        dictation: [
          { jp: '本件につきましては、関係各所と調整の上、改めてご連絡いたします。', en: 'We will coordinate and contact you again.' },
          { jp: '想定外のトラブルが重なり、対応が後手に回ってしまいました。', en: 'Unexpected troubles piled up and our response lagged.' },
        ],
        vocab: [
          { jp: '見解（けんかい）', en: 'view/opinion' },
          { jp: '妥当（だとう）', en: 'reasonable/appropriate' },
          { jp: '手配（てはい）', en: 'arrangement' },
        ],
        conversation: [
          { jp: 'A: 進捗はいかがでしょうか。\nB: 現時点では順調ですが、念のため確認します。', en: 'Progress update' },
        ],
      },
      N1: {
        shadowing: [
          { jp: '本質的には、短期的な成果よりも持続可能な仕組みづくりが重要です。', en: 'Fundamentally, sustainable systems matter more than short-term results.' },
          { jp: '一見すると単純ですが、利害が複雑に絡み合っているのが実情です。', en: 'It looks simple, but interests are intertwined.' },
        ],
        dictation: [
          { jp: '当事者間の認識の齟齬が原因で、議論が平行線をたどってしまいました。', en: 'Due to a mismatch in understanding, the discussion went nowhere.' },
          { jp: '結論を急ぐあまり、検証が不十分なまま判断してしまうのは危険です。', en: 'Rushing to conclude without verification is risky.' },
        ],
        vocab: [
          { jp: '齟齬（そご）', en: 'discrepancy' },
          { jp: '平行線（へいこうせん）', en: 'stalemate' },
          { jp: '本質（ほんしつ）', en: 'essence' },
        ],
        conversation: [
          { jp: 'A: その判断の根拠は何でしょうか。\nB: 複数の指標を踏まえた上での総合的な判断です。', en: 'Explaining rationale' },
        ],
      },
    };

    const build = ({ level, focus }) => {
      const pack = bank[level] || bank.N3;
      const group = pack[focus] || pack.listening || pack.shadowing;
      const item = pick(group);

      if (focus === 'vocab') {
        const more = pick(pack.vocab);
        const more2 = pick(pack.vocab);
        return [
          `Level: ${level}`,
          `Focus: Vocab for listening` ,
          '',
          `Words:` ,
          `- ${item.jp} — ${item.en}`,
          `- ${more.jp} — ${more.en}`,
          `- ${more2.jp} — ${more2.en}`,
          '',
          `Mini listening drill:` ,
          `1) Read them aloud 3x.` ,
          `2) Make 1 short sentence using each.` ,
          `3) Ask me for a short dialogue using these words.` ,
        ].join('\n');
      }

      if (focus === 'dictation') {
        return [
          `Level: ${level}`,
          `Focus: Dictation` ,
          '',
          `Dictation sentence (listen in your head, then write it):` ,
          `${item.jp}`,
          '',
          `Check (EN): ${item.en}`,
          '',
          `Questions:` ,
          `- What key words did you catch?` ,
          `- Rewrite it using simpler words (if possible).` ,
        ].join('\n');
      }

      if (focus === 'conversation' || focus === 'keigo') {
        const convo = pick(pack.conversation || bank.N3.conversation);
        return [
          `Level: ${level}`,
          `Focus: Conversation listening` ,
          '',
          `Dialogue:` ,
          `${convo.jp}`,
          '',
          `Task:` ,
          `1) Shadow both A and B.` ,
          `2) Summarize in 1 sentence (JP or EN).` ,
          `3) Replace 1 phrase with your own words.` ,
        ].join('\n');
      }

      if (focus === 'pronunciation') {
        const s = pick(pack.shadowing);
        return [
          `Level: ${level}`,
          `Focus: Pronunciation (rhythm + clarity)` ,
          '',
          `Shadowing line:` ,
          `${s.jp}`,
          '',
          `Drill:` ,
          `1) Slow → normal → fast (3 rounds).` ,
          `2) Emphasize mora timing (no rushing).` ,
          `3) Record yourself and compare.` ,
        ].join('\n');
      }

      const s = pick(pack.shadowing);
      const q1 = pick([
        'What did you understand? (EN is OK)',
        'Pick 3 keywords you heard.',
        'Say the sentence with different emotion (happy/angry/calm).',
      ]);
      return [
        `Level: ${level}`,
        `Focus: Listening + Shadowing` ,
        '',
        `Shadowing line:` ,
        `${s.jp}`,
        '',
        `Meaning (EN): ${s.en}`,
        '',
        `Exercise:` ,
        `1) Shadow 5 times (slow → normal).` ,
        `2) ${q1}` ,
        `3) Ask me for a harder/easier version.` ,
      ].join('\n');
    };

    return (msgs, currentText) => {
      const ctx = getContext(msgs, currentText);
      return build(ctx);
    };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSending]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const userText = input.trim();
    setInput('');
    setError('');

    const nextMessages = [
      ...messages,
      { id: `${Date.now()}-user`, role: 'user', content: userText },
    ];
    setMessages(nextMessages);
    setIsSending(true);

    try {
      const res = await fetch('/api/nihon-bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [systemMessage, ...nextMessages.map(({ role, content }) => ({ role, content }))],
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        const isMissingKey = data?.error?.includes?.('OPENROUTER_API_KEY');
        if (isMissingKey) {
          const offlineReply = generateOfflineReply(nextMessages, userText);
          setMessages((prev) => [...prev, { id: `${Date.now()}-bot`, role: 'assistant', content: offlineReply }]);
          return;
        }
        throw new Error(data?.error || 'Failed to get response');
      }

      const text = typeof data?.text === 'string' ? data.text : '';
      setMessages((prev) => [...prev, { id: `${Date.now()}-bot`, role: 'assistant', content: text || 'Sorry—no response.' }]);
    } catch (err) {
      const offlineReply = generateOfflineReply(nextMessages, userText);
      setMessages((prev) => [...prev, { id: `${Date.now()}-bot`, role: 'assistant', content: offlineReply }]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#fafafa] dark:bg-black min-h-screen text-black dark:text-white selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-hidden">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-32">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
           <a href="/more/languages" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
             <FaChevronLeft /> Back to Languages
           </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 dark:text-neutral-500 mb-4">
            Japanese Study
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter font-noto">
            Nihon Bot
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Chat with a Japanese listening tutor. Ask for shadowing lines, dictation, or quick comprehension drills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-white/80 dark:bg-neutral-900/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center">
                  <FaRobot />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black tracking-tight">Nihon Bot</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-60">Listening practice</div>
                </div>
              </div>
              <div className="text-[10px] uppercase tracking-widest opacity-60">
                {isSending ? 'Thinking…' : 'Ready'}
              </div>
            </div>

            <div className="h-[55vh] md:h-[60vh] overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m) => {
                const isUser = m.role === 'user';
                return (
                  <div key={m.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm md:text-base whitespace-pre-wrap break-words ${
                        isUser
                          ? 'bg-blue-600 dark:bg-red-600 text-white rounded-tr-none'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white rounded-tl-none border border-black/5 dark:border-white/10'
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                );
              })}
              <div ref={endRef} />
            </div>

            <div className="border-t border-black/10 dark:border-white/10 p-4 bg-white/70 dark:bg-neutral-900/60">
              {error ? (
                <div className="mb-3 text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              ) : null}
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Nihon Bot…"
                  className="flex-1 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500"
                  disabled={isSending}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isSending}
                  className="px-4 py-3 rounded-2xl bg-black dark:bg-white text-white dark:text-black border border-black/10 dark:border-white/10 disabled:opacity-50"
                >
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}



