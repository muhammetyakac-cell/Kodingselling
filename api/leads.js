import { getSqlClient } from './_lib/db.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, primaryNeed, company, budget, summary } = req.body ?? {};

    if (!name || !email || !primaryNeed) {
      return res.status(400).json({ error: 'name, email and primaryNeed are required' });
    }

    const sql = getSqlClient();

    await sql`
      INSERT INTO public.leads (full_name, email, primary_need, company, budget, summary)
      VALUES (${name}, ${email}, ${primaryNeed}, ${company ?? null}, ${budget ?? null}, ${summary ?? null})
    `;

    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Lead insert error:', error);
    return res.status(500).json({ error: 'Failed to save lead' });
  }
}
