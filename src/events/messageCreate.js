const { Embed } = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'messageCreate',
    on: true,
    async execute(message,client){
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
       
    }
};