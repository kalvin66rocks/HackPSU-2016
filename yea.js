//var spotifyApi = new SpotifyWebApi();
//var SpotifyWebApi = require('spotify-web-api-node');
//var s = new Spotify();

//var spotifyApi = new SpotifyWebApi({
//clientID : '5a570e66ecf54c6a9bc5dc540af47b06',
//clientSecret : 'f813d30f6c9b4623859319acc1539a60'
//redirectUri : 'http://www.something.com/something'
//});

//spotifyApi.setAccessToken('<your_access_token_homie>');

//set a promises/A+ library
//spotifyAPI.setPromiseImplementation(Q);

//MAINLY JUST FOR TESTING
// get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
//spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
//  if (err) console.error(err);
//  else console.log('Artist albums', data);
//});

// get Elvis' albums, using Promises through Promise, Q or when
//spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
//  .then(function(data) {
//    console.log('Artist albums', data);
//  }, function(err) {
//    console.error(err);
//  });
$(document).ready(function(){
    $('#button1').click(function() {
       
	$('#JoesDiv').html("<iframe src=\"https://embed.spotify.com/?uri=spotify%3Aalbum%3A4bPT6Q8ppaSNppk1kbEbLl\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\"></iframe>");
                
    });//end click
});//end function
