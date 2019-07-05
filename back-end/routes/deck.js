const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const deckController = require("../controllers/deck");

router.get("/getDeck", auth, deckController.getDeck);

router.post("/addCardToDeck", auth, deckController.addCardToDeck);

router.post("/addLandsToDeck", auth, deckController.addLandsToDeck);

router.post("/removeCardFromDeck", auth, deckController.removeCardFromDeck);

router.post("/removeLandsFromDeck", auth, deckController.removeLandsFromDeck);

router.post("/clearDeck", auth, deckController.clearDeck);

module.exports = router;