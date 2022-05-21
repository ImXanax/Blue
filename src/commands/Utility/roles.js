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
      if (mentionedUser) {
        await ctx.guild.members
          .fetch(mentionedUser.id)
          .then((u) => roles = u._roles)
          .catch(console.error);
        }else{
          roles = ctx.member._roles;
        }

      for (role of roles) {
        let mentionableRole = `<@&${role}>`;
        allRoles.push(mentionableRole);
      }

      for (let i = 0; i < allRoles.length; i++) {
        userRoles += ` ${allRoles[i]} `;
      }
      const rolesEmbed = new MessageEmbed()
        .setDescription(`**USER ROLES:** ${userRoles}`)
        .setColor("#0014e9");
      ctx.reply({ embeds: [rolesEmbed] });
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
