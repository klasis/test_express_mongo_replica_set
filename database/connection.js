const mongoose = require('mongoose');

require('dotenv').config();

function connectDatabase () {
    mongoose.connect(process.env.DB_URL, {
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        dbName: process.env.DB_NAME,
        replicaSet: process.env.REPLSET
    });

    mongoose.connection.on('connected', () => console.log('DB connected'));
    mongoose.connection.on('open', () => console.log('DB open'));
    mongoose.connection.on('disconnected', () => console.log('DB disconnected'));
    mongoose.connection.on('reconnected', () => console.log('DB reconnected'));
    mongoose.connection.on('disconnecting', () => console.log('DB disconnecting'));
    mongoose.connection.on('close', () => console.log('DB close'));
}

module.exports = connectDatabase;