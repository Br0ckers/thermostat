'use strict';

describe('Feature test', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('thermostat is set to 20', function() {
    expect(thermostat.temp()).toEqual(20)
  });

});