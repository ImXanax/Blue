const fs = require("fs")
const ButtonPages = require('discord-button-pages');
const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'test',
    description: "Does Testing Tings",
    async execute(client,message,cmd,args,Discord) {
      const embed1 = new MessageEmbed()
          .setTitle('hi');
      const embed2 = new MessageEmbed()
          .setTitle('hi');
      const embed3 = new MessageEmbed()
          .setTitle('hi');
      const embedPages = [embed1,embed2,embed3];
      ButtonPages.createPages(client,message,60*1000,"green","👉","👈","❎");
    }
}