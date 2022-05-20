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
    .setName("kick")
    .setDescription("kicks a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("the user you want kicked")
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    const target = ctx.options.getUser("user");
    if (isAdmin) {
      const kickEmbed = new MessageEmbed()
        .setDescription(
          `<@${target.id}> **Kicked!**\nID: \`${target.id}\`\nBot: \`${target.bot}\`\nUsername: \`${target.username}#${target.discriminator}\``
        )
        .setColor("#0014e9");
      await ctx.guild.members
        .kick(target)
        .then(ctx.reply({ embeds: [kickEmbed] }))
        .catch((e) => console.log(e));
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
