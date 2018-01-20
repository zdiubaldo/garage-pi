'use strict';
var Gpio = require('onoff').Gpio;
var LED = new Gpio(14, 'out');
var doorSensor  = new Gpio(23, 'out');


function isDoorOpen() {
  if (doorSensor.readSync() === 1) { 
    console.log('door is closed')
    return true;
  } else {
    console.log('door is open')
    return false;
  }

}

exports.door_status = function(req, res) {

  var doorOpen = isDoorOpen();
  
  if (doorOpen === true) {
    res.json({ message: 'door is open' });
  } else {
    res.json({ message: 'door is closed' });
  }

};

exports.door_close = function(req, res) {
  if (LED.readSync() === 0) { 
    LED.writeSync(1);
        res.json({ message: 'opened the door' });
  } else {
    LED.writeSync(0); 
    res.json({ message: 'closed the door' });
  }
};

exports.door_open = function(req, res) {
  res.json({ message: 'opened the door' });
};
