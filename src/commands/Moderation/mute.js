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
    .setName("mute")
    .setDescription("mutes a user for a specified amount of time")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("the user you want muted")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("time")
        .setDescription("amount of time user would be muted for")
        .setRequired(false)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    //options
    const time = ctx.options.getInteger("time");
    const target = ctx.options.getUser("user");
    const memberTarget = ctx.guild.members.cache.get(target.id);

    if (!isAdmin) {
      const img = new MessageAttachment("src/assets/img/x.png");
      return ctx.reply({ files: [img] });
    }
    // get mute role
    const muteRole = ctx.guild.roles.cache.find(
      (role) => role.id === "751532830517100677"
    );
    //mute with time
    if (time) {
      memberTarget.roles
        .add(muteRole)
        .then(() => {
          ctx.reply(`${target} is muted for **${time / 1000}** seconds`);
        })
        .catch((e) => console.error(`ERROR: ${e}`));
      setTimeout(() => {
        memberTarget.roles
          .remove(muteRole)
          .then((res) => console.log(`${target} unmuted`))
          .catch((e) => console.error(`ERR ${e}`));
      }, time);
    }
    //mute till unmuted
    else {
      memberTarget.roles
        .add(muteRole)
        .then(() => {
          ctx.reply(`${target} has been muted`);
        })
        .catch((e) => console.error(`ERR: ${e}`));
    }
  },
};
