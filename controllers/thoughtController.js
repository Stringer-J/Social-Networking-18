const Thought = require('../models/Thought');

const ThoughtController = {
    
    getAll: async (req, res) => {
        res.send('this is thought - get all');
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