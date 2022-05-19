const moment = require("moment");
require("moment-duration-format");
const Discord = require('discord.js');
const embed = require("./embed");
module.exports = {
    name:"uptime",
    aliases: ['ut'],
    description: "shows how many days hours and minutes the bot has been on",
    execute(client,message,cmd,args,Discord){
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const uptime = new Discord.MessageEmbed().setDescription(`\`\`\`${duration}\`\`\``).setColor(process.env.HEX);
        message.channel.send(uptime);
    }
}