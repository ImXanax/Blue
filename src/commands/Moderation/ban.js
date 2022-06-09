const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
  MessageAttachment,
} = require("discord.js");
const e = require("express");
const { execute } = require("../Fun/eightball");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("bans a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("the user you want banned").setRequired(true)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    const target = ctx.options.getUser("user");
    if (!isAdmin){
      const img = new MessageAttachment('src/assets/img/x.png')
      return ctx.reply({files:[img]});
    }
      const banEmbed = new MessageEmbed()
        .setDescription(
          `<@${target.id}> **Banned!**\nID: \`${target.id}\`\nBot: \`${target.bot}\`\nUsername: \`${target.username}#${target.discriminator}\``
        )
        .setColor("#0014e9");
      await ctx.guild.members
        .ban(target)
        .then(ctx.reply({ embeds: [banEmbed] }))
        .catch((e) => console.log(e));
  },
};
