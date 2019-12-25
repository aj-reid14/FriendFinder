let server = require("../../server.js");
let friends = require("../data/friends.js");

server.app.get("/", function(req, res) {
    res.sendFile(server.path.join(__dirname + "/../public/home.html"));
})

server.app.get("/survey", function(req, res) {
    res.sendFile(server.path.join(__dirname + "/../public/survey.html"));
})


server.app.get("/api/friends", function(req, res) {
    friends.push(req.body.surveyResults);
    res.send(friends);
});

server.app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    console.log(friends);
    res.json(friends);
})