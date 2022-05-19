/*
VARIABLE KEY
'cipher' -> 'stores the Language translated form of the english string'
'decipher' -> 'stores the english translated form of the language string'
'citext' -> 'stores language code of a single character'
'i' -> 'keeps count of the spaces between language characters'
'message' -> 'stores the string to be encoded or decoded'
*/
const lolo = require("morse");
module.exports = {
    name: 'lolo',
    description: 'Only for my baby',
    execute(client,message,cmd,args,Discord) {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            if (!args[1]) return message.channel.send("Use .lolo <-e> <message>");
            if (args[0] === '-e') {
                args.shift();
                let result = lolo.encode(args);
                return message.channel.send(`\`${result.join("  ")}\``);
            }
            else if (args[0] === '-d') {
                args.shift();
                return message.channel.send(`\`${lolo.decode(args).join(' ')}\``);

            }
        }
        else {
            message.channel.send("https://cdn.discordapp.com/attachments/762670306824290321/832172175616114718/accessdenied.gif")
        }

    }
}