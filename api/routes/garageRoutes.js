'use strict';
module.exports = function(app) {
    var garage = require('../controllers/garageController');

    // garage routes
    app.route('/tasks')
	.get(garage.door_status)
	.post(garage.door_close)
	.post(garage.door_open)

};
