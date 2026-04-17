import { getSqlClient, isDbConfigured } from './_lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text, sessionId } = req.body ?? {};

    if (!text) {
      return res.status(400).json({ error: 'text is required' });
    }

    const botReply = 'Mesajınız alındı. Ekibimiz en kısa sürede size geri dönecek.';

    if (!isDbConfigured()) {
      console.warn('Chat accepted without DB storage (missing Neon env):', { text, sessionId });
      return res.status(200).json({ ok: true, stored: false, reply: botReply });
    }

    const sql = getSqlClient();
    await sql`
      INSERT INTO public.chat_messages (sender_type, message, session_id)
      VALUES ('user', ${text}, ${sessionId ?? null})
    `;

    await sql`
      INSERT INTO public.chat_messages (sender_type, message, session_id)
      VALUES ('bot', ${botReply}, ${sessionId ?? null})
    `;

    return res.status(200).json({ ok: true, stored: true, reply: botReply });
  } catch (error) {
    console.error('Chat insert warning:', error);
    return res.status(200).json({
      ok: true,
      stored: false,
      reply: 'Mesajınız alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.'
    });
  }
}
