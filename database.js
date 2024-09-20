import { sql } from './db.js';

export class DatabaseParqueFeliz {
    async createParque(parqueFeliz) {
        const id = parque.id();
        const nome = parque.nome;
        const local = parque.local;
        const descricao = parque.descricao;

        await sql`insert into parque (id, nome, local, descricao)
        values (${id}, ${nome}, ${local}, ${descricao}`
    }

    async listParque() {

    }
  
    async updateParque(id, parque) {
       
    }
  
    async deleteParque(id) {
       
    }
}