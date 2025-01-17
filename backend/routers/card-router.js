const express = require("express");
const router = express.Router();
const { getCards, createCard } = require("../controllers/card-controller");

router.get("/cards", getCards);
router.post("/cards", createCard);

module.exports = router;
