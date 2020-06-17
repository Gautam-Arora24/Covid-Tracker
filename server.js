var express = require("express");
var app = express();
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

var port = process.env.PORT || 8000;

app.get("/", function(req, res) {
    res.sendFile("index.html", { root: __dirname });
});

app.listen(port, function(req, res) {
    console.log("Server has been started in port 8000");
});