let express = require("express");
let path = require("path");

let app = express();
let PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("Connected at localhost:" + PORT);
})

module.exports = {
    app: app,
    path: path
};