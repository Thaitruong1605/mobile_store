var express = require("express");
var passport = require("passport");

var login_required = require("../../auth/auth").ensureAuthenticated;

var User = require("../../models/user");
var fn_dir = "./backend/functions/";
var router = express.Router();

router.get("/", function (req, res) {
    res.render("./backend", { page_name: "Dashboard - Mobile store" });
});
router.get("/brands", function(req,res){
    res.render(fn_dir+"brands/create", { page_name: "Dashboard - Mobile store" });
});

module.exports = router;