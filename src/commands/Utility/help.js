module.exports = {
    name: 'help',
    description: "List the available command list",
    execute(client,message,cmd,args,Discord) {
        let Category = ["staff", "fun"];

        //No Args mentioned
        if (!args[0]) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor(`${process.env.HEX}`)
                .setTitle(`Commands:`)
                .setDescription(`**:diamond_shape_with_a_dot_inside: 1) Fun**\n**:diamond_shape_with_a_dot_inside: 2) Staff**\n**:diamond_shape_with_a_dot_inside: 3) Utility**\n**:diamond_shape_with_a_dot_inside: 4) Profile**`)
                .setThumbnail('https://i.pinimg.com/originals/d7/0b/9b/d70b9bcf575f8ca592c19a7685b86920.gif')
                .setFooter('.help [Category]');
            return message.channel.send(newEmbed);
        }

        //if its catergory '1'
        if ((args[0] === "1") || (args[0].toUpperCase() === 'FUN')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor(`${process.env.HEX}`)
                .setTitle(`FUN: `)
                .setDescription(`
:diamond_shape_with_a_dot_inside: **.Minesweeper**\n❈ Mini minesweeper game.\n
:diamond_shape_with_a_dot_inside: **.Rate**\n❈ Rates your input from 0-10.\n
:diamond_shape_with_a_dot_inside: **.Eightball / .8ball / .8b**\n❈ The answer to all your questions and concerns.\n
:diamond_shape_with_a_dot_inside: **.Changemymind / .cmm **\n❈ Sends the famous meme with the given text\n
:diamond_shape_with_a_dot_inside: **.Color / .colour / .hexcolor**\n❈ Will send back the color code given as a picture.
                `)
                .setThumbnail('https://media.tenor.com/images/4feb45641cdeb61e68a5906c3fc038aa/tenor.gif')
                .setFooter('.help [Category] | Page 1/4');
            message.channel.send(newEmbed);
        }


        //if its catergory '2'
        else if ((args[0] === "2") || (args[0].toUpperCase() === 'STAFF')) {
            if (message.member.permissions.has("ADMINISTRATOR")) {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor(`${process.env.HEX}`)
                    .setTitle(`STAFF: `)
                    .setDescription(`
:diamond_shape_with_a_dot_inside: **.Ban**\n❈ bans member from the server.\n
:diamond_shape_with_a_dot_inside: **.Canvas**\n❈ sends a preset picture.\n
:diamond_shape_with_a_dot_inside: **.Clear**\n❈ clears the specified amount of messages.\n
:diamond_shape_with_a_dot_inside: **.Embed**\n❈ Send embeds in any channel with JSON file code.\n
:diamond_shape_with_a_dot_inside: **.Kick**\n❈ kicks the mentioned member from the server.\n
:diamond_shape_with_a_dot_inside: **.Mute**\n❈ mutes member/ time can be specified.\n
:diamond_shape_with_a_dot_inside: **.Unmute**\n❈ unmutes muted member.\n
:diamond_shape_with_a_dot_inside: **.Test**\n❈ [this command changes to test new features].`)
                    .setThumbnail('https://cdn.discordapp.com/attachments/762670306824290321/825643220078821406/cropped_logo.gif')
                    .setFooter('.help [Category] | Page 2/4');
                message.channel.send(newEmbed);
            }
        }
        //if its catergory '3'
        else if ((args[0] === "3") || (args[0].toUpperCase() === 'UTILITY') || (args[0].toUpperCase() === "UTIL")) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor(`${process.env.HEX}`)
                .setTitle(`UTILITY: `)
                .setDescription(`
:diamond_shape_with_a_dot_inside: **.Ping**\n❈ checks the bot's response time.\n
:diamond_shape_with_a_dot_inside: **.Avatar**\n❈ Displays the mentioned member's profile picture\n
:diamond_shape_with_a_dot_inside: **.Afk**\n❈ We will make sure pingers know you are away\n
:diamond_shape_with_a_dot_inside: **.Serverinfo / .Si**\n❈ Server information\n
:diamond_shape_with_a_dot_inside: **.Userinfo / .Ui**\n❈ Deep dive to the background story of the mentioned member\n
:diamond_shape_with_a_dot_inside: **.Suggestion / .Suggest**\n❈ Give us a piece of your mind, yummy brain *zombie noises* JK!! give us all the suggestions\n
:diamond_shape_with_a_dot_inside: **.uptime**\n❈ How long have you been awake Mr. Blue\n
`)
                .setThumbnail('https://opengameart.org/sites/default/files/butterfly%20blue%20animation%20gif%20130%20milisecond.gif')
                .setFooter('.help [Category] | Page 3/4');
            message.channel.send(newEmbed);
        }
        //if its catergory '4'
        else if ((args[0] === "4") || (args[0].toUpperCase() === 'PROFILE') || (args[0].toUpperCase() === "LEVEL")) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor(`${process.env.HEX}`)
                .setTitle(`PROFILE: `)
                .setDescription(`
:diamond_shape_with_a_dot_inside: **.Score / .Level / .lvl **\n❈ Displays the mentioned member's level and xp\n
:diamond_shape_with_a_dot_inside: **.TOP / .Leaderboard**\n❈ Displays the leaderboard and top active members of the server\n`)
                .setThumbnail('https://cdn.discordapp.com/emojis/864239950701527090.gif?v=1')
                .setFooter('.help [Category] | Page 4/4');
            message.channel.send(newEmbed);
        }
        //None of the Categories
        else {
            message.channel.send(":large_blue_diamond: You Didn't Specify Which Page\n\t:small_blue_diamond::large_blue_diamond: **Use:** `.help [Name of the Category]`\n\t\t:small_blue_diamond::large_blue_diamond: :diamond_shape_with_a_dot_inside: **Ex:** `.help 1` **OR** `.help Fun`")
        }


    }
}