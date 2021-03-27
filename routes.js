const express = require("express");

var router = express.Router();

router.get("/", function(req, res){ //request , respond
    res.render("index"); 
});

module.exports = router;