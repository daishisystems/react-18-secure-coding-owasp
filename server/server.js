const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware to parse JSON requests and handle CORS
app.use(bodyParser.json());
app.use(cors());

app.post('/log', (req, res) => {
    console.log('Received key:', req.body.key);
    res.json({
        status: 'Key logged'
    });
});

app.listen(3003, () => {
    console.log('Server listening on port 3003');
});