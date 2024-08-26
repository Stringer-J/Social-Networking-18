const User = require('../models/User');

const UsersController = {

    getAll: async (req, res) => {
        res.send('this is user - get All');
    },

    getOneById: async (req, res) => {
        res.send('this is user - get one by id');
    },

    postUser: async (req, res) => {
        res.send('this is user - post user');
    },

    putUser: async (req, res) => {
        res.send('this is user - put user');
    },

    deleteUser: async (req, res) => {
        res.send('this is user - delete user');
    }
};

module.exports = UsersController;