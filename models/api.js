const axios = require("axios");
const fs = require("fs");
const omdbKey = process.env.OMDB_KEY;
// Create the Movie constructor
const Moviesearch = function() {};

Moviesearch.prototype.findMovie = function(details) {
  const queryURL = `https://www.omdbapi.com/?t=${details}&apikey=${omdbKey}`;

  axios.get(queryURL).then(response => {
    const movieData = [
      "Name: " + response.data[0].person.name,
      "Plot: " + response.data[0].person.birthday,
      "Rating: " + response.data[0].person.gender,
      "Rotten-Tomatoes: " + response.data[0].person.country.name,
      "URL: " + response.data[0].person.url,
      "-".repeat(60)
    ].join("\n\n");

    fs.appendFile("log.txt", movieData, err => {
      if (err) {
        throw err;
      }
      console.log(movieData);
    });
  });
};

module.exports = Moviesearch;
