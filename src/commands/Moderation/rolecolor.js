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
    .setName("rolecolor")
    .setDescription("changes the role color of the specified role")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription(`the user you'd like to see their roles`)
        .setRequired(false)
    ).addStringOption(),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    if (isAdmin) {
        //options for , {USER} {HEX} {ROLE}

        //IF USER

        //NO USER - user = ctx emitter

        //GET ROLE

        //RESULT
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
