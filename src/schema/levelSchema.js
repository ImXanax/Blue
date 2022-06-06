const mongoose = require('mongoose');

const levelSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    xp: {type: Number, default: 0},
    level:{type: Number, default: 0},
    userID: {type: String},
    guildID: {type: String},
    lastUpdated: {type: Date, default: new Date()},
})
module.exports = new mongoose.model('level',levelSchema,'Level'); 