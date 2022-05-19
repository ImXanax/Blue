const Blacklist = require('../database/models/blackListSchema');
const mongoose = require('mongoose');
module.exports = {
  name: "blacklist",
  aliases: ['blkli'],
  devOnly: true,
  description: "Bans a member from using the bot",
  async execute(client,message,cmd,args,Discord) {
    //.blacklist @member reason
    const mentionedMember = message.mentions.members.first()|| message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(' ')
    if(!args[0]) return message.channel.send('You need to provide a member and reason why they are being banned');
    if(!mentionedMember) return message.channel.send('the member stated is not in the server');
    if(!reason) reason ='No Reason Given';

    let profile = await Blacklist.findOne({
      userID: mentionedMember.user.id
    });

    if(profile) return message.channel.send('<:dot1:866171362217426955> This member is already banned from using the bot');
    profile = await new Blacklist({
       _id: mongoose.Types.ObjectId(),
      userID: mentionedMember.user.id,
      reason: reason,
    });

    try{
      await profile.save();
      message.channel.send(`<:dot1:866171362217426955> ${mentionedMember.user.tag} Is Banned From Using The Bot`);
    }catch(err){
      console.log(err);
    }
  } 
}