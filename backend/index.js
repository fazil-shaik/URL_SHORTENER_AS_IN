const express = require('express');
const axios = require('axios');

const app = express();
const port = 5173; 
app.use(express.json());

// Define route handler for POST /api/V8/urlshortner
app.post('/api/V8/urlshortner', async (req, res) => {
    try {
        // Forward the request to the actual API endpoint
        const response = await axios.post('https://short-yrld.onrender.com/api/V8/urlshortner', req.body);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).json(error.response.data);
        } else if (error.request) {
            res.status(500).json({ message: 'No response from server' });
        } else {
            res.status(500).json({ message: 'Error setting up request' });
        }
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
