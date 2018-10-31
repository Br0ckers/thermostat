'use strict';

function Thermostat(){
  this._currTemp = 20;
  this._minTemp = 10;
  this._powerSavingMode = true;
  this._maxTempPSMon = 25
  this._maxTempPSMoff = 32
}

Thermostat.prototype.temp = function() {
  return this._currTemp;
};

Thermostat.prototype.tempUp = function() {
  if (this._currTemp < 25) {
    ++this._currTemp;
  } else {
    return "The maximum temperture in economy mode cannot exceed 25";
  }
};

Thermostat.prototype.tempDown = function() {
  if (this._currTemp > this._minTemp) {
    --this._currTemp;
  } else {
    return "The minimum temperature cannot be less than 10";
  }
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powerSavingMode;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this._powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this._powerSavingMode = true;
};
