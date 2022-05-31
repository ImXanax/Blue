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
    ),
  async execute(ctx, client) {
    const isAdmin = ctx.member.roles.cache.has("734431567912370196");
    if (!isAdmin) {
      const img = new MessageAttachment("src/assets/img/x.png");
      return ctx.reply({ files: [img] });
    }
    //vars , options for:{HEX} {ROLE}
    const hex = ctx.options.getString("hex");
    const r = ctx.options.getRole("role");
    const oldRoleColor = r.hexColor;

    //hex & formatting
    let h = hex.startsWith("#", 0);
    const hexColor = h ? hex : `#${hex}`;
    const regHex = new RegExp(/#[0-9a-f]{6}/, "i");
    const isHex = regHex.test(hexColor);
    if (!isHex)
      return ctx.reply(
        `**__${hexColor}__** is not a correct hexidecimal color code`
      );

    //change color of role
    r.setColor(hexColor)
      .then(() => {
        const embed = new MessageEmbed()
          .setDescription(
            `${r}'s color changed\n\`${oldRoleColor}\` ]=-=> \`${r.hexColor}\``
          )
          .setColor("#0014e9");

        ctx.reply({ embeds: [embed] });
      })
      .catch((e) => console.error(e));
  },
};
