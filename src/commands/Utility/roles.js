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
    .setName("roles")
    .setDescription("displays all the roles you have equipped")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription(`the user you'd like to see their roles`)
        .setRequired(false)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    if (isAdmin) {
      let allRoles = [];
      let userRoles = "";
      let roles;

      let mentionedUser = ctx.options.getUser("user");
      console.log(mentionedUser)
      if (mentionedUser) {
        await ctx.guild.members
          .fetch(mentionedUser.id)
          .then((u) => roles = u._roles)
          .catch(console.error);
        }else{
          roles = ctx.member._roles;
        }
        console.log(ctx.member.user.username)
      for (role of roles) {
        let mentionableRole = `<@&${role}>`;
        allRoles.push(mentionableRole);
      }

      for (let i = 0; i < allRoles.length; i++) {
        userRoles += `\n${allRoles[i]} `;
      }
      const rolesEmbed = new MessageEmbed()
        .setTitle(`${mentionedUser ? mentionedUser.username + '#' + mentionedUser.discriminator : ctx.member.user.username + '#' + ctx.member.user.discriminator}`)
        .setDescription(`__**Roles:**__ ${userRoles}`)
        .setColor("#0014e9");
      ctx.reply({ embeds: [rolesEmbed] });
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
