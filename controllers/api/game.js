const Game = require('../../models/game');
const UserGame = require('../../models/userGame')
const fetch = require('node-fetch');

module.exports = {
    searchAPI,
    addGameToUser,
}

async function searchAPI(req, res) {
    try {
        const url =`${process.env.BASE_URL}?key=${process.env.API_KEY}&search=${req.query.q}`
        const data = await fetch(url)
        const results = await data.json()
        res.status(200).json(results)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function addGameToUser(req, res) {
    try {
        //check if game in db
        let gameInDb = await Game.exists({APIID: req.body.id})
        console.log(gameInDb, "this is line 25 BRO")
        let currGame; 
        //if no game => create game
        if (!gameInDb)  currGame = await Game.create({ APIID: req.body.id, title: req.body.name, img: req.body.background_image, rating: req.body.rating })
         else currGame = await Game.findOne({APIID: req.body.id})
         console.log(currGame, "this is lINE 30 MAN")
         // check if usergame in db or create
        let userGameInDb = await UserGame.exists({user: req.user._id, game: gameInDb._id})
        if (!userGameInDb) await UserGame.create({ user: req.user._id, game: gameInDb._id })
        //return all user games 
        const allUserGames = await UserGame.find({user: req.user._id}).populate('game').exec()
        res.status(200).json(allUserGames)
    } catch (err) {
        res.status(400).json(err);
    }
}

