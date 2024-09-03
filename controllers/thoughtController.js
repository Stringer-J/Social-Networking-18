const Thought = require('../models/Thought');

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
        res.send('this is thought - get one by id');
    },

    postThought: async (req, res) => {
        res.send('this is thought - post');
    },

    putThought: async (req, res) => {
        res.send('this is thought - put');
    },

    deleteThought: async (req, res) => {
        res.send('this is thought - delete');
    }
};

module.exports = ThoughtController;