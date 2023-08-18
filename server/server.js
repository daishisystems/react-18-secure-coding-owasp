const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const PORT = 3003;

// Middleware to parse JSON bodies from requests
app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allowing traffic from React's default development server address
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'CSRF-Token'],
    optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// In-memory storage of CSRF tokens for simplicity. 
const csrfTokens = [];

app.get('/csrf-token', (req, res) => {
    const token = crypto.randomBytes(64).toString('hex');
    csrfTokens.push(token);
    res.send(token);
});

app.post('/updateProfile', (req, res) => {
    const {
        name
    } = req.body;
    const providedToken = req.header('CSRF-Token');

    // Validate the CSRF token
    if (!providedToken || !csrfTokens.includes(providedToken)) {
        return res.status(403).json({
            message: 'Invalid CSRF token.'
        });
    }

    // Remove used token from the list
    const index = csrfTokens.indexOf(providedToken);
    if (index > -1) {
        csrfTokens.splice(index, 1);
    }

    // Log the new name for demonstration
    console.log(`Updated name: ${name}`);
    res.json({
        message: 'Profile updated successfully!'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});