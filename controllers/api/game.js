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
        const userGame = await UserGame.findOne({user: req.user._id});
        if (userGame) {
            const existingGame = userGame.games.includes(gameInDb._id);
            if (existingGame) {
                return res.status(400).json("Game already exists for user")
            } 
        userGame.games.push({ game: gameInDb._id }) 
        await userGame.save()
        } else {
            const newUserGame = new UserGame({
                user: req.user._id,
                games: [{ game: gameInDb._id }]
            })
            await newUserGame.save()
        }
        res.status(200).json("Lets go!")
    } catch (err) {
        res.status(400).json(err);
    }
}