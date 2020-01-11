let express = require("express");
let path = require("path");

let app = express();
let PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const routes = require("./app/routing/htmlRoutes.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Connected at localhost:" + PORT);
});