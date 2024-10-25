const mongoose = require('mongoose');
require('dotenv').config(); //ensure environment variables are loaded

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); // Exit process with failure
    }
};

const disconnectDB = async () => {

    try {
        await mongoose.disconnect();
        console.log("MongoDB disconnected successfully");
    } catch (err) {
        console.error('MongoDB connection failed', err.message);
        process.exit(1);
    }
};

module.exports = {connectDB, disconnectDB};