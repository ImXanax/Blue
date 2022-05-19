module.exports = {
    name: 'avatar',
    description: 'sends the avatar of the user.',
    execute(client,message,cmd,args,Discord){
        const mention = message.mentions.users.first() || message.author;
        const avatar = mention.displayAvatarURL({dynamic: true ,size: 1024});
        const pfp = new Discord.MessageEmbed().setImage(avatar).setColor(process.env.HEX).setTitle(`${mention.username}'s Avatar`);
        message.channel.send(pfp);
    }
}