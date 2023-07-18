const express = require('express');
const router = express.Router();
const gameCtrl = require('../../controllers/api/game');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/search', ensureLoggedIn, gameCtrl.searchAPI);
router.post('/userGame', ensureLoggedIn, gameCtrl.addGameToUser)

module.exports = router;