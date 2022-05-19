const Levels = require('discord-xp');
module.exports={
    name: 'edit',
    description: "Edits a users level or xp",
    
    async execute(client,message,cmd,args,Discord){

      //IF ITS NOT STAFF MEMBER
      const embed = new Discord.MessageEmbed()
            .setDescription("\`\`\`STAFF COMMAND CANNOT BE USED\`\`\`")
            .setColor("#FF0000")
      if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(embed);
      
      //Usage Of Command
      let usage = '\`\`\`.edit @member [xp,level] [add,set,remove] <number>\`\`\`';

      //Fetch The Mentioned Member
      const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      
      //DEALING WITH ARGS
      const embed1 = new Discord.MessageEmbed()
            .setDescription(` \`\`\`No Arguments Provided\`\`\`\n${usage}`)
            .setColor("#FF0000")
      if(!args) return message.channel.send(embed1);

      const embed2 = new Discord.MessageEmbed()
            .setDescription(` \`\`\`Member Does Not Exist In The Server\`\`\`\n${usage}`)
            .setColor("#FF0000")
      if(!mentionedMember) return message.channel.send(embed2);

      const embed3 = new Discord.MessageEmbed()
            .setDescription(` \`\`\`State If You Want to Edit Level Or XP\`\`\`\n${usage}`)
            .setColor("#FF0000")
      if(!args[1]) return message.channel.send(embed3);

      const embed4 = new Discord.MessageEmbed()
            .setDescription(` \`\`\`Your Second Argument Is Not Xp Or Level\`\`\`\n${usage}`)
            .setColor("#FF0000")
      if(!['xp','level'].includes(args[1])) return message.channel.send(embed4);
      
      /* XP */
      if(args[1]==='xp'){
        if(!['add','set','remove'].includes(args[2])) return message.channel.send(`Your Third Argument Must Be Either Adding Setting Or Removing\n **Usage:** ${usage}`);
        const value = Number(args[3]);
        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if(!levelUser) return message.channel.send('The Member Is Not Registered Yet');
        if(args[2]==='add'){
          if(!value) return messa.channel.send('The Number Stated Is Not A Valid Number.');
          try{
            await Levels.appendXp(mentionedMember.user.id ,message.guild.id, value);
            message.channel.send(`Added: ${value} XP to ${mentionedMember.user.tag}`);
          }catch(err){
            console.log(err);
          }
        }
        else if(args[2]==='set'){
          if(!value) return messa.channel.send('The Number Stated Is Not A Valid Number.');
          try{
            await Levels.setXp(mentionedMember.user.id ,message.guild.id, value);
            message.channel.send(`Set: ${value} XP to ${mentionedMember.user.tag}`);
          }catch(err){
            console.log(err);
          }
        }
        else if(args[2]==='remove'){
          if(!value) return messa.channel.send('The Number Stated Is Not A Valid Number.');
          try{
            await Levels.subtractXp(mentionedMember.user.id ,message.guild.id, value);
            message.channel.send(`Removed: ${value} XP to ${mentionedMember.user.tag}`);
          }catch(err){
            console.log(err);
          }
        }
      //if LEVEL
      }else if (args[1]=== 'level'){
        if(!['add','set','remove'].includes(args[2])) return message.channel.send(`Your Third Argument Must Be Either Adding Setting Or Removing\n **Usage:** ${usage}`);
        const value = Number(args[3]);
        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id);
        if(!levelUser) return message.channel.send('The Member Is Not Registered Yet');
        if(args[2]==='add'){
          if(!value) return messa.channel.send('The Number Stated Is Not A Valid Number.');
          try{
            await Levels.appendLevel(mentionedMember.user.id ,message.guild.id, value);
            message.channel.send(`Added: ${value} level(s) to ${mentionedMember.user.tag}`);
          }catch(err){
            console.log(err);
          }
        }
        else if(args[2]==='set'){
          if(!value) return messa.channel.send('The Number Stated Is Not A Valid Number.');
          try{
            await Levels.setLevel(mentionedMember.user.id ,message.guild.id, value);
            message.channel.send(`Set: ${value} level(s) to ${mentionedMember.user.tag}`);
          }catch(err){
            console.log(err);
          }
        }
        else if(args[2]==='remove'){
          if(!value) return messa.channel.send('The Number Stated Is Not A Valid Number.');
          try{
            await Levels.subtractLevel(mentionedMember.user.id ,message.guild.id, value);
            message.channel.send(`Removed: ${value} level(s) to ${mentionedMember.user.tag}`);
          }catch(err){
            console.log(err);
          }
        }
      }
    }

}