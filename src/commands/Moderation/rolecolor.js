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
    .setName("rolecolor")
    .setDescription("changes the role color of the specified role")
    .addStringOption((option) =>
      option
        .setName("hex")
        .setDescription("the hex color code")
        .setRequired(true)
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription(`the user you'd like to see their roles`)
        .setRequired(false)
    )
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("the role you want its color changed")
        .setRequired(false)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    if (isAdmin) {
      //options for , {USER} {HEX} {ROLE}
      const user = ctx.options.getUser("user");
      const hex = ctx.options.getString("hex");
      const r = ctx.options.getRole("role");
      //input management
      // user
      const u = user ? user : ctx.user;
      //hex & formatting
      let h = hex.startsWith("#", 0);
      h = h ? h : `#${hex}`;
      const regHex = new RegExp(/#[0-9a-f]{6}/, "i");
      const isHex = regHex.test(h);
      if(!isHex) return ctx.reply(`**__${h}__** is not a correct hexidecimal color code`)
      
      //IF USER

      //NO USER - user = ctx emitter

      //GET ROLE

      //RESULT
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
