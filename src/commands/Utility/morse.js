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
    .setName("morse")
    .setDescription("encrypt or decode morse codes")
    .addSubcommand((subcmd) =>
      subcmd
        .setName("decrypt")
        .setDescription("decrypts input")
        .addStringOption((option) =>
          option.setName("input").setDescription("the input").setRequired(true)
        )
    )
    .addSubcommand((subcmd) =>
      subcmd
        .setName("encrypt")
        .setDescription("encrypt input")
        .addStringOption((option) =>
          option.setName("input").setDescription("the input").setRequired(true)
        )
    ),
  async execute(ctx, client) {
    //DECRYPT
    if (ctx.options.getSubcommand() === "decrypt") {
      const msg = ctx.options.getString("input");
      const LAN = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        "-----": "0",
      };

      const decrypt = (m) => {
        return m
          .split("   ")
          .map((w) =>
            w
              .split(" ")
              .map((l) => LAN[l])
              .join("")
          )
          .join(" ")
          .trim();
      };
      const result = decrypt(msg);
      const resultEmbed = new MessageEmbed()
        .setDescription(`\`\`\`${result}\`\`\``)
        .setColor("#0014e9");
      ctx
        .reply({ embeds: [resultEmbed] })
        .then(() => console.log)
        .catch((e) => console.error(e));
    } //ENCRYPT
    else if (ctx.options.getSubcommand() === "encrypt") {
      const msg = ctx.options.getString("input");
      const LAN = {
        'a':'.-' , 
    'b':'-...', 
    'c':'-.-.', 
    'd':'-..', 
    'e':'.'  , 
    'f':'..-.', 
    'g':'--.' , 
    'h':'....', 
    'i':'..'  , 
    'j':'.---', 
    'k':'-.-' , 
    'l':'.-..', 
    'm':'--'  , 
    'n':'-.'  , 
    'o':'---' , 
    'p':'.--.', 
    'q':'--.-', 
    'r':'.-.' , 
    's':'...' , 
    't':'-'   , 
    'u':'..-' , 
    'v':'...-', 
    'w':'.--' , 
    'x':'-..-', 
    'y':'-.--', 
    'z':'--..', 
    '1':'.----', 
    '2':'..---', 
    '3':'...--', 
    '4':'....-', 
    '5':'.....', 
    '6':'-....', 
    '7':'--...', 
    '8':'---..', 
    '9':'----.', 
    '0':'-----', 
      };
      const encrypt = (m) => {
        return m
          .split(" ")
          .map((char) =>
            char
              .split("")
              .map((letter) => LAN[letter.toLowerCase()])
              .join(" ")
          )
          .join("   ")
          .trim();
      };
      const result = encrypt(msg);
      const resultEmbed = new MessageEmbed()
        .setDescription(`\`\`\`${result}\`\`\``)
        .setColor("#0014e9");
      ctx
        .reply({ embeds: [resultEmbed] })
        .then(() => console.log)
        .catch((e) => console.error(e));
    }
  },
};
