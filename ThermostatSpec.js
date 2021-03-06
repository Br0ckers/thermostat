'use strict';

describe('Test Thermostat', function() {
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

  describe('When Power Saving Mode is enabled', function() {
    it('Test max temp is 25', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.tempUp();
      }
      expect(thermostat.temp()).toEqual(25);
    });
  });

  describe('When Power Saving Mode is disabled', function() {
    it('Test max temp is 32', function() {
      thermostat.switchPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.tempUp();
      }
      expect(thermostat.temp()).toEqual(32);
    });
  });

  it('Thermostat can be reset to default', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.tempUp();
    }
    thermostat.resetTemp();
    expect(thermostat.temp()).toEqual(20);
  });

  describe('Usage Levels', function() {
    describe('Temperture below 18 Deg', function() {
      it('low usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.tempDown();
        }
        expect(thermostat.energyUsage()).toEqual('low usage');
      });
    });

    describe('Temperture is between 18 and 25 Deg', function() {
      it('medium usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium usage');
      });
    });
    
    describe('Temperture at any other value', function() {
      it('high usage', function() {
        thermostat._powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.tempUp();
        }
        expect(thermostat.energyUsage()).toEqual('high usage');
      });
    });
  });








});
