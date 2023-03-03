const http = require('http');

const app = require('./app');
const mongoConnect = require('./config/mongo');
const { loadBooks } = require('./models/books.model');

const server = http.createServer(app);


async function startServer() {
    await mongoConnect();
    await loadBooks();

    server.listen(5000, () => {
        console.log('Listening on port 5000');
    });
}

startServer();
