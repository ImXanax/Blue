const canva = require("canvacord");
const { changemymind } = require("canvacord/src/Canvacord");
const { execute } = require("./embed");
module.exports = {
    name: "changemymind",
    aliases: ['cmm'],
    description: "change my mind picture",
    async execute(client,message,cmd,args,Discord){
        try {
            let text = args.join(" ");
            if (!args[0]) return message.channel.send(":small_blue_diamond: You didn't mention any Text");
            let image = await canva.Canvas.changemymind(text);
            let changeMyMind = new Discord.MessageAttachment(image, "cmm.png")
            message.channel.send(changeMyMind);
        } catch (e) { console.log("[ERROR]", e) }
    }
}