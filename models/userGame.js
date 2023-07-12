const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userGameSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    games: [{
        game: {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        },
        completed: {
            type: Boolean,
            default: false
        },
    }]
});

module.exports = mongoose.model('UserGame', userGameSchema)