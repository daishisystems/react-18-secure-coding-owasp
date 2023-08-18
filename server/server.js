const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies from requests
app.use(bodyParser.json());

app.post('/updateProfile', (req, res) => {
    const {
        name
    } = req.body;

    // For demonstration purposes, we'll just log the new name and send a confirmation response.
    // In a real-world scenario, you'd likely be updating this in a database.
    console.log(`Updated name: ${name}`);
    res.json({
        status: 'success',
        message: 'Profile updated!'
    });
});

app.listen(3003, () => {
    console.log(`Server is running at http://localhost:3003`);
});