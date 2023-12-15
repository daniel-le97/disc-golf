import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

// if (!process.env.NUXT_DB_URL) {
//   console.error('NUXT_DB_URL is not set')
//   process.exit(1)
// }
const sql = postgres(process.env.NUXT_DB_URL!, { max: 1 })
let _db: PostgresJsDatabase<Record<string, unknown>> | undefined
export async function db() {
  if (_db)
    return _db
  await sql`SELECT 1`
  _db = drizzle(sql)
  const cwd = `${process.cwd()}/server/db/migrations`
  // apply migrations on every new connection
  await migrate(_db, { migrationsFolder: cwd })
  return _db
}
