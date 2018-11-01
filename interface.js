$(document).ready(function() {

displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
    })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=675ab124523a03a77426a8b51dff3720';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temp').text(thermostat._currTemp);
    $('#temp').attr('class', thermostat.energyUsage());
  };

  $('#temp-up').click(function() {
    thermostat.tempUp();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.tempDown();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#psm-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  })

  $('#psm-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temp').text(thermostat._currTemp);
    $('#temp').attr('class', thermostat.energyUsage());
  };

});
