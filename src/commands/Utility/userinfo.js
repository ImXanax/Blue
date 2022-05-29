const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("information about the user specified")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("the user which you would like to see information for")
        .setRequired(false)
    ),
  async execute(ctx, client) {
    const u = ctx.options.getUser("user");
    let userEmbed = new MessageEmbed();

    userEmbed.setTitle(`${ctx.user.tag}`)
        .setDescription(
            `**NICKNAME:** ${ctx.member.nickname}
            **JOINED AT:** ${ctx.member.joinedAt}
            **CREATED ACCOUNT:** ${ctx.user.createdAt}
            `)
    ctx.reply({ embeds: [userEmbed] });
  },
};
