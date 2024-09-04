const Thought = require('../models/Thought');
const User = require('../models/User');

const ThoughtController = {
    
    getAll: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching thoughts', error });
        }
    },

    getOneById: async (req, res) => {
        try {
            const thoughtId = req.params.id;
            console.log('Thought ID: ', thoughtId);
            const thought = await Thought.findById(thoughtId);
            if (!thought) {
                return res.status(400).json({ message: 'Thought not found' });
            }
            res.status(200).json(thought);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching thought', error });
        }
    },

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

    addReaction: async (req, res) => {
        try {

        } catch (error) {

        }
    },

    removeReaction: async (req, res) => {
        try {

        } catch (error) {
            
        }
    }
};

module.exports = ThoughtController;