const UserGame = require('../../models/userGame');


module.exports = {
    getAllUserGames,
    updatedUserGame,
    removeGame,
}


async function getAllUserGames(req, res) {
    try {
        if (!req.user) res.status(200).json([])
        const userGames = await UserGame.find({user: req.user._id}).populate('game').exec()
        res.status(200).json(userGames);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    } 
}

async function removeGame(req, res) {
    try {
        console.log("remove game", req.params.id)
        await UserGame.findByIdAndDelete(req.params.id);
        const allUserGames = await UserGame.find({user: req.user._id}).populate('game').exec()
        res.status(200).json(allUserGames);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }   
}

async function updatedUserGame(req, res) {
    try {
        // const updatedUserGame = await UserGame.findOne({_id: req.params.id});
        const updatedUserGame = await UserGame.findOneAndUpdate(
            {_id: req.params.id, user: req.user._id},
            // update object with updated properties
            req.body,
            // options object {new: true} returns updated doc
            {new: true}
          );
        const allUserGames = await UserGame.find({user: req.user._id}).populate('game').exec()
        res.status(200).json(allUserGames);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }   
}