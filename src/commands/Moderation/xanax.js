const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
  Guild,
} = require("discord.js");
const e = require("express");
const { execute } = require("../Fun/eightball");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("xanax")
    .setDescription("mysterious outcomes")
    .addStringOption((option) =>
      option.setName("input").setDescription("the input").setRequired(true)
    ),
  async execute(ctx, client) {
    if (ctx.member.id !== "413755451373518864")
      return ctx.reply({ content: `ERR` });
    const msg = ctx.options.getString("input");
    const LAN = {
      "=-": "A",
      vv: "B",
      ">": "C",
      "[l": "D",
      ili: "E",
      "<i": "F",
      "[\\": "G",
      "l+": "H",
      ".il": "I",
      "[/": "J",
      "l-]": "K",
      "-l|": "L",
      "|l-": "M",
      "1]": "N",
      "<v>": "O",
      "}{": "P",
      "<->": "Q",
      "<1": "R",
      "|=-": "S",
      "][": "T",
      "|[": "U",
      "<.|": "V",
      "[-": "W",
      ">|<": "X",
      "]_": "Y",
      "]]": "Z",
      "l.l": "0",
      "l-l": "1",
      ll_: "2",
      "L-": "3",
      "-ll": "4",
      LL: "5",
      lLl: "6",
      Ll: "7",
      "-ll-": "8",
      "ll.": "9",
    };

    const decrypt = (m) => {
        //|l- ]_   1] =- |l- ili   .il |=-   |l- ili <1 =- [/
     return m.split('   ').map(w=>w.split(' ').map(l=>LAN[l]).join('')).join(' ').trim()
    };

    const result = decrypt(msg);

    ctx
      .reply({ content: `RESULT: ${result}` })
      .then(() => console.log)
      .catch((e) => console.error(e));
  },
};
