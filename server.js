var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.get("/", function (req, res) {
    res.send("Hello World!");
})







app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})

