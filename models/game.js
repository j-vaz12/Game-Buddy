const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    APIID: {
        type: Number
    },
    title: {
        type: String
    },
    img: {
        type: String
    },
    rating: {
        type: Number
    }
});


module.exports = mongoose.model('Game', gameSchema)