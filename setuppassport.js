var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var User = require("./models/user");

module.exports = function(){
    passport.serializeUser(function(user,done){
        done(null,user._id);
    });
    passport.deserializeUser(function(id,done){
        User.findById(id,function(err,user){
            done(err,user);
        })
    });
    passport.use("signin",new LocalStrategy({
        usernameField:'username',
        passwordField:'password'
    },function(username, password, done){
        User.findOne({username: username}, function(err, user){
            if(err){ 
                console.log(err);
                return done(err);
            }
            if(!user){
                return done(null, false, {message:"Tài khoản không tồn tại!"});
            }

            user.checkPassword(password, function(err, isMatch){
                if(err){ return done(err);}
                if(!isMatch){
                    return done(null, false, {message:"Sai mật khẩu!"});
                }
                return done(err,user);
            })
        });
    }));
};