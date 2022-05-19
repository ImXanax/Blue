module.exports = {
    name: 'serverinfo',
    description: 'displays information about the server',
    aliases: ['si', 'server'],
    execute(client, message, cmd, args, Discord) {
      const {guild}=message
      const {name, region , memberCount,owner} = guild
      icon = guild.iconURL()
      const embed = new Discord.MessageEmbed()
      .setTitle(`${name}`)
      .setThumbnail(icon)
      .setColor(process.env.HEX)
      .addFields({
        name:'Region:',
        value:`<:dot:859444842261643315> ${region}`,
        inline: true
      },{
        name:'Members:',
        value:`<:dot:859444842261643315> ${memberCount}`,
        inline: true
      },{
        name:'Owner:',
        value:`<:dot:859444842261643315> <@${owner.user.id}>`,
        inline: true
      })

      message.channel.send(embed);
    }
}