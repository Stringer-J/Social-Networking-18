const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, maxlength: [280, 'Cannot be longer than 280 characters'] },
    createdAt: { type: Date, default: Date.now, get: formatDate },
    username: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction' }],
}, {
    toJSON: { getters: true },
    toObject: { getters: true }
});

function formatDate(date) {
    if (!date) return null;
    return date.toISOString().split('T')[0];
}

//counts your reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

thoughtSchema.set('toJSON', { virtuals: true });
thoughtSchema.set('toObject', { virtuals: true });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;