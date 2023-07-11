const Game = require('../../models/game');
const fetch = require('node-fetch')

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
        if (!gameInDb) {
            const newGame = {
                APIID: req.body.id,
                title: req.body.name,
                img: req.body.background_image,
                rating: req.body.rating
            }
            gameInDb = await Game.create(newGame)
        } 
        res.status(200).json("yay")
    } catch (err) {
        res.status(400).json(err);
    }
}