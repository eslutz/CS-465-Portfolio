const mongoose = require('mongoose');
const roomModel = mongoose.model('rooms');

// GET: /rooms - return list of all rooms
const roomList = async (req, res) => {
    roomModel
        .find({})
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({ message: 'rooms not found' });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

// GET: /rooms/:roomCode - return a single room
const roomsFindCode = async (req, res) => {
    roomModel
        .find({ code: req.params.roomCode })
        .exec((err, room) => {
            if (!room) {
                return res
                    .status(404)
                    .json({ message: 'room not found with code ' + req.params.roomCode });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(room);
            }
        });
};

module.exports = {
    roomList,
    roomsFindCode
};
