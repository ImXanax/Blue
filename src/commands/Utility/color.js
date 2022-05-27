const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
} = require("discord.js");
const { color } = require("canvacord/src/Canvacord");
const Canvacord = require("canvacord/src/Canvacord");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("color")
    .setDescription("displays hex color code")
    .addStringOption((option) =>
      option
        .setName("hex")
        .setDescription("the hex code for the color you would like to see")
        .setRequired(true)
    ),
  async execute(ctx, client) {
    //the hex input
    const hex = ctx.options.getString("hex");
    //validate syntax of hex 
    const startsWithTag = hex.startsWith("#", 0);
    const colorCode = startsWithTag ? hex : `#${hex}`;
    //check if input is hex
    const regHex = new RegExp(/#[0-9a-f]{6}/, "i");
    const result = regHex.test(hex);

    //if all paramaters passed
    if (result) {
      const img = await Canvacord.color(hex, false, 150, 1000);
      const colorEmbed = new MessageEmbed()
        .attachFiles([{ name: "color.png", attachment: img }])
        .setImage("attachment://color.png")
        .setColor();
        
        ctx.reply(`****`)
    }// if params dont match a hex code
    else{

    }
  },
};
