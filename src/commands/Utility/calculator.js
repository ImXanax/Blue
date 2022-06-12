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
    .setName("calculator")
    .setDescription("calculates the inputs"),
  async execute(ctx, client) {
    /*
     *
     */
    const r1 = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("7").setLabel("7").setStyle("PRIMARY"),
      new MessageButton().setCustomId("8").setLabel("8").setStyle("PRIMARY"),
      new MessageButton().setCustomId("9").setLabel("9").setStyle("PRIMARY"),
      new MessageButton().setCustomId("p").setLabel("+").setStyle("SECONDARY")
    );
    const r2 = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("4").setLabel("4").setStyle("PRIMARY"),
      new MessageButton().setCustomId("5").setLabel("5").setStyle("PRIMARY"),
      new MessageButton().setCustomId("6").setLabel("6").setStyle("PRIMARY"),
      new MessageButton().setCustomId("m").setLabel("-").setStyle("SECONDARY")
    );
    const r3 = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("1").setLabel("1").setStyle("PRIMARY"),
      new MessageButton().setCustomId("2").setLabel("2").setStyle("PRIMARY"),
      new MessageButton().setCustomId("3").setLabel("3").setStyle("PRIMARY"),
      new MessageButton().setCustomId("t").setLabel("x").setStyle("SECONDARY")
    );
    const r4 = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("c").setLabel("C").setStyle("DANGER"),
      new MessageButton().setCustomId("0").setLabel("0").setStyle("PRIMARY"),
      new MessageButton().setCustomId("e").setLabel("=").setStyle("SECONDARY"),
      new MessageButton().setCustomId("d").setLabel("/").setStyle("SECONDARY")
    );
    ctx.reply({ components: [r1, r2, r3,r4] , fetchReply: true },);
  },
};
