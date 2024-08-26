const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

try {
    const controllers = require('./controllers/');
    app.use(controllers);
} catch (err) {
    console.error('Error loading controllers', err);
}

const mongoURI = 'mongodb://localhost:27017/mydatabase'; //change when i get a db set up

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection failed', err));

app.listen(PORT, () => console.log('Server running'));