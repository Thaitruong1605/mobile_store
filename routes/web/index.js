var express = require("express");

var router = express.Router();

router.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.info = req.flash("info");
    next(); // đi đến route tiếp theo
})

router.use("/",require("./home"));

module.exports = router;
