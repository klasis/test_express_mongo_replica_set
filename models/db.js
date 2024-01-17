const mongoose = require('mongoose');

// exports.connect = function (dbName) {
//     const connection = mongoose.connect('mongodb://localhost:19507/admin', {
//         user: 'topadmin',
//         pass: 'wpqkfqhdksgpqmsxmfl',
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     if (connection) {
//         console.log('connected: ', connection);
//     }
//     else {
//         console.log('connection error');
//     }
// }

module.exports = function (dbName, schemaName) {
    const schema = require('../models/' + schemaName);
    const db = mongoose.connection.useDb(dbName);

    return db.model('collection', schema);
}