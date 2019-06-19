const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const deckController = require("../controllers/deck");

router.post("/addToDeck", auth, deckController.addToDeck)

module.exports = router;