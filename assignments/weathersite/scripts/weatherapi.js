var weatherRequest = new XMLHttpRequest();

var apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=6a274f6ccb2c7781e5011ec433a0f665&units=Imperial";

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();   

weatherRequest.onload =  function () {
  var weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
    
    var temp = weatherData.list[0].main.temp;
    document.getElementById('current-temp').innerHTML = temp;
};




