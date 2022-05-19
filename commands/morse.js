const morse = require("morse");
module.exports = {
    name: "morse",
    description: "MORSE translation",
    execute(client,message,cmd,args,Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")){
           message.channel.send('under construction...')
        }
        else{
            message.channel.send("https://cdn.discordapp.com/attachments/762670306824290321/832172175616114718/accessdenied.gif")
        }
    }
}