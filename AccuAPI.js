$(document).ready(function(){
    $('#weatherButton').click(function() {
		fetchWeather();
	});
	function fetchWeather(){
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback", jsonpCallback: "callback",
            url: "http://apidev.accuweather.com/forecasts/v1/hourly/24hour/335315?apikey=PSUHackathon112016",
            cache: false,
            success: function(data) {
                //alert(JSON.stringify(data[0].Temperature.Value + data[0].Temperature.Unit))
                
                //  1st column
				var temp1 = JSON.stringify(data[0].Temperature.Value + " " + data[0].Temperature.Unit);
				temp1 = temp1.substring(1,(temp1.length)-1);
                $("#hr0-current").text("Current Temperature: " + temp1);
				var condition = JSON.stringify(data[0].IconPhrase);
				condition = condition.substring(1,(condition.length)-1);
                $("#hr0-precip").text("Conditions are " + condition);
                
            },//end success function
			error: function(){
				setTimeout(fetchWeather,100);
			}
        });//end ajax call
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback", jsonpCallback: "callback",
            url: "http://apidev.accuweather.com/forecasts/v1/daily/5day/335315?apikey=PSUHackathon112016",
            cache: false,
            success: function(data1) {
                //alert(JSON.stringify(data1))
                //$("#hr0-high").text("Test of 5 day forecast " + JSON.stringify(data1));
                
                //  2nd column
                $("#hr1-high").text("High: " + JSON.stringify(data1.DailyForecasts[0].Temperature.Maximum.Value + " " + data1.DailyForecasts[0].Temperature.Maximum.Unit));
                $("#hr1-low").text("Low: " + JSON.stringify(data1.DailyForecasts[0].Temperature.Minimum.Value + " " + data1.DailyForecasts[0].Temperature.Minimum.Unit));
				$("#hr1-time").text("Date: "+ JSON.stringify(data1.DailyForecasts[0].Date));
                
                //  3rd column
                $("#hr2-high").text("High: " + JSON.stringify(data1.DailyForecasts[1].Temperature.Maximum.Value + " " + data1.DailyForecasts[1].Temperature.Maximum.Unit));
                $("#hr2-low").text("Low: " + JSON.stringify(data1.DailyForecasts[1].Temperature.Minimum.Value + " " + data1.DailyForecasts[1].Temperature.Minimum.Unit));
				$("#hr2-time").text("Date: "+ JSON.stringify(data1.DailyForecasts[1].Date));
				
				//  4th column
                $("#hr3-high").text("High: " + JSON.stringify(data1.DailyForecasts[2].Temperature.Maximum.Value + " " + data1.DailyForecasts[2].Temperature.Maximum.Unit));
                $("#hr3-low").text("Low: " + JSON.stringify(data1.DailyForecasts[2].Temperature.Minimum.Value + " " + data1.DailyForecasts[2].Temperature.Minimum.Unit));
				$("#hr3-time").text("Date: "+ JSON.stringify(data1.DailyForecasts[2].Date));
                  
            },//end success function
			error: function(){
				setTimeout(fetchWeather,100);
			}
        });//end ajax call
	}//end function
  
});   


