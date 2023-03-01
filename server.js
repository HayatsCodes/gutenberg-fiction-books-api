const http = require('http');

const app = require('./src/app');
const mongoConnect = require('./src/utils/mongo');

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();

    server.listen(5000, () => {
        console.log('Listening on port 5000');
    });
}