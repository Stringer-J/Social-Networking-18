const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({

});

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;