import express from 'express'
import http from 'http';

import injectSocketIO from './socket/socketIoHandler.js';
import { handler } from './build/handler.js';

const app = express()
const server = http.createServer(app);

// Inject SocketIO
injectSocketIO(server);

// SvelteKit handlers
app.use(handler);

app.listen(3000, ()=> {
    console.log('app is running')
})