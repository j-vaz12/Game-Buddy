const express = require('express');
const router = express.Router();
const gameCtrl = require('../../controllers/api/game');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/search', gameCtrl.searchAPI);
router.post('/userGame', gameCtrl.addGameToUser)

module.exports = router;