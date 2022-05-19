const  Levels = require('discord-xp');
module.exports = {
    name: "top",
    aliases: ['leaderboard'],
    description: "returns the leaderboard of users with the most XP",
    async execute(client,message,cmd,args,Discord){
      //grab top 10 users with most xp
      const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); 
      //process the leaderboard.
      if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
      const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); 
      // We map the outputs.
      const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); 
      message.channel.send(`**Leaderboard**:\n\n${lb.join("\n\n")}`);
    }
}