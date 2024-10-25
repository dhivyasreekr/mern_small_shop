    const express = require('express');
    const {connectDB, disconnectDB} = require('./config/db'); //import database connection function
    const dotenv = require('dotenv');

    // const path = require('path');
    const bodyParser = require('body-parser');

    // Load environment variables
    dotenv.config();

    //Import route models
    const CategoryRoutes = require('./routes/api/v2/CategoryRoutes'); //import category routes

    // Initialize the Express App
    const app = express();

    //middleware to parse JSON data
    app.use(express.json()); //enable JSON body parsing
    app.use(bodyParser.json()); //enable additional JSON body parsing

    //connect to MongoDB
    connectDB(); //call the function to connect to the database 

    //define api routes
    app.use('/api/categories', CategoryRoutes); //set up category routes

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

    // Graceful shutdown
    process.on('SIGINT', async () => {
        console.log("Shutting down server...");
        await disconnectDB(); // Call function to disconnect from the database
        server.close(() => {
            console.log("Server closed.");
            process.exit(0);
        });
    });
