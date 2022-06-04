const { Embed } = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: 'ready',
    once: true,
    async execute(client){
        const embed = new MessageEmbed().setDescription(`\`\`\`All System's Operational\`\`\``).setColor('#0014e9')
        client.channels.cache.get('762670306824290321').send({embeds:[embed]});
        console.log('🔵 Blue is Online -l||l-');

        const presenceArr = [
            `ψ`,
            `<X>`,
            `DEATH OF PEACE OF MIND`,
            `vv |[ ][ ][ ili <1 <i -l| ]_`
        ]
        let i=0;
        setInterval(() => {
            client.user.setPresence({
                activities: [{ 
                    name: presenceArr[i++ % presenceArr.length],
                    type: `LISTENING`,
                   }] 
            });
        }, 5000);
        
    },
};