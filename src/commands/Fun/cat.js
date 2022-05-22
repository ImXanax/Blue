const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageAttachment,
  MessageEmbed,
  Message,
  Guild,
} = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("summon a kitty picture or gif"),
  async execute(ctx, client) {
    await ctx.deferReply();
    await axios({
      url: "https://api.thecatapi.com/v1/images/search",
      method: "get",
      headers: {
        Accept: "application/json",
        "x-api-key": `${process.env.CAT_API_KEY}`,
      },
    })
      .then((res) => {
        const img = res.data[0].url;
        const image = new MessageAttachment(img);
        try {
          ctx.editReply({ files: [image] });
        } catch (e) {
          console.error(`ERR: ${e}`);
          ctx.editReply({
            content: `an err occured with the API , try again later`,
          });
        }
        console.log(`RES: ${res.data[0].url}`);
      })
      .catch((err) => {
        console.error(`ERR: ${err}`);
      });
  },
};
