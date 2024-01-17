const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    data: {type: String}
}, {collection: 'collection'});

module.exports = schema;