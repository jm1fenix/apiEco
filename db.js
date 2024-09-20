import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGPARQUEFELIZ, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGPARQUEFELIZ,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };