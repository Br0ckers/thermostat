'use strict';

describe('test Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Check default thermostat value is set to 20', function() {
    expect(thermostat.temp()).toEqual(20);
  });

  it('Temperture UP set temp to 21',function() {
    thermostat.tempUp();
    expect(thermostat.temp()).toEqual(21);
  });

  it('Temperture Down set temp to 19',function() {
    thermostat.tempDown();
    expect(thermostat.temp()).toEqual(19);
  });

  it('Temperature check minimum value 10', function() {
    for (var i = 0; i < 10; i++) thermostat.tempDown();
    expect(thermostat.temp()).toEqual(10);
  });

  it('Temperature returns minimum temp message', function() {
    for (var i = 0; i < 11; i++) thermostat.tempDown();
    expect(thermostat.tempDown()).toEqual("The minimum temperature cannot be less than 10");
  });

  it('Check if power saving mode is enabled (default option)', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('Switch Power Saving Mode off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });
  it('Switch Power Saving Mode on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });









});
