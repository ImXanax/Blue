const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("determines latency between the bot and api"),
  async execute(ctx, client) {
    const pingEmbed = new MessageEmbed()
      .setDescription(
        `**LATENCY:** __${
          Date.now() - ctx.createdTimestamp
        }__\n**API LATENCY:** __${Math.round(client.ws.ping)}__ms`
      )
      .setColor("#0014e9");
    ctx.reply({ embeds: [pingEmbed] });
  },
};
