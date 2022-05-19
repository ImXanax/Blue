module.exports = {
    name: "dm",
    description: 'Send a message to the mentioned user',
    execute(client,message,cmd,args,Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            let user = message.mentions.members.first()|| message.guild.members.cache.get(args[0]);
            if(!user){
                message.channel.send(":diamond_shape_with_a_dot_inside: Didnt mention who");
            }
            else if(!args.slice(1).join(" ")){
                message.channel.send(":diamond_shape_with_a_dot_inside: No messsage mentioned");
            }
            else{ 
                message.delete({timeout:1000})
                user.user.send(args.slice(1).join(' ')) 
                .catch(()=> message.channel.send(":diamond_shape_with_a_dot_inside: DM didn't get sent"))
                .then(()=> message.channel.send(`:small_blue_diamond: Sent a message to \`${user.user.username}\``))
                .then(message =>{
                    message.delete({timeout:5000})
                })
            }
        }
        else{
            message.channel.send(":small_blue_diamond: Dont have the perm to use this");
        }

    }
    
}