
$(document).ready(function (){
    //btn
    $("#find-city").on("click", function(event){    
        
        
        var apikey = '2e9e3402c84c17a1b6756c015c8e478d'
        var baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
        var locationQuery = $("#city-input").val();
        var bigDiv = document.getElementById('mainDiv')
        var currentDate = moment().format("MMM/ Do /YY"); 



    event.preventDefault();

    //ajax requesting data from weather 
        $.ajax({
            url: baseUrl + locationQuery + '&appId=' + apikey,
            method: 'GET'
        }) //.then(function(response){

            //$("#mainDiv").text(JSON.stringify(response));

        
       
       
       
        .then(function (results){
            //data
            console.log(results)
            //object traversed vars
            var humidity = results.main.humidity 
            var city = results.name 
            var windSpeed = results.wind.speed
            var tempT = (results.main.temp - 273.15) * 1.80 + 32;
            
            
            
            $('#cityName').html('<h1>' + city  +  " " + currentDate + '</h1>')
            $('.temp').text("tempature (f): " + tempT)
            $('#windSpeedDiv').text('wind speed:  ' + windSpeed + ' MPH')
            $('#humidDiv').text('humidity: ' + humidity + '%')
            
            


            var uvUrl = 'http://api.openweathermap.org/data/2.5/uvi?appid='
           // {lat}&lon={lon}
            var lat = results.coord.lat
            
            var lon = results.coord.lon
            

            $.ajax({
                url: uvUrl + apikey + '&lat=' + lat + '&lon=' + lon,
                method: 'GET'


            }).then(function (hey){
                console.log(hey)
                var uvIndex = hey.value
                console.log(uvIndex)
                $('#uvDiv').text('UV index ' + uvIndex)
                // end 2nd ajax .then
            })

            // end 1st ajax .then

        })
    
    
    })

// end button

})
    




/*get the uv index, weather image, and current date (moment.js)
make input and button week (06 act 06)
do 5 day forcast
*/

//button has to start the ajax and log past input to local storage 




