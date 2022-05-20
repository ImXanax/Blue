const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
} = require("discord.js");
const { execute } = require("./eightball");
module.exports={
   data: new SlashCommandBuilder()
    .setName('rate')
    .setDescription('rates your text 0-10')
    .addStringOption((option) => option.setName('text').setDescription('text you want rated')),

    async execute(ctx,client){
        const input = ctx.options.getString('text')
        const rateEmbed = MessageEmbed().setDescription(`**${input}**\n${Math.floor(Math.random()*10+1)}`)
        ctx.reply({embeds:[rateEmbed]})
    }
}
