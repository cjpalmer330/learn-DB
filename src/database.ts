import { Database } from './types'
import pg from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

const { Pool } = pg;
const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'learn-db',
    host: 'localhost',
    user: 'admin',
    port: 5432,
    max: 10,
  })
});

export const db = new Kysely<Database>({
  dialect,
})