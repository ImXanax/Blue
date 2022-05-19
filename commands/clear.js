module.exports={
    name: 'clear',
    description: "clears message history to the provided number",
    async execute(client,message,cmd,args,Discord){
        if(message.member.permissions.has('ADMINISTRATOR')){
            if (!args[0]) return message.channel.send(`<:hm:815189442293661716> How many tho?!`);
            if (isNaN(args[0])) return message.channel.send(`<:hm:815189442293661716> Gimme A Number!!`);
            if (args[0]>100) return message.channel.send('<:hm:815189442293661716> The number should be between **1** and **100**')
            if (args[0]<1) return message.channel.send('<:hm:815189442293661716> The number should be between **1** and **100**')      
            await message.channel.messages.fetch({limit:args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                message.channel.send(`<:Tink:773685644094472212>*${args} messages deleted...*`).then(message =>{
                    message.delete({timeout:10000})
                })
                .catch('/*Your Error handling if the Message isnt returned, sent, etc.*/')
            })
        }
        else{
            message.channel.send(`:clap:<:inchresting:813887117699973151> **nO!!!**\nYou Don't Have Perms to do that`)
        }

    }
}