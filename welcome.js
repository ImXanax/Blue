const Discord = require('discord.js');
const Canvas = require("canvas");
module.exports = (client) => {
    client.on("guildMemberAdd", async member => {
        console.log(member.user.tag);
        //If not in a guild return
        if (!member.guild) return;
        //create a new Canvas
        const canvas = Canvas.createCanvas(1000, 500);
        //make it "2D"
        const ctx = canvas.getContext('2d');
        //set the Background to the welcome.png
        const background = await Canvas.loadImage(`./welcome.png`);
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
        var textString3 = `${member.user.username}`; //${member.user.username}
        //if the text is too big then smaller the text
        if (textString3.length >= 15) {
            ctx.font = 'Bold 50px Genta';
            ctx.fillStyle = '#f2f2f2';
            ctx.fillText(textString3, 320, canvas.height / 2 + 70);
        }
        //else dont do it
        else {
            ctx.font = 'Bol d70px Genta';
            ctx.fillStyle = '#f2f2f2';
            ctx.fillText(textString3, 320, canvas.height / 2 + 40);
        }
        //define the Discriminator Tag
        // var textString2 = `#${member.user.discriminator}`;
        // ctx.font = 'bold 20px Genta';
        // ctx.fillStyle = '#f2f2f2';
        // ctx.fillText(textString2, 675, canvas.height / 2 + 58);
        //define the Member count
        var textString4 = `Member #${member.guild.memberCount}`;
        ctx.font = 'bold 35px Genta';
        ctx.fillStyle = '#8f4bed';
        ctx.fillText(textString4, 390, canvas.height / 2 + 180);
        

        //create a circular "mask"
        // ctx.beginPath();
        // ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
        // ctx.closePath();
        // ctx.clip();

        //define the user avatar
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 1024 }));
        //draw the avatar
        ctx.drawImage(avatar, 100, canvas.height / 2 - 166, 150, 150);
        //get it as a discord attachment
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

        /*  define the welcome embed
             const welcomeembed = new Discord.MessageEmbed()
            .setColor(`${process.env.HEX}`)
             .setTimestamp()
            .setFooter("Welcome", member.guild.iconURL({ dynamic: true }))
            .setDescription(`**Welcome to ${member.guild.name}!**Hi <@${member.id}>!, read and accept the rules!`)
             .setImage("attachment://welcome-image.png")
             .attachFiles(attachment);
        */
        //define the welcome channel
        const channelId = "762670306824290321";
        const channel = member.guild.channels.cache.get(channelId);
        //send the welcome embed to there
        
        channel.send(attachment);
        setTimeout(()=>{
        channel.send(`:butterfly: Welcome to the __**Slowtown**__ server <@${member.user.id}>. :blue_heart: 
        :shield: Please read the <#558315001652445184>
        :cup_with_straw: Here list of channels you can visit:
            :diamond_shape_with_a_dot_inside: **Chats:**
                 :large_blue_diamond: General Chat 🡲 <#733325039474311238>
            :large_blue_diamond: Game Chat 🡲 <#740930248484454450>
                 :large_blue_diamond: TØP Theory 🡲 <#818762129673945099>
            :large_blue_diamond:  Movies & Shows 🡲 <#765249336942395412>
                 :small_blue_diamond: 
            :diamond_shape_with_a_dot_inside: **Posting:**
                 :large_blue_diamond: Positivity 🡲 <#761185147193262080>
            :large_blue_diamond: Creations 🡲 <#744609236000047184>
                 :large_blue_diamond: Memes 🡲 <#744609425368678452>
            :large_blue_diamond: Suggestions 🡲 <#750405919501844562>
                 :small_blue_diamond:
            :diamond_shape_with_a_dot_inside: **Misc:**
                 :large_blue_diamond: Commands 🡲 <#733633113799786539>
            :large_blue_diamond:  Roles & Pronouns 🡲 <#733653900581928991> 
                 :large_blue_diamond: Poll Channel 🡲 <#734414874289111040>  
        `);
        },250)
    
    })
}
