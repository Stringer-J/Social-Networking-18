const User = require('../models/User');

const UsersController = {

    getAll: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    },

    getOneById: async (req, res) => {
        try {
            const userId = req.params.id;
            console.log('User ID: ', userId);
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
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