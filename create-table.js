import { sql } from './db.js'

sql`
  CREATE TABLE pontoEco (
      id text PRIMARY KEY,
      nome character varying(255),
      local character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})