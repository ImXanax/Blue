const clock = require("node-emoji-clock")
const moment = require('moment-timezone');
module.exports = {
    name: "time",
    aliases: ['t'],
   
    description: "Shows the time in CT / IRST / PT",
    execute(client,message,cmd,args,Discord) {
        if (message.attachments.size > 0) {
            message.channel.send("hi")
        }
        const times = new Discord.MessageEmbed()
            .setDescription(`
            :flag_us:\`CALI:\`\n${moment().tz("America/Los_Angeles").format("**HH:mm** *PT* - dddd, MMMM Do")}\n
<:yeehaw:744598905332826244>\`TEXAS:\`\n${moment().tz("America/Chicago").format("**HH:mm** *CT* - dddd, MMMM Do")}\n
            :flag_ir:\`IRAN:\`\n${moment().tz("Asia/Tehran").format("**HH:mm** *IRT* - dddd, MMMM Do")}`)

            .setColor(`${process.env.HEX}`)
        message.channel.send(times);


    }
}