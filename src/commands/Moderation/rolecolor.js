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
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("the role you want its color changed")
        .setRequired(false)
    )
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription(`the user you'd like to see their roles`)
        .setRequired(false)
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    if (isAdmin) {
      //vars , options for: {USER} {HEX} {ROLE}
      const hex = ctx.options.getString("hex");
      const r = ctx.options.getRole("role");
      const user = ctx.options.getUser("user");
      const oldRoleColor = r.hexColor;
      let u;
      let hasRole = false;

      //user
      if (user) {
        try {
          u = await ctx.guild.members.fetch(user.id);
        } catch (e) {
          console.error;
        }
      } else {
        u = ctx.member;
      }

      //hex & formatting
      let h = hex.startsWith("#", 0);
      const hexColor = h ? hex : `#${hex}`;
      const regHex = new RegExp(/#[0-9a-f]{6}/, "i");
      const isHex = regHex.test(hexColor);
      if (!isHex)
        return ctx.reply(
          `**__${hexColor}__** is not a correct hexidecimal color code`
        );
      //u has the role?
      if (u.roles.cache.has(r.id)) {
        r.setColor(hexColor).then(()=>{
          const embed = new MessageEmbed()
            .setDescription(
              `${r}'s color changed\n\`${oldRoleColor}\`==>\`${r.hexColor}\``
            )
            .setColor("#0014e9");

          ctx.reply({embeds:[embed]})
        }).catch((e)=> console.error(e))
      }
    } else {
      ctx.reply({ content: `You Don't Have Permissions` });
    }
  },
};
