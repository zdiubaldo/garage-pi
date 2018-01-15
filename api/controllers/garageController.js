'use strict';
var Gpio = require('onoff').Gpio; 
//var LED = new Gpio(14, 'out'); 


exports.door_status = function(req, res) {
  res.json({ message: 'door is open' });
};

exports.door_close = function(req, res) {
/*
  if (LED.readSync() === 0) { 
    LED.writeSync(1);
        res.json({ message: 'opened the door' });
  } else {
    LED.writeSync(0); 
    res.json({ message: 'closed the door' });
  }
*/
  res.json({ message: 'closed the door' });
};

exports.door_open = function(req, res) {
  res.json({ message: 'opened the door' });
};
