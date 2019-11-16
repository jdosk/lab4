const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// ROUTES
// index: main page
app.get("/", function(req, res){
    res.render("index.html");
});

// Mercury
app.get("/mercury", function(req, res){
    res.render("mercury.html");
});

// Venus
app.get("/venus", function(req, res){
    res.render("venus.html");
});

// Earth
app.get("/earth", function(req, res){
    res.render("earth.html");
});

// Mars
app.get("/mars", function(req, res){
    res.render("mars.html");
});

// Jupiter
app.get("/jupiter", function(req, res){
    res.render("jupiter.html");
});

// Saturn
app.get("/saturn", function(req, res){
    res.render("saturn.html");
});

// Uranus
app.get("/uranus", function(req, res){
    res.render("uranus.html");
});

// Neptune
app.get("/neptune", function(req, res){
    res.render("neptune.html");
});

// server listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express Server is Running...");
});