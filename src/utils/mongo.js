const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://gutenberg-api:<password>@gutenberg-fiction-books.ennxkis.mongodb.net/?retryWrites=true&w=majority';

mongoose.connection('open', () => {
    console,log('MongoDB connection ready');
});

mongoose.connection().on('error', (err) => {
    console.error(err);
});

mongoose.set('strictQuery', false);

async function mongoConnect() {
    await  mong
}