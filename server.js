    const express = require('express');
    const {connectDB, disconnectDB} = require('./config/db'); //import database connection function
    const dotenv = require('dotenv');

    const path = require('path');
    const bodyParser = require('body-parser');

    // Load environment variables
    dotenv.config();

    //Import route models
    const CategoryRoutes = require('./routes/api/v2/CategoryRoutes'); //import category routes
    const BrandRoutes = require('./routes/api/v2/BrandRoutes');
    const ProductRoutes = require('./routes/api/v2/ProductRoutes');
    const AuthRoutes = require('./routes/api/v2/AuthRoutes');

    // Initialize the Express App
    const app = express();

    //middleware to parse JSON data
    app.use(express.json()); //enable JSON body parsing
    app.use(bodyParser.json()); //enable additional JSON body parsing
    app.use(express.static(path.join(__dirname,'public')));

    app.get('/no_image_available.jpg', (req, res) => {
        res.sendFile(path.join(__dirname, 'public/images/no_image_available.jpg'));
    })

    //connect to MongoDB
    connectDB(); //call the function to connect to the database 

    //define api routes
    app.use('/api/categories', CategoryRoutes); //set up category routes
    app.use('/api/brands', BrandRoutes);
    app.use('/api/products', ProductRoutes);
    app.use('/api/auth', AuthRoutes);

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
