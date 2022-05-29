const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
} = require("discord.js");
const { request } = require("express");
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

    const pfp = await ctx.member.displayAvatarURL({ format: "jpg" });
    userEmbed
      .setTitle(`${ctx.user.tag}`)
      .setDescription(
        `**NICKNAME:** ${ctx.member.nickname}
         **ID:** ${ctx.user.id}
            **JOINED AT:**\n ${ctx.member.joinedAt}
            **CREATED ACCOUNT:**\n ${ctx.user.createdAt}
            `
      )
      .setColor("#0014e9")
      .setThumbnail(pfp);
    ctx.reply({ embeds: [userEmbed] });
  },
};
