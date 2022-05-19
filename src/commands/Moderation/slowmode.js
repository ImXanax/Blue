
module.exports = {
    name: "slowmode",
    description: "adds slow mode to the channel",
    execute(client,message,cmd,args,Discord){
        if (message.member.permissions.has("ADMINISTRATOR")){
           let duration = args[0].toLowerCase();
           if (duration === "off"){
               duration = 0 ;
               message.channel.setRateLimitPerUser(duration);
               const slow = new Discord.MessageEmbed().setDescription(`\`\`\`slowmode is off\`\`\``).setColor(process.env.HEX);
               return message.channel.send(slow);
            }
            if (isNaN(duration))return message.channel.send("<:inchresting:813887117699973151> Please Provide A Number !!!");
            message.channel.setRateLimitPerUser(duration);
            const slowMode = new Discord.MessageEmbed().setDescription(`\`\`\`Slowmode Set To ${duration}s\`\`\``).setColor(process.env.HEX);
            return message.channel.send(slowMode);
           
        }
        else{
            message.channel.send("<:inchresting:773926958546812948> You don't have the required permissions to do that...")
            .then(message =>{
                message.delete({timeout:10000})}).catch(err =>{console.log(console.error())})
        }

    }
}