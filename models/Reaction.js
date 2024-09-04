const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
    reactionBody: { type: String, required: true, maxlength: [280, 'Cannot be longer than 280 characters'] },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: formatDate },
}, {
    toJSON: { getters: true },
    toObject: { getters: true }
});

function formatDate(date) {
    if (!date) return null;
    return date.toISOString().split('T')[0];
}

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;