var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    res.render("./",{pages_name: "Mobile store"});
});
router.get("/register", function(req,res){
    res.render("./auth/register",{pages_name: "Đăng ký - Mobile store"});
});
router.get("/signin", function(req,res){
    res.render("./auth/signin",{pages_name: "Đăng nhập - Mobile store"});
});
router.get("/logout", function(req,res){
    res.render("./auth/logout");
});

module.exports = router;