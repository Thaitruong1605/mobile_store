var bcrypt = require("bcryptjs"); // hash password
var mongoose = require("mongoose");

var userChema ={
    username:{type:String, require: true},
    password:{type:String, require: true} 
}