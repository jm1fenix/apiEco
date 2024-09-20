
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabaseParqueFeliz } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabaseParqueFeliz;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/parques', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createParque(body);
    return reply.status(201).send();
})


// REATE
server.get('/parques', async () => {
    const parques = await databasePostgres.listParques();
    return parques;
});

// UPDATE
server.put('/parques/:id', async (request, reply) => {
    const parqueID = request.params.id;
    const body = request.body;
    await databasePostgres.updateParque(parqueID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/parques/:id', async (request, reply) => {
    const parqueID = request.params.id;
    await databasePostgres.deleteParque(parqueID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
});
