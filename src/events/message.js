const embed = require("../../commands/embed");
const Levels = require('discord-xp');
const {MessageEmbed}= require('discord.js');
const Blacklist = require('../mongoEvents/models/blackListSchema');
const Afk = require('../mongoEvents/models/afkSchema');
module.exports =  async (Discord,client,message) => {
    
    //Advanced Poll AUTOMATIC reaction 
    const pollChannelID =['734414874289111040'];
    const {content} = message;
    const eachLine = content.split('\n');
    for (const line of eachLine){
      if(line.includes('=')){
        const split = line.split('=');
        const emoji = split[0].trim()
        message.react(emoji);
      }
   }
  
    
    //Dm log
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        //   console.log(message.author.tag)
        message.author.send('<:saivote:833722631097679912>')
        return client.channels.cache.get("819310937243910174").send({
            embed: {
                description: `***USER:*** <@${message.author.id}>\n***CONTENT:*** ${message.content}`,
                color: "#0a00ff",
                footer:{
                    text:`ID: ${message.author.id}`
                },
                author:{
                    name:`${message.author.tag}`,
                    icon_url:`${message.author.displayAvatarURL()}`
                },
                thumbnail: `${message.author.MessageAttachment}`
                 
            }
        })
            .catch(console.error)
    }

    //Leveling System
    const randomXP = Math.floor(Math.random()*9)+ 1; //1-15
    const hasLeveledUP = await Levels.appendXp(message.author.id , message.guild.id, randomXP);

    if(hasLeveledUP){
      const user = await Levels.fetch(message.author.id , message.guild.id);

      const lvlembed = new Discord.MessageEmbed()
      .setDescription(`***\`\`\`You have leveled up\`\`\`***\n ${user.level -1} <:dot4:866171631536570400><:dot4:866171631536570400><:dot3:866170043351957524> <:dot3:866170043351957524> <:dot1:866171362217426955> <:dot1:866171362217426955> <a:butt:866173240527421450> **${user.level}**`)
      .setColor(process.env.HEX)
      .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
      message.channel.send(message.member,lvlembed);
      
      //LEVEL 100
      if(user.level >= 100){
        let role = message.guild.roles.cache.find(role=> role.id ==='744959271753482330')//Jim
        if(message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id)
        const lvle2 = new Discord.MessageEmbed()
            .setDescription('***REWARD FOR LEVEL 100:*** <@&744959271753482330> was added ')
            .setColor('#d88005')
         message.channel.send(lvle2)
      }
      //LEVEL 50
      else if(user.level <100 && user.level >=50){
        let role = message.guild.roles.cache.find(role=> role.id ==='744958392992530552')//Trash
        if(message.member.roles.cache.has(role.id)) return;
        else await message.member.roles.add(role.id)
        const lvle1 = new Discord.MessageEmbed()
            .setDescription('***REWARD FOR LEVEL 50:*** <@&744958392992530552> was added ')
            .setColor('#46bbeb')
        message.channel.send(lvle1)
      }
      //LEVEL 25
      else if(user.level <50 && user.level >=25){
        let role = message.guild.roles.cache.find(role=> role.id ==='744959025095114772')//Ned
        if(message.member.roles.cache.has(role.id)) return;
        else{ 
          await message.member.roles.add(role.id)
          const lvle = new Discord.MessageEmbed()
            .setDescription('***REWARD FOR LEVEL 25:*** <@&744959025095114772> was added ')
            .setColor('#879aa5')
          message.channel.send(lvle)
          console.log('ROLE 25 ADDED TO '+ message.author.tag)
          //invisable role
          let seperatorRole = message.guild.roles.cache.find(role=> role.id === '761194800950804480')
          if(message.member.roles.cache.has(seperatorRole.id)) return;
          else await message.member.roles.add(seperatorRole.id);
          console.log('seperatorRole ADDED TO '+ message.author.tag)
        }
      }      
      else{
        console.log("User hasnt reached lvl 25")
      }
    }
    
    //AFK
    if (await Afk.findOne({userID:message.author.id})){
      let afkProfile = await Afk.findOne({userID:message.author.id});
      if(afkProfile.messagesLeft == 0){
        await Afk.findOneAndDelete({userID:message.author.id});
        message.channel.send('You have been taken out of AFK mode')
      }else{
        await Afk.findOneAndUpdate({userID: message.author.id},{messagesLeft:afkProfile.messagesLeft -1})
      }
    }
    if(message.mentions.members.first()){
      await message.mentions.members.forEach(async member => {
        let afkProfile = await Afk.findOne({userID:member.user.id});
        if(afkProfile) message.channel.send(`${member.user.tag}, Is in AFK mode for: ${afkProfile.reason}`);
      });
    }
    //Command and Argument Handler
    const prefix = '.';
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
    let profile = await Blacklist.findOne({
      userID: message.author.id
    });
    if(profile) return message.channel.send('<:dot1:866171362217426955> You are banned using my commands');
    try{
        command.execute(client, message, cmd, args, Discord)
    }catch (err){
        message.channel.send('<@413755451373518864>',{
            embed:{
                name:'\`\`\`There Was An Error In Executing The Command\`\`\`',
                color: "#0a00ff"
            }
        })
        console.log(err);
    }
    
}