const Thought = require('../models/Thought');
const User = require('../models/User');
const Reaction = require('../models/Reaction');

const ThoughtController = {
    
    //gets all thoughts
    getAll: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching thoughts', error });
        }
    },

    //gets one thought by id
    getOneById: async (req, res) => {
        try {
            const thoughtId = req.params.id;
            console.log('Thought ID: ', thoughtId);
            const thought = await Thought.findById(thoughtId)
                .populate('reactions')
                .exec();
            if (!thought) {
                return res.status(400).json({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching thought', error });
        }
    },

    //makes a new thought
    postThought: async (req, res) => {
        try {
            const { thoughtText, username, userId } = req.body;

            const newThought = new Thought({
                thoughtText,
                username,
                user: userId
            });

            const savedThought = await newThought.save();

            await User.findByIdAndUpdate(userId, {
                $push: { thoughts: savedThought._id }
            });

            res.status(201).json(savedThought);
        } catch (error) {
            res.status(500).json({ message: 'Error making thought', error });
        }
    },

    //updates an existing thought
    putThought: async (req, res) => {
        try {
            const thoughtId = req.params.id;
            const updateData = req.body;

            if (!thoughtId || !updateData) {
                return res.status(400).json({ message: 'Thought Id and update required' });
            }

            const updatedThought = await Thought.findByIdAndUpdate(thoughtId, updateData, {
                new: true,
                runValidators: true
            });

            if (!updatedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }

            res.status(200).json(updatedThought);
        } catch (error) {
            console.error('Error updating Thought:', error);
            res.status(500).json({ message: 'Error updating Thought', error });
        }
    },

    //deletes an existing thought
    deleteThought: async (req, res) => {
        try {
            const thoughtId = req.params.id;

            if(!thoughtId) {
                return res.status(400).json({ message: 'Thought required' });
            }

            const deletedThought = await Thought.findByIdAndDelete(thoughtId);

            if (!deletedThought) {
                return res.status(404).json({ message: 'Thought not found' });
            }

            res.status(200).json({ message: 'Thought deleted', deletedThought });
        } catch (error) {
            console.error('Error deleting Thought:', error);
            res.status(500).json({ message: 'Error deleting Thought', error });
        }
    },

    //lets you add a reaction to a thought
    addReaction: async (req, res) => {
        try {
            const thoughtId = req.params.thoughtId;
            const { reactionBody, username } = req.body;

            const newReaction = new Reaction({
                reactionBody,
                username,
                thought: thoughtId
            });

            const savedReaction = await newReaction.save();

            await Thought.findByIdAndUpdate(thoughtId, {
                $push: { reactions: savedReaction._id }
            });

            res.status(201).json(savedReaction);
        } catch (error) {
            console.error('Error adding reaction');
            res.status(500).json({ message: 'Error adding reaction', error });
        }
    },

    //lets you remove a reaction from a thought
    removeReaction: async (req, res) => {
        try {
            const thoughtId = req.params.thoughtId;
            const { reactionId } = req.body;

            if (!thoughtId) {
                return res.status(400).json({ message: 'Thought required' });
            }

            const updatedThought = await Thought.findByIdAndUpdate(thoughtId,
                { $pull: { reactions: reactionId } },
                { new: true, runValidators: true }
            );

            res.status(200).json(updatedThought);
        } catch (error) {
            console.error('Error removing reaction');
            res.status(500).json({ message: 'Error removing reaction', error });
        }
    }
};

//exports the functions
module.exports = ThoughtController;