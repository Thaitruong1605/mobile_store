var express = require("express");
var passport = require("passport");

var login_required = require("../../auth/auth").ensureAuthenticated;

var User = require("../../models/user");

var router = express.Router();

router.get("/", function (req, res) {
    res.render("./", { page_name: "Mobile store" });
});
router.get("/cart", login_required ,function(req, res){
    res.render("./pages/cart");
});
router.get("/signin", function (req, res) {
    res.render("./auth/signin", { page_name: "Đăng nhập - Mobile store" });
});
router.post("/signin", passport.authenticate("signin", {
    successRedirect: "/",
    failureRedirect: "/signin",
    failureFlash: true
}));
router.get("/register", function (req, res) {
    res.render("./auth/register", { page_name: "Mobile store - Register" });
});
router.post("/register", function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            req.flash("error", "Tài khoản đã được đăng ký!");
            return res.redirect("/register");
        }
        User.findOne({ email: email }, function (err, user) {
            if (err) {
                return next(err);
            }
            if (user) {
                req.flash("error", "Email đã được đăng ký!");
                return res.redirect("/register");
            }
            console.log("creating user");
            var newuser = new User({
                username: username,
                password: password,
                email: email
            });

            newuser.save(next);
        });
    });

}, passport.authenticate("signin", {
    successRedirect: "/",
    failureRedirect: "/register",
    failureFlash: true
}));
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;