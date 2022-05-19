module.exports={
    name: 'ban',
    description: "bans user from the server",
    execute(client,message,cmd,args,Discord){
        if(message.member.permissions.has('ADMINISTRATOR')){
            const member = message.mentions.users.first();
            if (member){
                const memberTarget=message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(":hand_splayed:<:inchresting:773926958546812948> User got **BANNED**").then(message =>{
                    message.delete({timeout:10000})
                })
                .catch(console.error());
            }
            else{
                message.channel.send(":small_blue_diamond: You Didn't Specify Whomst")
            }
        }
        else{
            message.channel.send(`:small_blue_diamond::large_blue_diamond::person_fencing:You don't have the perms to ban members :person_fencing::large_blue_diamond::small_blue_diamond:`)
        }
    }
}