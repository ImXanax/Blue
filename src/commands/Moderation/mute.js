const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "mutes members for a set amount of time",
    execute(client,message,cmd,args,Discord) {
        if(message.member.permissions.has('ADMINISTRATOR')){
            const target = message.mentions.users.first();
            //Without time
            if (target) {
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Shush...');
                let memberTarget = message.guild.members.cache.get(target.id);
                //If Second Arguemnt isnt provided Mutes the member WITHOUT TIMER
                if (!args[1]) {
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }

                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send(`<:inchresting:773926958546812948> Who we shushing?`);
            }
        }else{
            message.channel.send(":clap:<:inchresting:773926958546812948>You are not allowed to *Shush* people. ")
        }
    }

}