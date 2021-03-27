const express = require("express");

var router = express.Router();

router.use("/users", require("./users"));
console.log("api index");
module.exports = router;