// /api/contact.js
// Vercel Serverless Function to securely dispatch contact form submissions to Naimjon's Telegram.

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message, project_type } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, Email, and Message are required fields.' });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
        console.error("Missing Telegram Bot config on Vercel Env Variables.");
        return res.status(500).json({ 
            error: 'Telegram notification system is not configured on Vercel.',
            fallback: true
        });
    }

    // Auto-detect if input is Email or Phone Number
    const isEmail = email.includes('@');
    const isPhone = /^\+?[0-9\s\-()]{7,}$/.test(email.trim());
    
    let contactType = 'Aloqa';
    let contactEmoji = '🔑';
    
    if (isEmail) {
        contactType = 'Email';
        contactEmoji = '✉️';
    } else if (isPhone) {
        contactType = 'Telefon';
        contactEmoji = '📞';
    }

    const selectedType = project_type || 'General Inquiry / Boshqa';

    // Format HTML message for Telegram
    const timestamp = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });
    const telegramMessage = `🔔 <b>Yangi aloqa xabari (Portfolio 2.0)!</b>\n\n` +
                            `👤 <b>Ism:</b> ${name}\n` +
                            `${contactEmoji} <b>${contactType}:</b> ${email}\n` +
                            `📌 <b>Loyiha turi:</b> ${selectedType}\n\n` +
                            `💬 <b>Xabar:</b>\n` +
                            `<i>${message}</i>\n\n` +
                            `<code>------------------------</code>\n` +
                            `📅 <b>Sana:</b> ${timestamp} (Tashkent Time)`;

    try {
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        const data = await response.json();

        if (!response.ok || !data.ok) {
            console.error("Telegram API response error:", data);
            return res.status(502).json({ error: 'Failed to deliver message via Telegram API.' });
        }

        return res.status(200).json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error("Serverless Contact Function Error:", error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
}
