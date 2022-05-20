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
    .setDescription("clears messages"),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    if (isAdmin) {
      let roles = ctx.member._roles;
      let allRoles = [];
      let userRoles = '';
      for (role of roles) {
        let mentionableRole = `<@&${role}>`;
        allRoles.push(mentionableRole);
      }
      
      for (let i = 0; i < allRoles.length; i++) {
        userRoles += ` ${allRoles[i]} `;
        console.log(`${i}) ${allRoles[i]}`);
      }
      console.log(userRoles)
      const purgeEmbed = new MessageEmbed()
        .setDescription(`**USER ROLES:** ${userRoles}`)
        .setColor("#0014e9");
      ctx.reply({ embeds: [purgeEmbed] });
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
