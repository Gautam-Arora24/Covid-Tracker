var express = require("express");
var app = express();
const fetch = require("node-fetch");
const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile("index.html", { root: __dirname });
});
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

app.post("/sendmail", function(req, res) {
    let mailOptions = {
        from: "gautamarora6248@gmail.com",
        to: req.body.email,
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log("Error Occurs", err);
        } else {
            console.log("Message Sent");
        }
    });
    res.redirect("/");
});

app.listen(8000, function(req, res) {
    console.log("Server has been started in port 8000");
});