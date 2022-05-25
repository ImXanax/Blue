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
    .setName("dm")
    .setDescription("sends a private message to the user specified")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("the user that the message will be sent to")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("text")
        .setDescription("the message that will be sent to the user")
        .setRequired(true)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    const msg = ctx.options.getString("text");
    const target = ctx.options.getUser("user");
    if (isAdmin) {
      let dmEmbed = new MessageEmbed()
        .setTitle(`FROM: __${ctx.user.username}#${ctx.user.discriminator}__`)
        .setDescription(`**__MESSAGE:__**\n${msg}`)
        .setColor("#0014e9");
      await target
        .send({ embeds: [dmEmbed] })
        .then(() => {
          console.log(`DM SENT`);
          dmEmbed
            .setTitle(
              `${target.username}#${target.discriminator} has recieved the message`
            )
            .setFooter({
                text: `ID: ${target.id}`
            });

          ctx.reply({ embeds: [dmEmbed] });
        })
        .catch((e) => {
          console.error(`ERROR: ${e}`);
        });
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
