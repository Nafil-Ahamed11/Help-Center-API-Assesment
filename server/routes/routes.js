const express = require('express');
const router = express.Router();
const cardController = require('../controller/cardController.js'); // Uncomment if needed

router.post('/cards', cardController.createCard);
router.get('/cards',cardController.getCards)
router.get('/cards/:title', cardController.getCardByTitle);

module.exports = router; // Export the router
