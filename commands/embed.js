module.exports = {
    name: 'embed',
    description: "sends an embed to the mentioned channel",
    minArgs: 2,
    expectedArgs: '<Channel Mention> <JSON>',
    execute(client,message,cmd,args,Discord) {
        if(message.member.permissions.has('ADMINISTRATOR')){
            const targetChannel = message.mentions.channels.first()

            if (!targetChannel) {
                message.channel.send(`<:inchresting:813887117699973151> You Didn't Specify Which Channel`)
                message.channel.send("`.embed #channel 'THE JSON FILE'`")
                return
            }
            //removes the channel mention
            args.shift()
            try{
                //get the json data
                const json = JSON.parse(args.join(' '))
                const {content = ''}=json
                //send the embed
                targetChannel.send(content, {
                    embed: json
                })
            }catch(error){
                message.reply(`Invalid JSON ${error.message}`)
            }
        }else{
            message.channel.send("<:inchresting:813887117699973151> Sorry You aren't allowed to do that.");
        }
    }
}