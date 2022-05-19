
module.exports={
    name: 'unmute',
    description: "unmutes members for a set amount of time",
    execute(client,message,cmd,args,Discord){
        if(message.member.permissions.has("ADMINISTRATOR")){    
            const target = message.mentions.users.first();
            if (target){
                let muteRole = message.guild.roles.cache.find(role => role.name ==='Shush...');
                let memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
            }else{
                message.channel.send(`<:inchresting:773926958546812948>Whomst you unmuting ?`)
            }
        }else{
            message.channel.send("<:inchresting:773926958546812948> You Can't Unshush People...");
        }
    }

}