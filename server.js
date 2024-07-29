const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./models/movieModel');
const User = require('./models/userModel');

const app = express();
const cors= require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://admin:admin123@cinebit.qbmafki.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CineBit')
    .then(() => {
        console.log('Connected to mongoose');
        app.listen(5000, () => {
            console.log('NodeApi app is running on localhost 5000');
        });
    })
    .catch((error) => {
        console.log(error);
    });
app.get('/movie', async (req, res) => {
    try {
        const movie = await Movie.find({});
        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.get('/movie/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.get('/movie/name/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const movie = await Movie.findOne({ name: new RegExp(`^${name}$`, 'i') });
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.post('/movie', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.put('/movie/name/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const movie = await Movie.findOneAndUpdate(
            { name: new RegExp(`^${name}$`, 'i') },
            req.body,
            { new: true, runValidators: true }
        );

        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.delete('/movie/name/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const movie = await Movie.findOneAndDelete(
            { name: new RegExp(`^${name}$`, 'i') }
        );

        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        res.status(200).json({ message: 'Movie deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.get('/user', async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.get('/user/name/:user1', async (req, res) => {
    try {
        const { user1 } = req.params;
        const user = await User.findOne({ user: new RegExp(`^${user1}$`, 'i') });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.post('/user', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.put('/user/name/:user1', async (req, res) => {
    try {
        const { user1 } = req.params;
        const user = await User.findOneAndUpdate(
            { user: new RegExp(`^${user1}$`, 'i') },
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

app.delete('/user/name/:user1', async (req, res) => {
    try {
        const { user1 } = req.params;
        const user = await User.findOneAndDelete(
            { user: new RegExp(`^${user1}$`, 'i') }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});
