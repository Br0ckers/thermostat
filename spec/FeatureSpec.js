'use strict';


describe('Feature test', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat is set to 20', function() {
    expect(thermostat.temp()).toEqual(20)
  });

  it('Temperture UP set temp to 21',function() {
    thermostat.tempUp();
    expect(thermostat.temp()).toEqual(21)
  });

  it('Temperture Down set temp to 19',function() {
    thermostat.tempDown();
    expect(thermostat.temp()).toEqual(19)
  });

  it('Temperature check minimum value 10', function() {
    for (var i = 0; i < 10; i++) thermostat.tempDown();
    expect(thermostat.temp()).toEqual(10)
  });

  it('Temperature returns minimum temp message', function() {
    for (var i = 0; i < 11; i++) thermostat.tempDown();
    expect(thermostat.tempDown()).toEqual("The minimum temperature cannot be less than 10");
  });

  it('Temperature check maximum value 25 when power save is enabled', function() {
    for (var i = 0; i < 6; i++) thermostat.tempUp();
    expect(thermostat.temp()).toEqual(25)
  });


});
