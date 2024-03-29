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
      return ctx.reply({content:'dont have perms'});
    }
      const banEmbed = new MessageEmbed()
        .setDescription(
          `<@${target.id}> **Banned!**\n\`\nBot: \`${target.bot}\`\nUsername: \`${target.username}#${target.discriminator}\`\nJoined At: \`${u}\`\n`
        ).setFooter({text:`ID: ${target.id} - ${ctx.createdAt}`})
        .setColor("#0014e9");
      await ctx.guild.members
        .ban(target)
        .then(ctx.reply({ embeds: [banEmbed] }))
        .catch((e) => console.log(e));
  },
};
