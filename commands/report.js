const Discord = require('discord.js');
module.exports = {
    name:'report',
    aliases: ['bug'],
    description: 'Used for giving reports or bugs for users and the bot',
    execute(client,message , cmd , args , Discord){
        const channel = message.guild.channels.cache.find(c=> c.name ==='🔴mod-log');
        if(!channel) return message.channel.send("Reporting Is Currently Not Available..");
        const channelId= '739473928484946040';
        const modLog = client.channels.cache.get(channelId);

        let usage ='.report *[usertag/id/username] -r [Reason]*'
        let example= '.report Xanax#3202 -r spamming and drama'
       
        if(!args[0]) return message.channel.send(`<:dot1:866171362217426955>No user or reason for your report was provided\n<:dot1:866171362217426955>**Usage:**${usage}\n<:dot1:866171362217426955>**Example:** ${example}`)

        const spliter = args.join(" ").split('-r')
        const reason = spliter[1];
        const user = spliter[0];

        if(!args.includes('-r')) return message.channel.send(`<:dot1:866171362217426955>You should separate User and Reason with \`-r\`in between\n<:dot1:866171362217426955>**Usage:** ${usage}\n<:dot1:866171362217426955>**Example:** ${example}`)
        if(!reason) return message.channel.send(`<:dot1:866171362217426955>No reason was provided\n<:dot1:866171362217426955>**Usage:** ${usage}\n<:dot1:866171362217426955>**Example:** ${example}`)
        if(!user) return message.channel.send(`<:dot1:866171362217426955>No user was provided\n<:dot1:866171362217426955>**Usage:** ${usage}\n<:dot1:866171362217426955>**Example:** ${example}`)

        const embed = new Discord.MessageEmbed()
            .setColor(process.env.HEX)
            .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
            .setDescription(`**User:** ${message.author.tag}\n**Reported User:** ${user}\n\n**__REASON:__**\n\`\`\`${reason}\`\`\``);
        
        channel.send(embed).then((msg)=>{
            message.delete();
        }).catch((err)=>{
            console.log(err);
        })

    }
}