const express = require('express');
const router = express.Router();
const userGamesCtrl = require('../../controllers/api/usergames');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/user', userGamesCtrl.getAllUserGames);
router.get('/update', userGamesCtrl.updatedUserGame)


module.exports = router;