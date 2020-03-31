var express = require("express");
var router = express.Router();
var service = require("../modules/service");

router.get("/", function(req, res, next) {
	res.render("index", { title: "Services..." });
});
router.get("/:status", function(req, res, next) {
	if (req.params.status == "on") {
		service("on");
	} else if (req.params.status == "off") {
		service("off");
	}
	res.render("service", { title: req.params.status.toUpperCase() });
});

module.exports = router;
