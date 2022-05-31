const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
  MessageAttachment,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("slowmode")
    .setDescription("sets slowmode for an amount of time specified")
    // on
    .addSubcommand((subcmd) =>
      subcmd
        .setName("on")
        .setDescription("turn on slowmode")
        .addChannelOption((option) =>
          option
            .setName("channel")
            .setDescription("the channel the slowmode will be on")
            .setRequired(true)
        )
        .addIntegerOption((option) =>
          option
            .setName("time")
            .setDescription("the amount of time slowmode will be on in seconds")
            .setRequired(false)
        )
    )
    // off
    .addSubcommand((subcmd) =>
      subcmd
        .setName("off")
        .setDescription("turn slowmode off")
        .addChannelOption((option) =>
          option
            .setName("channel")
            .setDescription("the channel slowmode will turn off on")
        )
    ),

  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    if (!isAdmin) {
      const img = new MessageAttachment('src/assets/img/x.png')
      return ctx.reply({files:[img]});
    }
      //subcommand

      if (ctx.options.getSubcommand() === "on") {
        const chl = ctx.options.getChannel("channel");
        const time = ctx.options.getInteger("time");
        if (time) {
          chl
            .setRateLimitPerUser(time)
            .then(() => {
              const slowEmbed = new MessageEmbed()
                .setDescription(`SLOWMODE IS ON FOR __**${time}**__s`)
                .setColor("#0014e9");

              ctx.reply({ embeds: [slowEmbed] });
            })
            .catch((e) => console.error(`ERR: ${e}`));
        } else {
          chl
            .setRateLimitPerUser(10)
            .then(() => {
              const slowEmbed = new MessageEmbed()
                .setDescription(`SLOWMODE IS ON FOR __**10**__s`)
                .setColor("#0014e9");

              ctx.reply({ embeds: [slowEmbed] });
            })
            .catch((e) => console.error(`ERR: ${e}`));
        }
      }
      else if (ctx.options.getSubcommand()==="off") {
        const chl = ctx.options.getChannel("channel");

        chl
          .setRateLimitPerUser(0)
          .then(() => {
            const slowEmbed = new MessageEmbed()
              .setDescription(`SLOWMODE IS OFF`)
              .setColor("#0014e9");

            ctx.reply({ embeds: [slowEmbed] });
          })
          .catch((e) => console.error(`ERR: ${e}`));
      }
  
  },
};
