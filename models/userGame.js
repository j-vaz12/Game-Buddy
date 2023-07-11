const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userGameSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    }

});


module.exports = mongoose.model('UserGame', userGameSchema)