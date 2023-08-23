// Import dependencies
const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Specify the CORS configuration
let corsOptions = {
    origin: 'http://localhost:3000', // This should be your client-side URL
    optionsSuccessStatus: 200,
    credentials: true // This allows the session cookie to be sent back and forth
};

// Use the CORS middleware, passing in the options
app.use(cors(corsOptions));

// Route to read cookies
app.get('/read-cookie', async (req, res) => {
    // Read cookies from the request
    const cookies = req.headers.cookie;
    console.log('Cookies:', cookies);
    res.send(cookies);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));