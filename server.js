const http = require('http');

const app = require('./src/app');

const server = http.createServer(app);

mongo

server.listen(5000, () => {
    console.log('Listening on port 5000');
});