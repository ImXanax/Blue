const morse = require("morse");
const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "livestream",
    description: "sends the links",
    execute(client,message,cmd,args,Discord) {
      const embed = new Discord.MessageEmbed()
        .setDescription(`***__LIVESTREAM SONGS IN AUDIO FORMAT:__***

**Choker: **
https://cdn.discordapp.com/attachments/762670306824290321/863892579573694494/Choker_-_Livestream.m4a

**Stressedout : **
https://cdn.discordapp.com/attachments/762670306824290321/863893102674968657/Stressed_Out_-_Livestream.m4a

**Migraine: **
https://cdn.discordapp.com/attachments/762670306824290321/863893938581405726/Migraine_-_Livestream.m4a

**Laneboy-Redecorate: **
https://cdn.discordapp.com/attachments/762670306824290321/863894399783141456/Laneboy__Redecorate_-_Livestream.m4a

**Chlorine: **
https://cdn.discordapp.com/attachments/762670306824290321/863895391778897940/Chlorine_-_Livestream.m4a

**Mulberry-Street: **
https://cdn.discordapp.com/attachments/762670306824290321/863895855719251994/Mulberry_Street_-_Livestream.m4a

**Heathens-Trees: **
https://cdn.discordapp.com/attachments/762670306824290321/863900509047881769/Heathens__Trees_-_Livestream.m4a

**Shy-Away: **
https://cdn.discordapp.com/attachments/762670306824290321/863896167427342336/Shy_Away_-_Livestream.m4a

**The Outside: **
https://cdn.discordapp.com/attachments/762670306824290321/863896443428667402/The_Outside_-_Livestream.m4a

**Saturday: **
https://cdn.discordapp.com/attachments/762670306824290321/863897469150560256/Saturday_-_Livestream.m4a

**Level Of Concern: **
https://cdn.discordapp.com/attachments/762670306824290321/863898201294635058/Level_Of_Concern_-_Livestream.m4a

**Ride: **
https://cdn.discordapp.com/attachments/762670306824290321/863898444199755826/Ride_-_Livestream.m4a

**Car Radio: **
https://cdn.discordapp.com/attachments/762670306824290321/863898949022908436/Car_Radio_-_Livestream.m4a

**Never Take It: **
https://cdn.discordapp.com/attachments/762670306824290321/863899206653313054/Never_Take_It_-_Livestream.m4a`)
        .setColor(process.env.HEX)
        message.author.send(embed)
        
    }
}