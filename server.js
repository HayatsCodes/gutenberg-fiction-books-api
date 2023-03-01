const http = require('http');

const app = require('./src/app');
const mongoConnect = require('./src/utils/mongo');
const { loadBooks } = require('./src/models/books.model');

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadBooks();

    server.listen(5000, () => {
        console.log('Listening on port 5000');
    });
}

startServer();