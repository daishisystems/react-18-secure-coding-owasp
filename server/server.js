// Import dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize the Express application
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Specify the CORS configuration
let corsOptions = {
    origin: '*', // This should be your client-side URL
    optionsSuccessStatus: 200,
    credentials: true // This allows the session cookie to be sent back and forth
};

// Use the CORS middleware, passing in the options
app.use(cors(corsOptions));

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('myCookie', 'Hello World', {
        httpOnly: true,
        sameSite: 'none',
        secure: true
    });
    res.send('Cookie has been set!');
});

// Route to read cookies
app.get('/read-cookie', async (req, res) => {
    // Read cookies from the request
    const cookies = req.headers.cookie;
    console.log('Cookies:', cookies);
    res.send(cookies);
});


app.post('/credit-card', (req, res) => {
    console.log('credit card digits:', req.body);
    res.send('credit card number stolen!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));