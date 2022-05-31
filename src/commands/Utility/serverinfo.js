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
    .setName("serverinfo")
    .setDescription("information about the server"),
  async execute(ctx, client) {
    const serverEmbed = new MessageEmbed()
      .setTitle(ctx.guild.name)
      .setDescription(`
      **OWNER:** <@!${ctx.guild.ownerId}>
      **MEMBER COUNT:** ${ctx.guild.memberCount}
      **CREATED:**\n${ctx.guild.createdAt}
      `)
      .setImage(ctx.guild.bannerURL({ format: "jpg" }))
      .setThumbnail(ctx.guild.iconURL({ format: "jpg" }))
      .setFooter({ text: `ID: ${ctx.guild.id}` })
      .setColor("#0014e9");
    ctx.reply({ embeds: [serverEmbed] });
  },
};
