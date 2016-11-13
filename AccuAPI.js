$(document).ready(function(){
    $('#weatherButton').click(function() {
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            jsonp: "callback", jsonpCallback: "callback",
            url: "http://apidev.accuweather.com/forecasts/v1/hourly/24hour/335315?apikey=PSUHackathon112016",
            cache: false,
            success: function(data) {
                //alert(JSON.stringify(data[0].Temperature.Value + data[0].Temperature.Unit))
                
                //  1st column
                $("#hr0-high").text("High: " + JSON.stringify(data[0].DateTime));
                //$("#hr0-high").text("High: " + JSON.stringify(data[0].Temperature.Value + " " + data[0].Temperature.Unit));
                $("#hr0-low").text("Low: " + JSON.stringify(data[0].Temperature.Value + " " + data[0].Temperature.Unit));
                
                
                //  2nd column
                $("#hr1-high").text("High: " + JSON.stringify(data[23].Temperature.Value + " " + data[23].Temperature.Unit));
                $("#hr1-low").text("Low: " + JSON.stringify(data[23].Temperature.Value + " " + data[23].Temperature.Unit));
                
                /*
                //  3rd column
                $("#hr2-high").text("High: " + JSON.stringify(data[11].Temperature.Value + " " +data[11].Temperature.Unit));
                $("#hr2-low").text("Low: " + JSON.stringify(data[11].Temperature.Value + " " + data[11].Temperature.Unit));
                
                //  4th column
                $("#hr3-high").text("High: " + JSON.stringify(data[17].Temperature.Value + " " +data[17].Temperature.Unit));
                $("#hr3-low").text("Low: " + JSON.stringify(data[17].Temperature.Value + " " + data[17].Temperature.Unit));
                */
            }//end success function
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
                
                //  3rd column
                $("#hr2-high").text("High: " + JSON.stringify(data1.DailyForecasts.Temperature[0].Maximum.Value + " " +data1.DailyForecasts.Temperature[0].Maximum.Unit));
                $("#hr2-time").text("Date: "+ JSON.stringify(data1.DailyForecasts.Date[0]);
                //$("#hr2-low").text("Low: " + JSON.stringify(data1.DailyForecasts[0].Temperature.Minimum.Value + " " +data1.DailyForecasts[0].Temperature.Minimum.Unit));
                /*
                //  4th column
                $("#hr3-high").text("High: " + JSON.stringify(data[17].Temperature.Value + " " +data[17].Temperature.Unit));
                $("#hr3-low").text("Low: " + JSON.stringify(data[17].Temperature.Value + " " + data[17].Temperature.Unit));
                */
                
            }//end success function
        });//end ajax call
    });//end click
});//end function
  
        


