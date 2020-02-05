var apikey = '2e9e3402c84c17a1b6756c015c8e478d'
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
var locationQuery = 'Dallas,US'
var bigDiv = document.getElementById('mainDiv')
$(document).ready(function (){

    


//ajax requesting data from weather 
    $.ajax({
        url: baseUrl + locationQuery + '&appId=' + apikey,
        method: 'GET'
    })
    .then(function (results){
        //data
        console.log(results)
        //object traversed vars
        var humidity = results.main.humidity 
        var city = results.name 
        var windSpeed = results.wind.speed
        var tempT = (results.main.temp - 273.15) * 1.80 + 32;

        
        
        $('#cityName').html('<h1>' + city  + '</h1>')
        $('.temp').text("tempature (f): " + tempT)
        $('#windSpeedDiv').text('wind speed:  ' + windSpeed + ' MPH')
        $('#humidDiv').text('humidity: ' + humidity + '%')
        
        
    })


})


/*get the uv index, weather image, and current date (moment.js)
make input and button week (06 act 06)
do 5 day forcast
*/

//button has to start the ajax and log past input to local storage 




