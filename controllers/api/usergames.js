const UserGame = require('../../models/userGame');


module.exports = {
    getAllUserGames,
}


async function getAllUserGames(req, res) {
    try {
        const userGames = await UserGame.find({user: req.user._id}).populate('game').exec()
        res.status(200).json(userGames);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    } 
}