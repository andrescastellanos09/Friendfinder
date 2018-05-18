// Routes - takes in JSON input
var path = require("path");

var friends = require('../data/friends.js');

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {

    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    var data = req.body;
    var userTotal = 0;
    var userName = req.body.name;
    var userPhoto = req.body.photo;
    var userScores = req.body.scores;
    for (var i = 0; i < friends.length; i++) {

      console.log(friends[i].name);
      userTotal = 0;
      // Loop through all the scores of each friend
      for (var j = 0; j < friends[i].scores[j]; j++) {

        
        userTotal += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // If the sum of differences is less then the differences of the current "best match"
        if (userTotal <= bestMatch.friendDifference) {

          // Reset the bestMatch to be the new friend. 
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = userTotal;
        }
      }
    }
    		
		friends.push(data);

		// Return a JSON  
		res.json(bestMatch);


  });
};