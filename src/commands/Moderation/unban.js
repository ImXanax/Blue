module.exports={
    name: 'unban',
    description: "unbans user from the server",
    async execute(client,message,cmd,args,Discord){
        if(message.member.permissions.has('ADMINISTRATOR')){
          const member = args[0];
          if (!member) return message.channel.send("You havent Specified the User's ID");
          try{
              message.guild.fetchBans().then(bans =>{
                  message.guild.members.unban(member);
              })
              await message.channel.send(`<@${member}> Has been unbanned`);
            } catch(e){
                return message.channel.send("An Error Has Occurred!!!!!");
            }
        }
        else{
            message.channel.send('You Dont Have The Permission To UNBan members <:laur:815259437568360468>')
        }
    }
}