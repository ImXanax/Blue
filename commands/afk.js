const Afk = require('../database/models/afkSchema');
const mongoose = require('mongoose');
module.exports = {
    name: 'afk',
    description: 'set user to AFK mode',
    aliases: ['awayfromkeyboard', 'offline'],
    async execute(client, message, cmd, args, Discord) {
        let reason = args.join(' ')
        if(!reason) reason = 'no reason given';
        let afkProfile = await Afk.findOne({userID: message.author.id});
        if(!afkProfile){
          afkProfile = await new Afk({
            _id: mongoose.Types.ObjectId(),
            userID: message.author.id,
            reason: reason,
          });
          await afkProfile.save();
          message.channel.send('You are now AFK');
        }else return message.channel.send('You are already AFK')
    }
}