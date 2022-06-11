const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
  MessageAttachment,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("calculator")
    .setDescription("calculates the inputs"),
  async execute(ctx, client) {
    
  },
};
