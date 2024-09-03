const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

const users = [
    { username: 'Josh', email: 'joshstringer@live.com' },
    { username: 'Mariah', email: 'mariahisalabama@yahoo.com' },
    { username: 'Scott', email: 'creedguy@outlook.com' },
    { username: 'Riley', email: 'nolivingroom@live.com' },
    { username: 'Alice', email: 'popcornspoon@yahoo.com' },
    { username: 'April', email: 'definitelyoneday@outlook.com' },
    { username: 'Odin', email: 'thorsdad@google.com' },
    { username: 'Bob', email: 'icanpaint@whatever.com' }
];

const thoughts = [
    { thoughtText: `Maybe I actually don't think about anything...`,
        username: 'Josh', createdAt: new Date() },
    { thoughtText: `I say I'm from Vermont but I'm from Arizona`,
        username: 'Mariah', createdAt: new Date() },
    { thoughtText: `With arms wide open`,
        username: 'Scott', createdAt: new Date() },
    { thoughtText: `But this isn't the living room`,
        username: 'Riley', createdAt: new Date() },
    { thoughtText: `I'm gonna eat popcorn with a spoon`,
        username: 'Alice', createdAt: new Date() },
    { thoughtText: `Just chillin with the Ninja Turtles`,
        username: 'April', createdAt: new Date() },
    { thoughtText: `I wonder where all the lightning is?`,
        username: 'Odin', createdAt: new Date() },
    { thoughtText: `I stopped painting a few years ago`,
        username: 'Bob', createdAt: new Date() }
]

const MONGO_URI = 'mongodb://localhost:27017/social_db';

const seedDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await User.deleteMany({});
        await Thought.deleteMany({});

        await User.insertMany(users);
        console.log('User seed worked!');
        await Thought.insertMany(thoughts);
        console.log('Thought seed worked!');
        
    } catch (error) {
        console.error('Seed failed...', error);
    } finally {
        await mongoose.connection.close();
    }
};

seedDB();
