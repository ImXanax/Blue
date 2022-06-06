const { Embed } = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");
const Levels = require('../funcs/Levels')

module.exports = {
    name: 'messageCreate',
    on: true,
    async execute(message,client){
        if(message.author.bot) return
        // DM
        if(message.channel.type === 'DM'){
           const dmEmbed = new MessageEmbed()
            .setTitle(`DM FROM: ${message.author.tag}`)
            .setDescription(`**__MESSAGE:__**\n\`\`\`${message.content}\`\`\``)
            .setThumbnail(message.author.displayAvatarURL({format:'jpg'}))
            .setFooter({text:`ID: ${message.author.id} | ${message.createdAt}`})
            .setColor('#ffff00')
            client.channels.fetch('762670306824290321').then((chl)=>{
                chl.send({embeds:[dmEmbed]})
            }).catch(e=>console.log(`ERR FETCHING CHANNEL: ${e}`))
        }

        //LEVEL
        //if user exists if not create one
        //add random amount of xp to user
        //check if user has leveled up
        //check if user reached 25,50,100
    }
};