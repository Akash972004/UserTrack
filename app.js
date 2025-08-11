const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/read', async (req, res) => {
    try {
        let users = await userModel.find();
        res.render('read', { users });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error reading users');
    }
});

app.post('/create', async (req, res) => {
    try {
        let { name, email, image } = req.body;

        // Validation
        if (!name || !email || !image) {
            return res.status(400).send('All fields are required');
        }

        await userModel.create({ name, email, image });
        res.redirect('/read');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating user');
    }
});

app.get('/delete/:id', async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.redirect('/read'); // Always redirect so /read shows full array
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting user');
    }
});
app.get('/edit/:id', async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.render('edit', { user });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error loading user for edit');
    }
});
app.post('/edit/:id', async (req, res) => {
    try {
        let { name, email, image } = req.body;

        // Validation
        if (!name || !email || !image) {
            return res.status(400).send('All fields are required');
        }

        await userModel.findByIdAndUpdate(req.params.id, {
            name,
            email,
            image
        });

        res.redirect('/read');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating user');
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
