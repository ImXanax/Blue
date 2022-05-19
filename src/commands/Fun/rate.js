
module.exports={
    name: 'rate',
    description: "rates your message between 0/10",
    execute(client,message,cmd,args,Discord){
        if (!args[0]) return message.channel.send(`<:inchresting:813887117699973151> i can't rate blank...`);
        if ((args[0].toUpperCase()==='LAUREN')||(args[0].toUpperCase()===`MERAJ`)||(args[0].toUpperCase()===`MERI`)||(args[0].toUpperCase()===`LOLO`)||(args[0].toUpperCase()===`COFFEE`)) {
            const newEmbed = new Discord.MessageEmbed()
            .setColor(`${process.env.HEX}`)
            .setDescription(`${args} gets a **10/10**`)
            message.channel.send(newEmbed);
            
        }
        // else if (args[0].toUpperCase()==='MERAJ') {
        //     const newEmbed = new Discord.MessageEmbed()
        //     .setColor('#ccbb00')
        //     .setDescription(`${args} gets a **10/10**`)
        //     message.channel.send(newEmbed);
        // }
        else{
            let store = Math.floor((Math.random()*10)+1)
            const newEmbed = new Discord.MessageEmbed()
            .setColor(`${process.env.HEX}`)
            .setDescription(`${args} gets a **${store}/10**`)
             message.channel.send(newEmbed);
        }
    }
}
