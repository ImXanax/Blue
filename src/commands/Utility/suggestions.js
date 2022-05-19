module.exports = {
    name:'suggestions',
    aliases: ['suggest','suggestion'],
    description: 'Used for giving your suggestions for the server',
    execute(client,message , cmd , args , Discord){
        const channel = message.guild.channels.cache.find(c=> c.name ==='・suggestions');
        if(!channel) return message.channel.send("The Suggestion Channel Is Currently Not Available..");
        const channelId= '739473928484946040';
        const logChannel = client.channels.cache.get(channelId);

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
            .setColor(process.env.HEX)
            .setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
            .setDescription(messageArgs);
        
        channel.send(embed).then((msg)=>{
            msg.react(' <:saivote:833722631097679912>');
            msg.react('<:psidown:833724534258925588>');
            message.delete();
        }).catch((err)=>{
            console.log(err);
        })
        const logBed = new Discord.MessageEmbed()
            .setColor(process.env.HEX)
            .setDescription(`<@${message.author.id}> has sent a suggestion`)
            .setFooter(`ID: ${message.author.id} `)
        logChannel.send(logBed)
      }
}