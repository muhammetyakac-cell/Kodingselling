import { neon } from '@neondatabase/serverless';

export function getSqlClient() {
  const connectionString =
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    '';

  if (!connectionString) {
    throw new Error('Missing Neon connection string. Set POSTGRES_URL or DATABASE_URL.');
  }

  return neon(connectionString);
}
