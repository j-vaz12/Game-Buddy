const User = require('../../models/user');
const fetch = require('node-fetch')

module.exports = {
    searchAPI,
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