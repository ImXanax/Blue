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
    .setName("sec")
    .setDescription("calculates seconds to minute")
    .addIntegerOption((option) =>
      option
        .setName("time")
        .setDescription(`the time you want converted in sec`)
        .setRequired(true)
    ),
  async execute(ctx, client) {
    let time = ctx.options.getInteger("time");
    time = time/60
    const pingEmbed = new MessageEmbed()
      .setDescription(`${time.toFixed(2)}`)
      .setColor("#0014e9");
    ctx.reply({ embeds: [pingEmbed] });
  },
};
