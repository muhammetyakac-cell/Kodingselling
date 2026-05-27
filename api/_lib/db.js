import { neon } from '@neondatabase/serverless';

export function getConnectionString() {
  return (
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.STORAGE_POSTGRES_URL ||
    process.env.STORAGE_POSTGRES_URL_NO_SSL ||
    ''
  );
}

export function isDbConfigured() {
  return Boolean(getConnectionString());
}

export function getSqlClient() {
  const connectionString = getConnectionString();

  if (!connectionString) {
    throw new Error('Neon is not configured. Set POSTGRES_URL or DATABASE_URL.');
  }

  return neon(connectionString);
}
