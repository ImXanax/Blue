const { Member } = require("eris");
const { execute } = require("./embed");
const {ReactionRoleManager} = require('discord.js-collector');

module.exports = {
    name:"rolereaction",
    description:"does reaction role",
    async execute(client,message, cmd,args, Discord){
        if (Member.message.permissions.has("ADMINISTRATOR")){
            const role = message.mentions.roles.first();
            if (!role) return message.channel.send("You Should Provide A Role").then((m)=> m.delete({timeout:1_000}));
            const emoji = args[1];
            if(!emoji) return message.channel.send("You Need To Use A Valid Emote").then((m)=> m.delete({timeout:1_000}));
            const msg = await message.channel.messages.fetch(ags[2]|| message.id);
            if(!msg) return message.channel.send("Message Not Found").then((m) => m.delete({timeout: 1_000}));
            
        }else{
            message.channel.send("You DOnt have the permissions to use this command");
        }
    }
}