let express = require("express");
let friends = require("../data/friends.js");

const router = express.Router();

router.get("/api/friends", function(req, res) {
    res.send(res);
});

router.post("/api/friends", function(req, res) {
    console.log(friends);
    console.log(req.body);
    res.json(res);
});