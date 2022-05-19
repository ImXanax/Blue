const  Levels = require('discord-xp');
const Canvas = require("canvas");
module.exports = {
    name: "score",
    aliases:['level','lvl','sc'],
    description: "Returns the members level",
    async execute(client,message,cmd,args,Discord){
      let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      if(!mentionedMember) mentionedMember = message.member;

      const target = await Levels.fetch(mentionedMember.user.id,message.guild.id);
      if(!target) return message.channel.send('The member stated does not have any levels within the server.');
      
      try{
            //create a new Canvas
            const canvas = Canvas.createCanvas(1000, 1000);
            //make it "2D"
            const ctx = canvas.getContext('2d');
            //set the Background to the welcome.png
            const background = await Canvas.loadImage(`./score.png`);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#f2f2f2';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            //fonts 
            Canvas.registerFont(("./assets/fonts/compctak.ttf"), { family: "compt" });
            ctx.font = "30px futura";
            ctx.fillStyle = "#FCE300";
            ctx.textAlign = 'left';

            //define the user avatar
            const avatar = await Canvas.loadImage(mentionedMember.user.displayAvatarURL({ format: 'jpg', size: 1024 }));
            //draw the avatar
            ctx.drawImage(avatar, 397, canvas.height / 2-495, 200, 200);

            var tLevel = `${target.level}`
            let nice = '(nice)'
            
                ctx.font = '80px compt';
                ctx.fillStyle = '#FFFFFF';
                if(target.level === 69 ){
                  console.log(tLevel)
                  ctx.fillText(tLevel, canvas.width / 2, canvas.height / 2-130);
                  ctx.font = '28px compt';
                  ctx.fillText(nice, canvas.width /2 +140, canvas.height / 2-130);
                  let niceRole = message.guild.roles.cache.find(role=> role.id === '868217307883798568')
                  if(message.member.roles.cache.has(niceRole.id)) console.log('Nice Is Already Added');
                  else await message.member.roles.add(niceRole.id);
                }
                else{
                  var niceRole = message.guild.roles.cache.find(role=> role.id === '868217307883798568')
                  if(message.member.roles.cache.has(niceRole.id)){
                     message.member.roles.remove(niceRole.id);
                  }
                  ctx.font = '80px compt';
                  ctx.fillStyle = '#FFFFFF';
                  ctx.fillText(tLevel, canvas.width / 2, canvas.height / 2-130);
                }           

            var tXP = `${target.xp}/${Levels.xpFor(target.level +1)}`
            if (tXP.length === 9){
              console.log(tXP.length)
              ctx.font = '76px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else if (tXP.length === 10){
              console.log(tXP.length)
              ctx.font = '74px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else if (tXP.length === 11){
              console.log(tXP.length)
              ctx.font = '60px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else if (tXP.length === 12){
              console.log(tXP.length)
              ctx.font = '60px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else if (tXP.length === 13){
              console.log(tXP.length)
              ctx.font = '53px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else if (tXP.length === 14){
              console.log(tXP.length)
              ctx.font = '49px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else if (tXP.length === 15){
              console.log(tXP.length)
              ctx.font = '45px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else if (tXP.length === 16){
              console.log(tXP.length)
              ctx.font = '40px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
            else{
              ctx.font = '80px compt';
              ctx.fillStyle = '#FFFFFF';
              ctx.fillText(tXP, canvas.width / 2-133, canvas.height -427);
            }
              

            //get it as a discord attachment
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rank.png');
            message.channel.send(attachment);

            // //define the score embed
            // const score = new Discord.MessageEmbed()
            //     .setColor(`${process.env.HEX}`)
            //     .setImage("attachment://art-image.png")
            //     .attachFiles(attachment);
            // //define the welcome channel

        /*THE TEXT FORMAT IN CASE :b
        message.channel.send(`${mentionedMember.user.tag} is Level ${target.level} and has ${target.xp}/${Levels.xpFor(target.level +1)}`) */
      }catch (err){
        console.log(err);
      }

    }
}


            
            