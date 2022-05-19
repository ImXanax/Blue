const Discord = require('discord.js');
const embed = require("./embed");
const shamsi = require("shamsi");
module.exports = {
    name:"pcalender",
    aliases: ['ir'],
    description: "displays date in Shamsi (persian calender)",
    execute(client,message,cmd,args,Discord){
     if(message.member.permissions.has('ADMINISTRATOR')){
        var dateObj = new Date();
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        let a = shamsi.gregorianToJalali(year, month, day);
        const embed = new Discord.MessageEmbed()
        .setColor(process.env.HEX)
        .addFields(
          { name:'سال', value:`<:dot:859444842261643315>${a[0]}`, inline: true },
          { name:'ماه', value:`<:dot:859444842261643315>${a[1]}`, inline: true },
          { name:'روز',value:`<:dot:859444842261643315>${a[2]}`, inline: true },
        )
        message.channel.send(embed)
      }
      else{
        message.channel.send('<:d1:854267211875090443>Owner Access Only');
      }
    }
}

