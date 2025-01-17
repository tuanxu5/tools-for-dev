const express = require("express");
const router = express.Router();
const { getExample } = require("../controllers/example-controller");

router.get("/example", getExample);

module.exports = router;
