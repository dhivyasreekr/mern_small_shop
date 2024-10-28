const mongoose = require("mongoose");

// user Schema
const userSchema  = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required: true},
}, { timestamp: true });

const User = mongoose.model('User', userSchema);

module.exports = User;