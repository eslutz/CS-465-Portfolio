const mongoose = require('mongoose');
const model = mongoose.model('rooms');

// GET: /rooms - return list of all rooms
const roomList = async (req, res) => {
    try {
        const rooms = await model.find({});
        if (!rooms) {
            return res
                .status(404)
                .json({ "message": "rooms not found" });
        } else {
            return res
                .status(200)
                .json(rooms);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

// GET: /rooms/:roomCode - return a single room
const roomsFindCode = async (req, res) => {
    try {
        const room = await model.find({ 'code': req.params.roomCode });
        if (!room) {
            return res
                .status(404)
                .json({ "message": "room not found" });
        } else {
            return res
                .status(200)
                .json(room);
        }
    } catch (err) {
        return res
            .status(404)
            .json(err);
    }
};

module.exports = {
    roomList,
    roomsFindCode
};
