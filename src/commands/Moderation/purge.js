const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription(
      "purges message history (messages that are 2 weeks old by default)"
    )
    .addChannelOption((option) =>
      option
        .setName("channel")
        .setDescription("the channel you would like the messages in")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("number")
        .setDescription("amount of messages you would like to delete")
        .setRequired(true)
    )
    .addBooleanOption((option) =>
      option
        .setName("old")
        .setDescription("option to delete messages older than 2 weeks if true")
        .setRequired(true)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    const chl = ctx.options.getChannel('channel')
    const num = ctx.options.getInteger('number')
    const filter = ctx.options.getBoolean('old')
    if (isAdmin) {
      chl.bulkDelete(num,filter).then((m)=>{
        console.log(`DEL MSG: ${m.size}`)
        ctx.reply({content:`Deleted ${num} Messages...`})
      }).catch((e)=> {
        console.error(`ERR: ${e}`)
        ctx.reply({content:`ERR in Deleting`})
      })
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
