const bcrypt = require("bcryptjs"); // hash password
const mongoose = require("mongoose");

const SALT_FACTOR = 10; // Chuỗi được thêm vào để phức tạp hoá mật khẩu

var userSchema = mongoose.Schema({
    username:{type:String, require: true},
    email:{type:String, require:true },
    password:{type:String, require: true},
    createAt:{type:Date, default:Date.now}
});

userSchema.pre("save",function(done){
    var user = this;
    if(!user.isModified("password")){
        return done;
    }
    bcrypt.genSalt(SALT_FACTOR, function(err,salt){
        if(err){return done(err);}
        bcrypt.hash(user.password, salt, function(err, hashedPassword){
            if(err){return done(err);}
            user.password = hashedPassword;
            done();
        });
    });
});

userSchema.methods.checkPassword = function (guess, done){
    if(this.password != null){
        bcrypt.compare(guess, this.password, function(err, isMatch){
            done(err,isMatch);
        });
    }
}

var User = mongoose.model("User", userSchema);

module.exports = User;
 