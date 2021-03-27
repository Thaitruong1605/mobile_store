var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
var passport = require("passport");
var session = require("express-session");
var flash = require("connect-flash"); 
var params = require("./params/params"); 

var app = express();
// connect database
mongoose.connect(params.DATABASECONNECTION, {useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true});

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs")

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

app.listen(app.get("port"), function(){
    console.log("Server started on port "+app.get("port"));
});

