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
                $("#hr1-high").text("High: " + JSON.stringify(data[5].Temperature.Value + " " + data[5].Temperature.Unit));
                $("#hr1-low").text("Low: " + JSON.stringify(data[5].Temperature.Value + " " + data[5].Temperature.Unit));
                
                //  3rd column
                $("#hr2-high").text("High: " + JSON.stringify(data[11].Temperature.Value + " " +data[11].Temperature.Unit));
                $("#hr2-low").text("Low: " + JSON.stringify(data[11].Temperature.Value + " " + data[11].Temperature.Unit));
                
                //  4th column
                $("#hr3-high").text("High: " + JSON.stringify(data[17].Temperature.Value + " " +data[17].Temperature.Unit));
                $("#hr3-low").text("Low: " + JSON.stringify(data[17].Temperature.Value + " " + data[17].Temperature.Unit));
            }
        });
    });
});
  
        


