const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, maxlength: [280, 'Cannot be longer than 280 characters'] },
    createdAt: { type: Date, default: Date.now, get: formatDate },
    username: { type: String, required: true },
    reactions: [],
}, {
    toJSON: { getters: true },
    toObject: { getters: true }
});

function formatDate(date) {
    if (!date) return null;
    return date.toISOString().split('T')[0];
}

thoughtsSchema.virtual('tbd').get(function() { //needs to be finished
    return;
});

thoughtsSchema.set('toJSON', { virtuals: true });
thoughtsSchema.set('toObject', { virtuals: true });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;