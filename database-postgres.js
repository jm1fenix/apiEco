import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabaseParqueFeliz {
  async listParques() {
    const parques = await sql`select * from parques`;
    return parques;
  }

  async createParque(parque) {
    const id = randomUUID();
    console.log('id', id);
    const nome = parque.nome;
    const local = parque.local;
    const descricao = parque.descricao;

    await sql`insert into parques (id, nome, local, descricao)
    values (${id}, ${nome}, ${local}, ${descricao})`
  }

  async updateParque(id, parque) {
    const nome = parque.nome;
    const local = parque.local;
    const descricao = parque.descricao;

    await sql`update parques set 
        nome = ${nome},
        local = ${local},
        descricao = ${descricao}
        where id = ${id}
    `;
  }

  async deleteParque(id) {
    await sql`delete from parques where id = ${id}`
  }
}
