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
    .setName("unban")
    .setDescription("unbans a user")
    .addIntegerOption((option) =>
      option.setName("id").setDescription("the user's id you want unbanned")
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    const target = ctx.options.getInteger("id");
    if (isAdmin) {
      const unbanEmbed = new MessageEmbed()
        .setDescription(
          `<@${target.id}> **Unbanned!**\nBot: \`${target.bot}\`\nId: \`${target.id}\`\nUsername: \`${target.username}#${target.discriminator}\``
        )
        .setColor("#0014e9");
      await ctx.guild.members
        .unban(target.id)
        .then(ctx.reply({ embeds: [unbanEmbed] }))
        .catch((e) => console.log(e));
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
