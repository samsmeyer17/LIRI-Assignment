// imports the dotenv package and configures it
require("dotenv").config();
// imports the keys.js file and stores it in a variable called keys
var keys = require("./keys.js")
//  imports spotify api and stores it in variable Spotify
var Spotify = require('node-spotify-api')
// creates a new api instance with the spotify api key and stores it in variable spotify
var spotify = new Spotify(keys.spotify);
// import axios
var axios = require("axios");
// import moment
var moment = require('moment');
// import fs
var fs = require('fs');


// function that gets artist name
var artistName = function (artist) {
  return artist.name;
};

// function that runs spotify search
var spotifySearch = function (songName) {
  // if statement saying that if songName is undefined then set a default value to "What's my age again"
  if (songName === undefined) {
    songName = "What's my age again";
  }
  // search the spotify api...
  spotify.search(
    {
      // set the key value pairs of type and query to "track" and songName respectively
      type: "track",
      query: songName
    },
    function (err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(artistName))
        console.log("song name: " + songs[i].name);
        console.log('preview song: ' + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("------------------------------");
      }
    }
  );
};

var getMyBands = function (artist) {
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(queryURL).then(
    function (response) {
      var jsonData = response.data;

      if (!jsonData.length) {
        console.log("No results found for " + artist);
        return;
      }

      console.log("Upcoming concerts for " + artist + ":");

      for (var i = 0; i < jsonData.length; i++) {
        var show = jsonData[i];

        // Print data about each concert
        // If a concert doesn't have a region, display the country instead
        // Use moment to format the date
        console.log(
          show.venue.city +
          "," +
          (show.venue.region || show.venue.country) +
          " at " +
          show.venue.name +
          " " +
          moment(show.datetime).format("MM/DD/YYYY")
        );
      }
    }
  );
};

// Function for running a Movie Search
var getMeMovie = function (movieName) {
  // if statement stating that if movieName, which is the argument input for the function is undefined, set movieName to "Mr Nobody" as a default search
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }

  // sets a variable called urlHit equal to the omdb url with the movieName variable input as the movie search in the URL
  var urlHit =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";
  // create an axios get route with argument set as the variable urlHit with a .then callback function
  axios.get(urlHit).then(
    // callback function that takes in the response object from the api call
    function (response) {
      // sets the data object from the response object as a variable called jsonData
      var jsonData = response.data;
      // console log the title of the movie response
      console.log("Title: " + jsonData.Title);
      // console log the year of the movie response
      console.log("Year: " + jsonData.Year);
      // console log the rated of the movie response
      console.log("Rated: " + jsonData.Rated);
      // console log the IMDB rating of the movie response
      console.log("IMDB Rating: " + jsonData.imdbRating);
      // console log the country of the movie response
      console.log("Country: " + jsonData.Country);
      // console log the language of the movie response
      console.log("Language: " + jsonData.Language);
      // console log the plot of the movie response
      console.log("Plot: " + jsonData.Plot);
      // console log the actors of the movie response
      console.log("Actors: " + jsonData.Actors);
      // console log the rotten tomatoes rating of the movie response
      console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
    }
  );
};

// Function for running a command based on text file
var doWhatItSays = function () {
  fs.readFile("random.txt", "utf8", function (error, data) {
    console.log(data);

    var dataArr = data.split(",");

    if (dataArr.length === 2) {
      pick(dataArr[0], dataArr[1]);
    } else if (dataArr.length === 1) {
      pick(dataArr[0]);
    }
  });
};

// Function for determining which command is executed
var pick = function (caseData, functionData) {
  switch (caseData) {
    case "concert-this":
      getMyBands(functionData);
      break;
    case "spotify-this-song":
      spotifySearch(functionData);
      break;
    case "movie-this":
      getMeMovie(functionData);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("LIRI doesn't know that");
  }
};

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (argOne, argTwo) {
  pick(argOne, argTwo);
};

// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv.slice(3).join(" "));