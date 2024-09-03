const User = require('../models/User');
const Thought = require('../models/Thought');

const UsersController = {

    getAll: async (req, res) => {
        try {
            const users = await User.find()
                .populate('thoughts')
                .exec();
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
        try {
            const { username, email } = req.body;
            
            if (!username || !email) {
                return res.status(400).json({ message: 'Username and Email required' });
            }

            const newUser = new User({
                username,
                email
            });

            const savedUser = await newUser.save();
            res.status(201).json(savedUser);

        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ message: 'Error creating user', error });
        }
    },

    putUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const updateData = req.body;

            if (!userId || !updateData) {
                return res.status(400).json({ message: 'User and update required' });
            }

            const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
                new: true,
                runValidators: true
            });

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(updatedUser);
        } catch (error) {
            console.error('Error updating User:', error);
            res.status(500).json({ message: 'Error updating User', error });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;

            if (!userId) {
                return res.status(400).json({ message: 'User required' });
            }

            await Thought.deleteMany({ user: userId });
            const deletedUser = await User.findByIdAndDelete(userId);

            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json({ message: 'User deleted', deletedUser });
        } catch (error) {
            console.error('Error deleting User:', error);
            res.status(500).json({ message: 'Error deleting User', error });
        }
    }
};

module.exports = UsersController;