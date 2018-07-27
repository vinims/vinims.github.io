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




function bozemanweather(){
 var weatherRequest = new XMLHttpRequest();

        var apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5641727&APPID=6a274f6ccb2c7781e5011ec433a0f665&units=Imperial";

        weatherRequest.open('GET', apiURL, true);
        weatherRequest.send();   

        weatherRequest.onload =  function () {
          var weatherData = JSON.parse(weatherRequest.responseText);
            
            var apiWdescription = weatherData.list[0].weather[0].main;
            var apiTempC = Math.round(weatherData.list[0].main.temp);
            var apiIcon = weatherData.list[0].weather[0].icon;
            var iconURL = '//openweathermap.org/img/w/' + apiIcon + '.png';
            
            document.getElementById('weathercondition').src = iconURL;
            document.getElementById('weathertemp').innerHTML = apiTempC + ' °F';
            
        };
}
