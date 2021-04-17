const mongoose = require("mongoose");

var productsSchema = mongoose.Schema({
    id:{type:int, require:true },
    name:{type:String, require:true},
    price:{type:String, require:true },
    old_price:{type:String},
    up_date:{type:String, require:true},
    describe:{type:String},
    describe_detail:{type:String},
    type_id:{type:int, require:true},
    brand_id:{type:int, require:true}
});

