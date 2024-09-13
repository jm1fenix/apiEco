import { sql } from './db.js';

export class DatabaseApiEco {
    async createPonto(pontoEco) {
        const id = pontoEco.id();
        const nome = pontoEco.nome;
        const local = pontoEco.local;

        await sql`insert into pontoeco (id, nome, local)
        values (${id}, ${nome}, ${local}`
    }

    async listPontoEco() {

    }
  
    async updatePontoEco(id, pontoEco) {
       
    }
  
    async deletePontoEco(id) {
       
    }
}