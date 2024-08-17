const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({

});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;