let server = require("../../server.js");
let friends = require("../data/friends.js");

server.app.get("/api/friends", function(req, res) {
    res.send(friends);
});

server.app.post("/api/friends", function(req, res) {
    friends.push(req.body.surveyResults);
    console.log(friends);
    res.json({allFriends: friends});
})