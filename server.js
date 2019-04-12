var express = require("express")
var app = express();


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
var path = require("path");


app.use(express.static( __dirname + '/public/dist/public' ));


app.listen(10000,function(){
    console.log("****************PORT IS LISTENING")
})