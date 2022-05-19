const mongoose = require('mongoose');

const remindSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    reason: String,
    time: String
})
module.exports = new mongoose.model('Remind',remindSchema,'reminds');