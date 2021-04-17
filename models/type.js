const mongoose = require("mongoose");

var typeSchema = mongoose.Schema({
    id:{type:int, require:true },
    name:{type:String, require:true}
});