
const Canvas = require("canvas");
const {MessageEmbed}=require('discord.js');
module.exports = {
    name:'guildMemberAdd',
    once: true,
    async execute(client,message){

    }
}
    // if (message.author.bot) return;
    // //define the welcome channel
    // const channelId = "818763356495544340";
    // const channel = member.guild.channels.cache.get(channelId);

    // //console log 
    // console.log(member.user.tag);
    // //If not in a guild return
    // if (!member.guild) return;
    // //adding Slowtown Role

    // const ch = "814569894725156914";
    // const chl = member.guild.channels.cache.get(ch);
    // try{
    //    member.roles.add(`733309206647799901`);//@slowtown role
    //    const embed = new Discord.MessageEmbed()
    //     .setDescription(`**USER:**${member.user.tag} || (${member}) Joined The Server\n**ID:** ${member.user.id}`)
    //     .setColor('#000001')
    //     .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
    //   chl.send(`<@413755451373518864>`,embed);
    // }catch(err){
    //   console.log(err)
    //   chl.send(`<:dot12:866172103245692941>  <@413755451373518864>\nUser:${member}\n⛔ ERROR:Having Issues With Getting Slowtown Role Upon Join`)
    // }
    // //create a new Canvas
    // const canvas = Canvas.createCanvas(1000, 500);
    // //make it "2D"
    // const ctx = canvas.getContext('2d');
    // //set the Background to the welcome.png
    // const background = await Canvas.loadImage(`./welcome.png`);
    // ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.strokeStyle = '#f2f2f2';
    // ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // //fonts 
    // Canvas.registerFont(("./assets/fonts/n.ttf"), { family: "futura" });
    // Canvas.registerFont(("./assets/fonts/b.ttf"), { family: "futura" });
    // Canvas.registerFont(("./assets/fonts/VT.ttf"), { family: "vt" });
    // Canvas.registerFont(("./assets/fonts/Nova.ttf"), { family: "v" });
    // ctx.font = "30px futura";
    // ctx.fillStyle = "#FCE300";
    // ctx.textAlign = 'left';

    // //USERNAME
    // var userName = `${member.user.username.toUpperCase()}`;
    // //if the text is too big then smaller the text
    // console.log(userName.length)
    
    // if (userName.length>=20){
    //   ctx.font = '55px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 300, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 19){
    //   ctx.font = '55px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 317, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 18){
    //   ctx.font = '55px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 333, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 17){
    //   ctx.font = '55px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 350, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 16){
    //   ctx.font = '55px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 367, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 15){
    //   ctx.font = '60px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 355, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 14){
    //   ctx.font = '60px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 370, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 13){
    //   ctx.font = '60px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName,388, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 12){
    //   ctx.font = '65px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 384, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 11){
    //   ctx.font = '66px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 398, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 10){
    //   ctx.font = '67px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 415, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 9){
    //   ctx.font = '68px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 425, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 8){
    //   ctx.font = '69px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 440, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 7){
    //   ctx.font = '69px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 455, canvas.height / 2 + 80);
    // }
    // else if (userName.length === 6){
    //   ctx.font = '72px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 475, canvas.height / 2 + 90);
    // }
    // else if (userName.length === 5){
    //   ctx.font = '72px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 498, canvas.height / 2 + 90);
    // }
    // else if (userName.length === 4){
    //   ctx.font = '75px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 513, canvas.height / 2 + 100);
    // }
    // else if (userName.length === 3){
    //   ctx.font = '82px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 530, canvas.height / 2 + 100);
    // }
    // else if (userName.length === 2){
    //   ctx.font = '86px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 553, canvas.height / 2 + 100);
    // }
    // else if (userName.length === 1){
    //   ctx.font = '90px v';
    //   ctx.fillStyle = '#f2f2f2';
    //   ctx.fillText(userName, 573, canvas.height / 2 + 100);
    // }
    // else {
    //     ctx.font = '20px v';
    //     ctx.fillStyle = '#f2f2f2';
    //     ctx.fillText(userName, 400, canvas.height / 2 + 100);
    // }
    

    // //MEMBER COUNT
    // var memberCount = `MEMBER#${member.guild.memberCount}`;
    // ctx.font = '30px futura';
    // ctx.fillStyle = '#f2f2f2';
    // ctx.fillText(memberCount, 500, canvas.height / 2 + 180);

    // //define the user avatar
    // const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg', size: 1024 }));
    // //draw the avatar
    // ctx.drawImage(avatar, 84, canvas.height / 2 - 169, 199, 199);
    // //get it as a discord attachment
    // const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    // //send the welcome embed to there
    // channel.send(attachment);
    // setTimeout(() => {
    //     channel.send(`<a:butt:866173240527421450>Welcome to the __**Slowtown**__ server <@${member.user.id}>.<a:bluebutterflies:864239950701527090>
    //     :shield: Please read the <#558315001652445184>
    //       :cup_with_straw: Here is a list of channels you can visit:
        
    //     <:triangle:866197842473385994> **Chats:**
    //         :small_blue_diamond: General Chat 🡲 <#733325039474311238>
    //            :small_blue_diamond: Game Chat 🡲 <#740930248484454450>
    //              :small_blue_diamond: TØP Theory 🡲 <#818762129673945099>
    //                 :small_blue_diamond:  Movies & Shows 🡲 <#765249336942395412>
    //                   :small_blue_diamond: Music Suggestion 🡲 <#820718235653242910>
    //           <:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582>       
    //     <:triangle:866197842473385994> **Posting:**
    //         :small_blue_diamond: Positivity 🡲 <#761185147193262080>
    //            :small_blue_diamond: Creations 🡲 <#744609236000047184>
    //               :small_blue_diamond: Memes 🡲 <#744609425368678452>
    //                  :small_blue_diamond: Suggestions 🡲 <#750405919501844562>
    //           <:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582><:dash5:866188354776727582>
    //     <:triangle:866197842473385994> **Misc:**
    //         :small_blue_diamond: Commands 🡲 <#733633113799786539>
    //            :small_blue_diamond:  Roles & Pronouns 🡲 <#733653900581928991> 
    //               :small_blue_diamond: Poll Channel 🡲 <#734414874289111040>  
    //     `);
    // }, 250)
    


//define the Discriminator Tag
    // var textString2 = `#${member.user.discriminator}`;
    // ctx.font = 'bold 20px Genta';
    // ctx.fillStyle = '#f2f2f2';
    // ctx.fillText(textString2, 675, canvas.height / 2 + 58);
    
        //create a circular "mask"
    // ctx.beginPath();
    // ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);//position of img
    // ctx.closePath();
    // ctx.clip();

    /*  define the welcome embed
         const welcomeembed = new Discord.MessageEmbed()
        .setColor(`${process.env.HEX}`)
         .setTimestamp()
        .setFooter("Welcome", member.guild.iconURL({ dynamic: true }))
        .setDescription(`**Welcome to ${member.guild.name}!**Hi <@${member.id}>!, read and accept the rules!`)
         .setImage("attachment://welcome-image.png")
         .attachFiles(attachment);
    */