const passport = require('passport');
const mongoose = require('mongoose');
const userModel = mongoose.model('users');

const register = (req, res) => {
    // Check if all fields are filled
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({message: 'All fields required'});
    }

    // Create new user
    const user = new userModel();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    // Save user
    user.save((err) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            const token = user.generateJwt();
            res
                .status(200)
                .json({ token });
        }
    })
};

const login = (req, res) => {
    // Check if all fields are filled
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ message: 'All fields required' });
    }

    // Authenticate user
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res
                .status(404)
                .json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res
                .status(200)
                .json({ token });
        } else {
            res
                .status(401)
                .json(info);
        }
    })(req, res);
};

module.exports = {
    register,
    login
};