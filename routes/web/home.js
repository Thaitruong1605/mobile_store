var express = require("express");
var passport = require("passport");

var User = require("../../models/user");

var router = express.Router();

router.get("/", function(req,res){
    res.render("./",{pages_name: "Mobile store"});
});
router.get("/register", function(req,res){
    res.render("./auth/register",{pages_name: "Mobile store - Register"});
});
router.post("/register", function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    User.findOne({email:email},function(err,user){
        if(err){
            return next(err);
        }else if(user){
            req.flash("error","Email đã được đăng ký!");
            return res.redirect("/register");
        }

        var newuser = new User({
            username: username,
            password: password,
            email: email
        });

        newuser.save(next);
    });
}, passport.authenticate("signin",{
    successRedirect:"/",
    failureRedirect:"/register",
    failureFlash:true
}));
router.get("/signin", function(req,res){
    res.render("./auth/signin",{pages_name: "Đăng nhập - Mobile store"});
});
router.get("/logout", function(req,res){
    res.render("./auth/logout");
});



module.exports = router;