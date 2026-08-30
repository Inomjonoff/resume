// /api/chat.js
// Universal Vercel Serverless / Edge Function for ultra-fast Gemini streaming with Naimjon's CV context.

export const maxDuration = 30;

const FAST_MODELS = [
    'gemini-3.5-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-3.1-flash-lite',
    'gemini-3.5-flash'
];

const SYSTEM_INSTRUCTION = `
Siz PositronAI — Naimjon Inomjonovning shaxsiy veb-saytidagi aqlli, jonli, samimiy, o'ta tezkor va bilimdon AI assistentisiz.

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

async function parseBody(req) {
    if (req.body && typeof req.body === 'object') {
        return req.body;
    }
    if (typeof req.json === 'function') {
        try {
            return await req.json();
        } catch (e) {}
    }
    return new Promise((resolve) => {
        let data = '';
        if (typeof req.on === 'function') {
            req.on('data', chunk => { data += chunk; });
            req.on('end', () => {
                try {
                    resolve(JSON.parse(data || '{}'));
                } catch (e) {
                    resolve({});
                }
            });
            req.on('error', () => resolve({}));
        } else {
            resolve({});
        }
    });
}

function sendResponse(res, statusCode, data) {
    const jsonStr = JSON.stringify(data);
    if (res && typeof res.writeHead === 'function') {
        res.writeHead(statusCode, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,PUT,DELETE',
            'Access-Control-Allow-Headers': '*'
        });
        res.end(jsonStr);
        return;
    }
    if (res && typeof res.status === 'function') {
        return res.status(statusCode).json(data);
    }
    return new Response(jsonStr, {
        status: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}

export default async function handler(req, res) {
    // 1. Handle CORS preflight
    if (req.method === 'OPTIONS') {
        if (res && typeof res.writeHead === 'function') {
            res.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,PUT,DELETE',
                'Access-Control-Allow-Headers': '*'
            });
            return res.end();
        }
        return new Response(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,PUT,DELETE',
                'Access-Control-Allow-Headers': '*'
            }
        });
    }

    if (req.method !== 'POST') {
        return sendResponse(res, 405, { error: 'Method not allowed' });
    }

    const body = await parseBody(req);
    const { message, history, stream = true } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
        return sendResponse(res, 400, { error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return sendResponse(res, 500, { error: 'Gemini API Key is not configured.', fallback: true });
    }

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
            parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 500
        }
    };

    // Streaming mode with Node ServerResponse
    if (stream && res && typeof res.writeHead === 'function') {
        for (const model of FAST_MODELS) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;
                const geminiRes = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (geminiRes.ok && geminiRes.body) {
                    res.writeHead(200, {
                        'Content-Type': 'text/event-stream; charset=utf-8',
                        'Cache-Control': 'no-cache, no-transform',
                        'Connection': 'keep-alive',
                        'Access-Control-Allow-Origin': '*',
                        'X-Accel-Buffering': 'no'
                    });

                    const reader = geminiRes.body.getReader();
                    const decoder = new TextDecoder();
                    let buffer = '';

                    while (true) {
                        const { value, done } = await reader.read();
                        if (done) break;

                        buffer += decoder.decode(value, { stream: true });
                        const lines = buffer.split('\n');
                        buffer = lines.pop() || '';

                        for (const line of lines) {
                            if (line.startsWith('data: ')) {
                                const jsonStr = line.slice(6).trim();
                                if (jsonStr && jsonStr !== '[DONE]') {
                                    try {
                                        const parsed = JSON.parse(jsonStr);
                                        const textChunk = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                                        if (textChunk) {
                                            res.write(`data: ${JSON.stringify({ text: textChunk })}\n\n`);
                                        }
                                    } catch (e) {}
                                }
                            }
                        }
                    }

                    if (buffer.startsWith('data: ')) {
                        const jsonStr = buffer.slice(6).trim();
                        if (jsonStr && jsonStr !== '[DONE]') {
                            try {
                                const parsed = JSON.parse(jsonStr);
                                const textChunk = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                                if (textChunk) {
                                    res.write(`data: ${JSON.stringify({ text: textChunk })}\n\n`);
                                }
                            } catch (e) {}
                        }
                    }

                    res.write('data: [DONE]\n\n');
                    return res.end();
                }
            } catch (err) {
                console.warn(`Model ${model} stream error, trying next fast model:`, err.message);
            }
        }
    }

    // Fallback: Non-streaming JSON mode
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
                    return sendResponse(res, 200, { text: responseText.trim(), model });
                }
            }
        } catch (err) {
            console.warn(`Model ${model} JSON error:`, err.message);
        }
    }

    return sendResponse(res, 502, { error: 'Failed to communicate with AI models.', fallback: true });
}