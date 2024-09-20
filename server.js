
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabaseApiEco } from './database.js'

const server = fastify();
const database = new DatabaseApiEco;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.get('/', async () =>{
   return
})


// REATE


// UPDATE


// DELETE


server.listen({
    port: 3333
});
