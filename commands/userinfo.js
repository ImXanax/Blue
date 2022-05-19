const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    description: 'Shows Information About A User.',
    aliases: ['ui', 'whois'],
    execute(client, message, cmd, args, Discord) {
        const { guild } = message
        const user = message.mentions.users.first() || message.member.user;
        const member = guild.members.cache.get(user.id);

        const embed = new MessageEmbed()
            .setColor(process.env.HEX)
            .setAuthor(`${user.username}`, user.displayAvatarURL())
            .setDescription(`***PROFILE:***\n:small_blue_diamond:<@${user.id}>`)
            .addFields(
                {
                    name: '***USER TAG:***',
                    value: `:small_blue_diamond:${user.tag}`
                },
                {
                    name: '***NICKNAME:***',
                    value: `:small_blue_diamond:${member.nickname || 'None'}`
                },
                {
                    name: '***BOT:***',
                    value: `:small_blue_diamond:${user.bot}`
                },
                {
                    name: '***JOINED SERVER:***',
                    value: `:small_blue_diamond:${new Date(member.joinedTimestamp).toLocaleDateString()}`
                },
                {
                    name: '***ACCOUNT CREATED:***',
                    value: `:small_blue_diamond:${new Date(user.createdTimestamp).toLocaleDateString()}`
                },
                {
                    name: '***ID:***',
                    value: `:small_blue_diamond:${user.id}`
                },
                {
                    name: '***NUMBER OF ROLES:***',
                    value: `:small_blue_diamond:${member.roles.cache.size - 1}`
                },
            )
        message.channel.send(embed);
    }
}