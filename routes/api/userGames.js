const express = require('express');
const router = express.Router();
const userGamesCtrl = require('../../controllers/api/usergames');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/user', userGamesCtrl.getAllUserGames);
router.put('/:id', userGamesCtrl.updatedUserGame)
router.delete('/:id', userGamesCtrl.removeGame);


module.exports = router;