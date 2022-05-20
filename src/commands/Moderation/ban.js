const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
} = require("discord.js");
const { execute } = require("../Fun/eightball");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("bans a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("the user you want banned")
    ),
  async execute(ctx, client) {
    const permCheck = ctx.member.roles.cache.has("734431567912370196");
    console.log(permCheck);
    if (permCheck) {
      const target = ctx.options.getUser("user");
      try {
        target.ban();
        ctx.reply({ content: `${target} Banned` });
      } catch (e) {
        console.log(e);
      }
    } else {
      ctx.reply({ content: `dont have perms` });
    }
  },
};
