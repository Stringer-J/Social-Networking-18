const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

//makes user seeds
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

//sets up mongo database and seeds it by removing data if it exist and putting new data in
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
        
    } catch (error) {
        console.error('Seed failed...', error);
    } finally {
        await mongoose.connection.close();
    }
};

//actually runs the seed function
seedDB();
