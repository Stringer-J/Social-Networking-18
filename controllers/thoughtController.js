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
        res.send('this is thought - put');
    },

    deleteThought: async (req, res) => {
        res.send('this is thought - delete');
    }
};

module.exports = ThoughtController;