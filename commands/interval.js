const { Channel } = require('discord.js')
const embed = require('./embed')
//:small_blue_diamond:
var myinterval;
module.exports = {
    name: "interval",
    description: "does tings",
    execute(client, message,cmd, args, Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            
            if (args[1]) return message.channel.send(`:small_blue_diamond: Too Many Arguments!`)
            const channelId = "762670306824290321";
            const channel = client.channels.cache.get(channelId);
            
            var checkminutes = 1;
            var checkthe_interval = checkminutes * 60 * 1000; //This checks every 10 minutes, change 10 to whatever minute you'd like
            var end = 0;
            
             setInterval(function(){
                channel.send("<.::.>");
                //Or anything else
             }, checkthe_interval);
            

        } else {
            message.channel.send(":small_blue_diamond: This Command Is For Admins Only...")
        }
    }
}