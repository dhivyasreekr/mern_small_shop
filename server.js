const express = require('express');

const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize the Express App
const app = express();

// Define a test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});
