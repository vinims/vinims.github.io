var weatherRequest = new XMLHttpRequest();

var apiURL = "//api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=6a274f6ccb2c7781e5011ec433a0f665&units=Imperial";

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();   

weatherRequest.onload =  function () {
  var weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
    
    var temp = weatherData.list[0].main.temp;
    document.getElementById('current-temp').innerHTML = temp;
};




function franklinweather(){
 var weatherRequest = new XMLHttpRequest();

        var apiURL = "//api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=6a274f6ccb2c7781e5011ec433a0f665&units=Imperial";

        weatherRequest.open('GET', apiURL, true);
        weatherRequest.send();   

        weatherRequest.onload =  function () {
          var weatherData = JSON.parse(weatherRequest.responseText);
            
            var apiWdescription = weatherData.list[0].weather[0].main;
            var apiTempC = weatherData.list[0].main.temp;
            var apihighT = weatherData.list[0].main.temp_max;
            var apiLowT = weatherData.list[0].main.temp_min;
            var apiwindS = weatherData.list[0].wind.speed;
            var apiIcon = weatherData.list[0].weather[0].icon;
            var iconURL = '//openweathermap.org/img/w/' + apiIcon + '.png';
            
            document.getElementById('Wdescription').innerHTML = apiWdescription;
            document.getElementById('TempC').innerHTML = apiTempC + ' °F';
            document.getElementById('highT').innerHTML = apihighT + ' °F';
            document.getElementById('LowT').innerHTML = apiLowT + ' °F';
            document.getElementById('windS').innerHTML = apiwindS + ' mpg SW';
            document.getElementById('sunemot').src = iconURL;
        };
}

function greenvillefunction(){
    var weatherRequest = new XMLHttpRequest();

        var apiURL = "//api.openweathermap.org/data/2.5/forecast?id=4580543&APPID=6a274f6ccb2c7781e5011ec433a0f665&units=Imperial";

        weatherRequest.open('GET', apiURL, true);
        weatherRequest.send();

        weatherRequest.onload = function() {
            var weatherData = JSON.parse(weatherRequest.responseText);

            var apiWdescription = weatherData.list[0].weather[0].main;
            var apiTempC = weatherData.list[0].main.temp;
            var apihighT = weatherData.list[0].main.temp_max;
            var apiLowT = weatherData.list[0].main.temp_min;
            var apiwindS = weatherData.list[0].wind.speed;
            var apiIcon = weatherData.list[0].weather[0].icon;
            var iconURL = '//openweathermap.org/img/w/' + apiIcon + '.png';

            document.getElementById('Wdescription').innerHTML = apiWdescription;
            document.getElementById('TempC').innerHTML = apiTempC + ' °F';
            document.getElementById('highT').innerHTML = apihighT + ' °F';
            document.getElementById('LowT').innerHTML = apiLowT + ' °F';
            document.getElementById('windS').innerHTML = apiwindS + ' mpg SW';
            document.getElementById('sunemot').src = iconURL;
        };
}

function springvillefunction(){
    var weatherRequest = new XMLHttpRequest();

        var apiURL = "//api.openweathermap.org/data/2.5/forecast?id=4409896&APPID=6a274f6ccb2c7781e5011ec433a0f665&units=Imperial";

        weatherRequest.open('GET', apiURL, true);
        weatherRequest.send();

        weatherRequest.onload = function() {
            var weatherData = JSON.parse(weatherRequest.responseText);

            var apiWdescription = weatherData.list[0].weather[0].main;
            var apiTempC = weatherData.list[0].main.temp;
            var apihighT = weatherData.list[0].main.temp_max;
            var apiLowT = weatherData.list[0].main.temp_min;
            var apiwindS = weatherData.list[0].wind.speed;
            var apiIcon = weatherData.list[0].weather[0].icon;
            var iconURL = '//openweathermap.org/img/w/' + apiIcon + '.png';

            document.getElementById('Wdescription').innerHTML = apiWdescription;
            document.getElementById('TempC').innerHTML = apiTempC + ' °F';
            document.getElementById('highT').innerHTML = apihighT + ' °F';
            document.getElementById('LowT').innerHTML = apiLowT + ' °F';
            document.getElementById('windS').innerHTML = apiwindS + ' mpg SW';
            document.getElementById('sunemot').src = iconURL;
        };
}


