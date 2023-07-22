const mongoose = require('mongoose');
const model = mongoose.model('rooms');

// GET: /rooms - return list of all rooms
const roomList = async (req, res) => {
    model
        .find({}) // Empty filter to return all rooms
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({ "message": "rooms not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                console.log(rooms);
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

// GET: /rooms/:roomCode - return a single room
const roomFindByCode = async (req, res) => {
    model
        .find({ 'code': req.params.roomCode })
        .exec((err, room) => {
            if (!room) {
                return res
                    .status(404)
                    .json({ "message": "room not found" });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                console.log(room);
                return res
                    .status(200)
                    .json(room);
            }
        });
};

module.exports = {
    roomList,
    roomFindByCode
};
