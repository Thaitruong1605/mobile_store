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
    passport.use("login",new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },function(email, password, done){
        User.findOne({email: email}, function(err, user){
            if(err){ 
                return done(err);
            }
            if(!user){
                return done(null, false, {message:"Email hợp lệ!"});
            }
            user.checkPassword(password, function(err, isMatch){
                if(err){ return done(err);}
                if(isMatch){
                    return done(null, false, {message:"Email không được đăng ký!"});
                }
                user.checkPassword(password, function(err, isMatch){
                    if(err){
                        return done(err);
                    }
                    else if (isMatch){
                        return done(err,user);
                    }
                    else if (!isMatch){
                        return done(null, false, {message:"Sai mật khẩu!"});
                    }
                })
            })
        });
    }));
};