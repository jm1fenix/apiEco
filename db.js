import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGAPIECO, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGAPIECO,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };