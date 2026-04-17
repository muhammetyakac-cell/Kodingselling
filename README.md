# DZY Web Sitesi

Bu proje React + Vite + Tailwind ile hazırlanmıştır ve backend tarafında Neon Postgres + Vercel Serverless API kullanır.

## Kurulum

```bash
npm install
npm run dev
```

## Environment Variables (Vercel)

### Frontend
- `VITE_API_BASE_URL` (opsiyonel; backend farklı domaindeyse örn: `https://your-app.vercel.app`)

### Backend (Neon Postgres)
- `DATABASE_URL`
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL` (opsiyonel fallback)
- `STORAGE_POSTGRES_URL` (Vercel Neon integration kullanan projeler için desteklenir)
- `STORAGE_POSTGRES_URL_NO_SSL` (opsiyonel fallback)

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

## Hata Giderme

### `Failed to load resource: ... 404 (/api/leads)`
- Frontend farklı bir domainde çalışıyorsa `VITE_API_BASE_URL` tanımlayın.
- Vercel deployunda `api/` klasörünün yayımlandığını doğrulayın.
- Yerel geliştirmede yalnızca `vite` yerine `vercel dev` tercih edin (API fonksiyonları da ayağa kalkar).

### `Failed to load resource: ... 500 (/api/leads)`
- `POSTGRES_URL` veya `DATABASE_URL` environment variable'ının Vercel'de tanımlı olduğunu kontrol edin.
- Sadece `STORAGE_POSTGRES_URL` ekliyse de sistem artık bunu otomatik kullanır.
- Neon üzerinde `db/schema.sql` dosyasını çalıştırdığınızdan emin olun.
