const mongoose = require("mongoose");

var brandSchema = mongoose.Schema({
    id:{type:int, require:true },
    name:{type:String, require:true}
});

