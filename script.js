var apikey = '2e9e3402c84c17a1b6756c015c8e478d'
var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
var locationQuery = 'Dallas,US'
var bigDiv = document.getElementById('mainDiv')
$(document).ready(function (){

    var input = $('<input>');
    
    bigDiv.append(input)


//ajax requesting data from weather 
    $.ajax({
        url: baseUrl + locationQuery + '&appId=' + apikey,
        method: 'GET'
    }).then(function (results){
        //data
        console.log(results)
        //object traversed vars
        var humidity = results.main.humidity 
        var city = results.name 
        var windSpeed = results.wind.speed
        var temp = results.main.temp
       console.log(temp)
    var largeDiv = $('<div>')
    var largeHeader = $('<h1>').text(city)
    //largeDiv.append(largeHeader)
    //bigDiv.append(largeDiv)
    })


})





/*things i need to grab
city c
date
icon
temp  c change to farenhieight 
humidity c
wind speed c
uv index*/

//STEPS 

/*make a div for the big weather 
put a div that holds an UL inside big weather div ..... ul > div > bigWeather div
UL has 
-temp  c change to farenhieight 
-humidity c
-wind speed c
-uv index*/


/*then create another div called 5-day 
make a row
put 5 columns in that row 
col msut have 
-date
-icon
-temp
-humidity 
then append those columns to the row............ columns > div > 5-day div
then append that row to the 5-day div */

/*make a button that starts all of the above
when clicked it clears all divs exceptttt
the div that we must create that saves search history using local storage*/

/*problems
cant make an input tag or anything at that 
how to get future date... how to get current
how to change temp to farenheight */
