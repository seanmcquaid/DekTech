const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const deckController = require("../controllers/deck");

router.get("/getDeck", auth, deckController.getDeck);

router.post("/addToDeck", auth, deckController.addToDeck);

router.post("/removeFromDeck", auth, deckController.removeFromDeck);

router.get("/clearDeck", auth, deckController.clearDeck);

module.exports = router;