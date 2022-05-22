const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
} = require("discord.js");
const { execute } = require("./eightball");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("rate")
    .setDescription("rates your text 0-10")
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("text you want rated")
        .setRequired(true)
    ),
  async execute(ctx, client) {
    const input = ctx.options.getString("text");
    const rateEmbed = new MessageEmbed()
      .setDescription(`I'd give **${input}** **${Math.floor(Math.random() * 10 + 1)}/10** <:catwut:910411441100701716>
      `)
      .setColor("#0014e9");
    ctx.reply({ embeds: [rateEmbed] });
  },
};
