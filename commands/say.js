const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "say",
    description: 'Send a message to the mentioned channel',
    execute(client,message,cmd,args,Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            let targetChannel = message.mentions.channels.first();
            // console.log(targetChannel);
            if (!targetChannel) {
                message.channel.send("No Channel was Specified");
            }
            else if (!args.slice(1).join(" ")) {
                message.channel.send("There is no message");

            }
            //removes the channel mentions
            args.shift();

            try {
                //get the json data
                const m = args.join(" ")
                targetChannel.send(m);
            } catch (error) {
                message.reply(`um`)
            }
        }
        else {
            message.channel.send("Dont have the perm to use this");
        }

    }

}
