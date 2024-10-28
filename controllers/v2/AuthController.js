const User = require('../../models/User');

const jwt = require('jsonwebtoken');

// register
exports.register = async (req, res) => {

    const { username, email, password } = req.body;

    const user = new User({ username, email, password });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });

};

// login
exports.login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password){
        return res.status(401).json({ message: 'Invalid credentials'})
    }

    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({ token });

};

exports.logout = (req, res) => {

    res.json({message: 'Logout successful'});
};
