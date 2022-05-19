const Canvas = require("canvas");
module.exports = {
    name: "art",
    description: "sends said message text for art compt",
    async execute(client, message, cmd,args, Discord) {
        const channelId = "762670306824290321";
        const channel = client.channels.cache.get(channelId);
        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[0]) return message.channel.send(":small_blue_diamond: You Didn't Provide a Text");
            let first = args.join(" ").split("-");
            //create a new Canvas
            const canvas = Canvas.createCanvas(1000, 500);
            //make it "2D"
            const ctx = canvas.getContext('2d');
            //set the Background to the welcome.png
            const background = await Canvas.loadImage(`./art.png`);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#f2f2f2';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            //fonts 
            Canvas.registerFont(("./assets/fonts/n.ttf"), { family: "futura" });
            Canvas.registerFont(("./assets/fonts/b.ttf"), { family: "futura" });
            ctx.font = "30px futura";
            ctx.fillStyle = "#FCE300";
            ctx.textAlign = 'left';
            //set the first text string 
            var week = first[0].toUpperCase().trim();
            console.log(week.length);
            //if the text is too big then smaller the text
            if (week.length <= 0){
              message.channel.send("<:dot:859444842261643315> No Week Number Was Provided");
            }//week#02
            else if (week.length <= 20) {
                ctx.font = '54px futura';
                ctx.fillStyle = '#000001';
                ctx.fillText(week, canvas.width / 2-250, canvas.height / 2-113);
                ctx.fillStyle = '#f7b66f';
                ctx.fillText(week, canvas.width/2-250, canvas.height /2 -113);
            }//else dont do it
            else {
                return message.channel.send("<:dot:859444842261643315>More than 20 letters for week text is not allowed ")
            }
  
            var title = first[1].toUpperCase().trim();
            ctx.font = '100px futura';
            ctx.fillStyle = '#000001';
            title =title.trim();
            
            console.log(title.length);
            if (title.length<=0){
              return message.channel.send("<:dot:859444842261643315> No Text For The Title Was Provided");
            }
            else if (title.length<=20){
                ctx.font = '53px futura';
                ctx.fillText(title, canvas.width / 2-250, canvas.height-113);
                ctx.fillStyle= "#0a00ff";
                ctx.fillText(title, canvas.width / 2-250, canvas.height-113); 
            }
            else{
               return message.channel.send("<:dot:859444842261643315> For Now The Limit For Title Is 20 **Letters** ")
            }
  
            //get it as a discord attachment
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'art-image.png');

            //define the welcome embed
            const welcomeembed = new Discord.MessageEmbed()
                .setColor(`${process.env.HEX2}`)
                .setImage("attachment://art-image.png")
                .attachFiles(attachment);
            //define the welcome channel
            let Mention = first[2];
            if(!Mention){
                channel.send(Mention,welcomeembed);
            }
            else{
            //send the welcome embed to there
            channel.send(Mention,welcomeembed);
            }
        } else {
            message.channel.send({
                embed: {
                    description: "This Command is for Admins Only",
                    color: 1342719
                }
            })
        }
    }
}