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
    .setName("unmute")
    .setDescription("unmutes a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("the user you want muted")
        .setRequired(true)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    //options
    const target = ctx.options.getUser("user");
    const memberTarget = ctx.guild.members.cache.get(target.id);
    let isMuted = false;

    if (!isAdmin) {
      const img = new MessageAttachment("src/assets/img/x.png");
      return ctx.reply({ files: [img] });
    }
    // get mute role
    const muteRole = ctx.guild.roles.cache.find(
      (role) => role.id === "751532830517100677"
    );
    memberTarget.roles.cache.some((role) => {
      if (role.id === muteRole.id) isMuted = true;
    });
    if (isMuted) {
      memberTarget.roles
        .remove(muteRole)
        .then(() => {
          ctx.reply(`${target} has been unmuted`);
        })
        .catch((e) => console.error(`ERR: ${e}`));
    } else {
      ctx.reply(`${target} is already unmuted`);
    }
  },
};
