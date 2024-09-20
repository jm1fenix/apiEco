import { sql } from './db.js'

sql`
  CREATE TABLE parques (
      id text PRIMARY KEY,
      nome character varying(255),
      local character varying(255),
      descricao character varying(255)
  );
`.then(() => {
  console.log('Tabela Criada com Sucesso!');
})