// /api/chat.js
// Vercel Edge Function to securely query Gemini API using Naimjon's CV context with ultra-fast streaming & fallback.

export const config = {
    runtime: 'edge'
};

export const maxDuration = 30;

const FAST_MODELS = [
    'gemini-3.5-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-3.1-flash-lite',
    'gemini-3.5-flash'
];

export default async function handler(req) {
    const corsHeaders = {
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    };

    if (req.method === 'OPTIONS') {
        return new Response(null, { status: 200, headers: corsHeaders });
    }

    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
            status: 405,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }

    let body;
    try {
        body = await req.json();
    } catch (e) {
        return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }

    const { message, history, stream = true } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
        return new Response(JSON.stringify({ error: 'Message is required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return new Response(JSON.stringify({
            error: 'Gemini API Key is not configured.',
            fallback: true
        }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }

    // Naimjon's CV Context as System Instructions
    const systemInstruction = `
Siz PositronAI — Naimjon Inomjonovning shaxsiy veb-saytidagi aqlli, jonli, samimiy, tezkor va nihoyatda bilimdon AI assistentisiz.

ENG MUHIM QOIDALAR (TEZLIK VA JONLI MULOQOT):
1. JAVOBLARNI TEZ, ANIQ VA LO'NDA BERING:
   - Hech qachon ortiqcha cho'zib, keraksiz uzun ma'lumot bermang! Foydalanuvchi so'ragan savolga to'g'ridan-to'g'ri va ixcham (1-3 paragrafda) javob bering.
   - Foydalanuvchi "Salom", "Qalaysan?", "Nima gap?" desa — xuddi haqiqiy do'stona inson kabi darhol tabiiy va qisqa salomlashing: "Salom! Yaxshi, rahmat 😊 Sizga Naimjon haqida qanday yordam bera olaman?"
   - Agar biror loyiha haqida so'rashsa (masalan, "Remember.uz nima?"), butun rezyumeni emas, faqat Remember.uz haqida qiziqarli, texnik va lo'nda tushuntiring.
   - Agar dasturlash yoki texnologiya (Python, FastAPI, Docker, aiogram) haqida so'rashsa, Naimjonning shu yo'nalishdagi tajribasini aniq aytib bering.

2. MULOQOT USLUBI VA TILI:
   - Foydalanuvchi qaysi tilda yozsa (O'zbek, Rus, Ingliz, Tojik) — aynan shu tilda javob bering.
   - Quruq rasmiyatchilik qilmang, do'stona, samimiy va professional bo'ling.
   - O'qish oson bo'lishi uchun punktlar (bullet points) va emoji ishlating.
   - Naimjon haqida uchinchi shaxsda gapiring ("Naimjon...", "U yaratgan...").

============================================================
NAIMJON INOMJONOV — PROFIL MA'LUMOTLARI
============================================================

1. SHAXSIY MA'LUMOTLAR VA KONTAKTLAR:
- To'liq ismi: Inomjonov Naimjon Alimjonovich (24 yoshda, 2001-yil)
- Kasbi: Python Backend Dasturchi, AI & Avtomatlashtirish Muhandisi, Tizim Arxitektori va Startaplar Asoschisi
- Yashash joyi: Toshkent viloyati, G'azalkent shahri. Toshkent/Chirchiqqa ko'chishga yoki Remote/Gibrid ishlashga tayyor.
- Telegram: @Naimjon_Inomjonov (https://t.me/Naimjon_Inomjonov)
- GitHub: https://github.com/Inomjonoff
- Portfolio: https://naimjon.uz
- Email: naiminomjonov@gmail.com
- Telefon: +998 (99) 837-08-23
- Falsafasi: "Tizimli tafakkur — izolyatsiyalangan kod emas, to'liq arxitektura". Har bir loyihani to'liq zanjir (Bot + API + DB + Redis + Docker + UX) sifatida quradi.

2. ASOSIY TEXNIK STACK:
- Dasturlash tillari: Python (mukammal), SQL (PostgreSQL, SQLite), Java, Kotlin, HTML5, CSS3, JavaScript.
- Backend & Asinxronlik: FastAPI, aiogram 3.x, AsyncIO, REST API, JWT, Webhook.
- Bot & Mini Apps: Telegram Bots, Telegram Mini Apps (TMA).
- Ma'lumotlar bazalari & Kesh: PostgreSQL, Redis, SQLite.
- DevOps & Server: Docker, Docker Compose, Linux (Ubuntu/Debian), Bash, Vercel, Git & GitHub, Termius SSH.
- AI & LLM: Google Gemini API, OpenAI API, LLM Prompt Engineering, RAG tizimlari, AI Automation.
- Tillar: O'zbek (C2), Tojik (C2), Rus (B2), Ingliz (B2).

3. FLAGMAN VA MUSTAQIL LOYIHALARI:
1) 🧠 Remember.uz (2026): Shaxsiy kontekstual xotira va bilimlarni birlashtiruvchi AI platforma (FastAPI, Gemini/OpenAI API, PostgreSQL, Redis, Docker).
2) 🎓 Pozitron Academy (2025): SuperMemo-2 algoritmi asosidagi bepul til o'rganish ochiq hamjamiyat platformasi (Python, Telegram botlar, Web).
3) 🛍️ Mixaro Shop (2025): Xitoydan O'zbekistonga dropshipping modeli asosida savdo qiluvchi Telegram bot + TMA ekotizimi (aiogram 3.x, PostgreSQL, Redis, Docker).
4) 🤖 EduAI (2025): Masalalarni real vaqtda tekshiruvchi intellektual AI repetitor va baholash tizimi.

4. PROFESSIONAL TAJRIBA (6 YIL+):
- Unicon Soft — Dasturiy ta'minotni texnik qo'llab-quvvatlash mutaxassisi (2026 — hozirgacha)
- Respublika Ma'naviyat va ma'rifat markazi — Yetakchi mutaxassis (2024 — 2025)
- 42-sonli maktab — Informatika o'qituvchisi (2023 — 2024)
- Savdo-sanoat palatasi — Tashqi iqtisodiy faoliyat bosh mutaxassisi (2023)
- Chirchiq davlat pedagogika universiteti (Bakalavr: Matematika va Informatika, 2024)
- Coursera (Python Programming Professional Certificate, 2025)
`;

    const contents = [];
    if (history && Array.isArray(history)) {
        history.forEach(item => {
            if (item && typeof item.text === 'string' && item.text.trim()) {
                contents.push({
                    role: item.role === 'user' ? 'user' : 'model',
                    parts: [{ text: item.text }]
                });
            }
        });
    }

    contents.push({
        role: 'user',
        parts: [{ text: message }]
    });

    const payload = {
        contents,
        systemInstruction: {
            parts: [{ text: systemInstruction }]
        },
        generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 600
        }
    };

    // If streaming requested:
    if (stream) {
        for (const model of FAST_MODELS) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;
                const geminiRes = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (geminiRes.ok && geminiRes.body) {
                    const transformStream = new TransformStream({
                        start(controller) {
                            this.buffer = '';
                            this.decoder = new TextDecoder();
                            this.encoder = new TextEncoder();
                        },
                        transform(chunk, controller) {
                            this.buffer += this.decoder.decode(chunk, { stream: true });
                            const lines = this.buffer.split('\n');
                            this.buffer = lines.pop() || '';

                            for (const line of lines) {
                                if (line.startsWith('data: ')) {
                                    const jsonStr = line.slice(6).trim();
                                    if (jsonStr && jsonStr !== '[DONE]') {
                                        try {
                                            const data = JSON.parse(jsonStr);
                                            const textChunk = data.candidates?.[0]?.content?.parts?.[0]?.text;
                                            if (textChunk) {
                                                controller.enqueue(this.encoder.encode(`data: ${JSON.stringify({ text: textChunk })}\n\n`));
                                            }
                                        } catch (e) {
                                            // ignore parse error on partial chunk
                                        }
                                    }
                                }
                            }
                        },
                        flush(controller) {
                            if (this.buffer) {
                                if (this.buffer.startsWith('data: ')) {
                                    const jsonStr = this.buffer.slice(6).trim();
                                    if (jsonStr && jsonStr !== '[DONE]') {
                                        try {
                                            const data = JSON.parse(jsonStr);
                                            const textChunk = data.candidates?.[0]?.content?.parts?.[0]?.text;
                                            if (textChunk) {
                                                controller.enqueue(this.encoder.encode(`data: ${JSON.stringify({ text: textChunk })}\n\n`));
                                            }
                                        } catch (e) {}
                                    }
                                }
                            }
                            controller.enqueue(this.encoder.encode('data: [DONE]\n\n'));
                        }
                    });

                    return new Response(geminiRes.body.pipeThrough(transformStream), {
                        headers: {
                            ...corsHeaders,
                            'Content-Type': 'text/event-stream; charset=utf-8',
                            'Cache-Control': 'no-cache, no-transform',
                            'Connection': 'keep-alive'
                        }
                    });
                }
            } catch (err) {
                console.warn(`Model ${model} stream error, trying next fast model:`, err.message);
            }
        }
    }

    // Fallback: Non-streaming JSON mode across fast models
    for (const model of FAST_MODELS) {
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
                if (responseText.trim()) {
                    return new Response(JSON.stringify({ text: responseText.trim(), model }), {
                        status: 200,
                        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                    });
                }
            }
        } catch (err) {
            console.warn(`Model ${model} non-stream error:`, err.message);
        }
    }

    // If all models failed or offline
    return new Response(JSON.stringify({
        error: 'Failed to communicate with AI models.',
        fallback: true
    }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
}