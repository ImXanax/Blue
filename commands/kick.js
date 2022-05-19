module.exports={
    name: 'kick',
    description: "kicks user from the server",
    execute(client,message,cmd,args,Discord){
        if(message.member.permissions.has('ADMINISTRATOR')){
            const member = message.mentions.users.first();
            if (member){
                const memberTarget=message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send("<:inchresting:773926958546812948>\n:leg: User got **Kicked**").then(message =>{
                    message.delete({timeout:10000})
                })
                .catch('/*Your Error handling if the Message isnt returned, sent, etc.*/')
            }
            else{
                message.channel.send(`<:inchresting:773926958546812948> Who are we kicking ?`)
            }
        }
        else{
            message.channel.send('You Dont Have The Permission To kick members <:laur:815259437568360468>')
        }
    }
}