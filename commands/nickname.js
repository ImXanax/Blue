module.exports={
    name: 'nickname',
    aliases: ['nick'],
    description: "change your nickname on hte server",
    async execute(client,message,cmd,args,Discord){
      message.member.setNickname(args[0])
      
    }
}