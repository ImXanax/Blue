const canva = require("canvacord");
const { color } = require("canvacord/src/Canvacord");
const Discord = require("discord.js");
module.exports = {
    name: "rolecolor",
    aliases: ['rc','changecolor'],
    description: "Shows the Hex Color Code",
    async execute(client,message,cmd, args, Disocrd) {
      //permission check
      if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`${process.env.P} You don't have the required permissions to use this`)
      //find the role
      let role = message.guild.roles.cache.find(roleVal => roleVal.name === args[0]);
      //get the mentioned hex 
      let color = args[1];
      
      //deal with args
      if (!args[0]) return message.channel.send(`${process.env.P} You didn't provide the name of the role\n<a:bluelego:865278956877119549>**EX:\`.rolecolor [RoleName] #HexColorCode\`**`);
      if (!args[1]) return message.channel.send(`${process.env.P} You didn't provide any color codes\n<a:bluelego:865278956877119549>**EX:\`.rolecolor [RoleName] #HexColorCode\`**`);

      //edit color role
      role.setColor(color)
      .then(updated => message.channel.send(x))
      .catch(console.error);
      const x = new Discord.MessageEmbed().setColor(args[1]).setDescription(`${role}'s color set to ${args[1]}`)
        
    }
}