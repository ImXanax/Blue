const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    xp: Number,
    level:Number,
    userID: String,
    guildID: String,
    lastUpdated: Date,
})
module.exports = new mongoose.model('level',levelSchema,'Level'); 