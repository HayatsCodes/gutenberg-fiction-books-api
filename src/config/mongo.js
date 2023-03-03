const mongoose = require('mongoose');


mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

mongoose.set('strictQuery', false);

async function mongoConnect() {
    await  mongoose.connect(MONGO_URL, {
        connectTimeoutMS: 10000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = mongoConnect;