var fs = require('fs');
var keys = require('keys.js');
var twitter = require('twitter');
var newTweet = new twitter(keys);
var spotify = require('spotify');

/*
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (var i = 0; i < tweets.length; i++){
	var date = tweets[i].created_at;
	console.log(tweets)
	console.log("@dlph21: " + tweets[i].text + "Created At: " + date.substring(0, 19));
  	}
  } else{
	console.log('Twitter Error');
  }
}); 
*/
function showTweet(){
var params = {
    screen_name: 'dlph21'
} && {
    count: 20
};

if (process.argv[2] === "my-tweets"){
   tweet.get('statuses/user_timeline', params, getData);
   function getData(error, data, response){
   	var tweets = data;
   	for(var i = 0; i < tweets.length; i++){
   		console.log(tweets.[i].text);
   	}
   }
};


function spotifySong(song){
  spotify.search({ type: 'track', query: song}, function(error, data){
    if(!error){
      for(var i = 0; i < data.tracks.items.length; i++){
        var songData = data.tracks.items[i];
        console.log("Artist: " + songData.artists[0].name);
        console.log("Song: " + songData.name);
        console.log("Preview URL: " + songData.preview_url);
        console.log("Album: " + songData.album.name);
        console.log("-----------------------");
      }
    } else{
      console.log('Spotify Error');
    }
  });
}

}

function omdbData(movie){
  var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&plot=short&tomatoes=true';

  request(omdbURL, function (error, response, body){
    if(!error && response.statusCode == 200){
      var body = JSON.parse(body);

      console.log("Title: " + body.Title);
      console.log("Release Year: " + body.Year);
      console.log("IMdB Rating: " + body.imdbRating);
      console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
      console.log("Country: " + body.Country);
      console.log("Language: " + body.Language);
      console.log("Plot: " + body.Plot);
      console.log("Actors: " + body.Actors);

      fs.appendFile('log.txt', "Title: " + body.Title);
      fs.appendFile('log.txt', "Release Year: " + body.Year);
      fs.appendFile('log.txt', "IMdB Rating: " + body.imdbRating);
      fs.appendFile('log.txt', "Rotten Tomatoes Rating: " + body.tomatoRating);
      fs.appendFile('log.txt', "Country: " + body.Country);
      fs.appendFile('log.txt', "Language: " + body.Language);
      fs.appendFile('log.txt', "Plot: " + body.Plot);
      fs.appendFile('log.txt', "Actors: " + body.Actors);
 

    } else{
      console.log('omdbData Error')
    }
  });

}
