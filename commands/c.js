const { Client } = require("discord.js");
const Canvas = require('canvas')
module.exports = {
    name: 'c',
    description: 'a command using the canvas',
    async execute(client,message,cmd,args,Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            client.emit('guildMemberAdd',message.member)
        }
        else{
            message.channel.send("Something Happened In Emiting the C File");
        }
    }
}
