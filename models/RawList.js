const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rawListSchema = new Schema({
  list: [Schema.Types.Mixed]
});

module.exports = mongoose.model('RawList', rawListSchema);