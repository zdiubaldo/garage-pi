'use strict';

exports.door_status = function(req, res) {
    res.json({ message: 'door is open' });
};

exports.door_close = function(req, res) {
    res.json({ message: 'closed the door' });
};

exports.door_open = function(req, res) {
    res.json({ message: 'opened the door' });
};
