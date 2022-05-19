module.exports = (Discord,client) =>{
    console.log("🟢  Blue is online")
    client.channels.cache.get('762670306824290321').send({
        embed: {
            description: "```All System's Running```",
            color: "#0a00ff"
        }
    })
    //Status Array 
    const atv = [
      'Scaled And Icy',
      'Redecorate',
      'No Chances',
      'Bounce Man',
      'Formidable',
      'Mulberry Street',
      'Saturday',
      'The Outside',
      'Shy Away',
      'Choker',
      'Good Day',
      'ψ'

    ]
    //Looping through status with an interval
    let i = 0;
    setInterval(() => client.user.setPresence({
        activity: {
            name: ` ${atv[i++ % atv.length]}`,
            type: `LISTENING`
        }
    }), 25000)
    //Setting Bots Status type
    client.user.setStatus("online");
}