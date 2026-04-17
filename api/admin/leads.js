import { getSqlClient, isDbConfigured } from '../_lib/db.js';

function isAuthorized(req) {
  const token = req.headers['x-admin-token'] || req.query?.token;
  const expected = process.env.ADMIN_KEY || process.env.ADMIN_READ_TOKEN;
  return Boolean(expected) && token === expected;
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (!isDbConfigured()) {
    return res.status(503).json({ error: 'DB is not configured' });
  }

  try {
    const sql = getSqlClient();
    const rows = await sql`
      SELECT id, full_name, email, primary_need, company, budget, summary, created_at
      FROM public.leads
      ORDER BY created_at DESC
      LIMIT 100
    `;

    return res.status(200).json({ ok: true, count: rows.length, rows });
  } catch (error) {
    console.error('Admin leads read error:', error);
    return res.status(500).json({ error: 'Failed to read leads' });
  }
}
