const { Client } = require("discord.js");
module.exports={
    name: 'ping',
    description: "this is a ping command",
    execute(client,message,cmd,args,Discord){
        if(message.member.permissions.has('ADMINISTRATOR')){
            message.channel.send(`**LATENCY:** \`${Date.now() - message.createdTimestamp}ms\`\n**API:** \`${Math.round(client.ws.ping)}ms\```**LATENCY:** ${}`)
        }
        else{
            message.channel.send('You Dont Have The Permission To Use This Command.<:laur:815259437568360468>')
        }
        
    }
}