'use strict';

function Thermostat(){
  this._currTemp = 20;
  this._minTemp = 10;
  this._powerSavingMode = true;
  this._maxTempPSMon = 25;
  this._maxTempPSMoff = 32;
  this.DEFAULT_TEMP = 20;
  this._currTemp = this.DEFAULT_TEMP;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.temp = function() {
  return this._currTemp;
};

Thermostat.prototype.tempUp = function() {
  if (this.isMaxTemp()) {
    return;
  }
  ++this._currTemp;
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

Thermostat.prototype.isMaxTemp = function () {
  if (this.isPowerSavingModeOn() === false) {
    return this._currTemp === this._maxTempPSMoff;
  }
  return this._currTemp === this._maxTempPSMon;
};

Thermostat.prototype.resetTemp = function() {
  this._currTemp = this.DEFAULT_TEMP;
}

Thermostat.prototype.energyUsage = function () {
  if (this._currTemp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low usage';
  }
  if (this._currTemp >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._currTemp <= this._maxTempPSMon) {
    return 'medium usage';
  }
  return 'high usage';

};
