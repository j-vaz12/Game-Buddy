const Game = require('../../models/game');
const UserGame = require('../../models/userGame')
const fetch = require('node-fetch');

module.exports = {
    searchAPI,
    addGameToUser
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
        let gameInDb = await Game.findOne({APIID: req.body.id})
        console.log(gameInDb, "line 24")
        if (!gameInDb) {
            const newGame = {
                APIID: req.body.id,
                title: req.body.name,
                img: req.body.background_image,
                rating: req.body.rating
            }
            gameInDb = await Game.create(newGame)
            console.log(gameInDb , "this is line 33");
            
        }
        res.status(200).json("Lets go!")
    } catch (err) {
        res.status(400).json(err);
    }
}