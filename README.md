# DZY Web Sitesi

Bu proje React + Vite + Tailwind ile hazırlanmıştır.

## Kurulum

```bash
npm install
npm run dev
```

## Environment Variables (Vercel)

### Frontend (Supabase)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Backend (Neon Postgres)
- `DATABASE_URL`
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL` (opsiyonel fallback)

Örnek değerler için `.env.example` dosyasını kullanabilirsiniz.

## Neon SQL Kurulumu

`db/schema.sql` dosyasını Neon SQL Editor'de çalıştırın.

Bu tablolar oluşturulur:
- `public.leads`
- `public.chat_messages`

## Serverless API Uçları

- `POST /api/leads` → form lead kaydı
- `POST /api/chat` → chat mesajı + bot yanıt kaydı

Bu uçlar Vercel serverless function olarak çalışır.
