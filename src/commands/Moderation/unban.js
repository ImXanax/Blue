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
    .addStringOption((option) =>
      option.setName("id").setDescription("the user's id you want unbanned")
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    const target = ctx.options.getString("id");
    if (isAdmin) {
      const unbanEmbed = new MessageEmbed()
        .setDescription(`**${target}** has been unbanned !`)
        .setColor("#0014e9");
      await ctx.guild.members
        .unban(target)
        .then(ctx.reply({ embeds: [unbanEmbed] }))
        .catch((e) => console.log(e));
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
