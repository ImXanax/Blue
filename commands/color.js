const canva = require("canvacord");
const { color } = require("canvacord/src/Canvacord");
const Discord = require("discord.js");
module.exports = {
    name: "color",
    aliases: ['hexcolor','colour'],
    description: "Shows the Hex Color Code",
    async execute(client,message,cmd, args, Disocrd) {
        try {
            if (!args[0]) return message.channel.send("You didn't mention the hex color code");
            let code = args.join(" ");
            if(code.startsWith("#")){
                 code = args[0].slice(1,7)
            }
            let image = await canva.Canvas.color(`#${code}`,false,150,1000);
            // let colorA = new Discord.MessageAttachment(image, "c.png")
            // message.channel.send(`**#${code.toUpperCase()}**`,colorA);
            const embed = new Discord.MessageEmbed()
                .attachFiles([{name: 'Color.png',attachment: image}])
                .setImage('attachment://Color.png')
                .setColor(`#${code}`)
            message.channel.send(`**#${code.toUpperCase()}**`,embed)
        } catch (e) { console.log("[ERROR]", e) }
    }
}