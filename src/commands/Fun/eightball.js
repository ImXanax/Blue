const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  Message,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("eightball")
    .setDescription("8ball game random poll of answers")
    .addStringOption((option) =>
      option.setName("text").setDescription("Message You would like to send")
    ),

  async execute(ctx, client) {
    const input = ctx.options.getString('text')
    list = [
      `:small_blue_diamond: Yes`,
      `:small_blue_diamond: Sure`,
      `:small_blue_diamond: No`,
      `:small_blue_diamond: Maybe`,
      `:small_blue_diamond: Eh`,
      ":small_blue_diamond: You Account`s Password is **WEAK**",
      `:small_blue_diamond: Think, What Would A Jedi Do ?`,
      ":small_blue_diamond: Sorry i didn`t catch that **SPEAK LOUDER**",
      `:small_blue_diamond: Put your finger in a keyhole , count to 10 and ask again`,
      `:small_blue_diamond: LMAO`,
      `:small_blue_diamond: Not this again`,
      `:small_blue_diamond: Maybe Not`,
      `:rolling_eyes: Gone to get coffee , be back in 15 minutes`,
      `https://i.gifer.com/y7.gif`,
      `https://images.ctfassets.net/q41566h7mydg/1IDvJyygI0MkCwI6qCK2wS/4bcb3fc04cec43dc77e73f0487954960/BSoD.gif`,
      `https://media1.giphy.com/media/26xBsNKFwYKzaiuhW/giphy.gif`,
      `:8ball::8ball::8ball::8ball::8ball::8ball::8ball::8ball:`,
      `:small_blue_diamond: It is certain`,
      `:small_blue_diamond: It is decidedly so`,
      `:small_blue_diamond: Without a doubt`,
      `:small_blue_diamond: Yez -Definitely`,
      `:small_blue_diamond: You may rely on it`,
      `:small_blue_diamond: As i see it , Yez`,
      `:small_blue_diamond: Most Likely`,
      `:small_blue_diamond: Outlook good`,
      `:small_blue_diamond: Signs Point to ||Yez||`,
      `:small_blue_diamond: Signs Point to ||No||`,
      `:small_blue_diamond: Reply Hazy , Try Again`,
      `:small_blue_diamond: Leave a message after the beep...**BEEEP**`,
      `:small_blue_diamond: Concentrate and ask again`,
      `:small_blue_diamond: dont count on it`,
      `:small_blue_diamond: My reply is NO`,
      `:small_blue_diamond: My Sources say No`,
      `<@413755451373518864>,HELPP!!! This Person is Touching ME !!!!:point_up_2:<:ilysm:815189494969401355>`,
      `<:Tink:773685644094472212>mhm`,
      `<:inchresting:773926958546812948>`,
      `<:aaa:773925630005870602> i guess so`,
      `:small_blue_diamond: ummmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm , AAAAAAAA . . . yeah sure`,
      `:small_blue_diamond: Heads YES / Tails NO :coin: :arrow_right: ||Head||`,
      `:small_blue_diamond: Heads YES / Tails NO :coin: :arrow_right: ||Tails||`,
      `:small_blue_diamond: I Would Have $1M If i got a penny for each of these dumb Questions`,
      `:small_blue_diamond: Your Subscribtion has ended\n Please pay 6.69$ to continue this service`,
      `:small_blue_diamond: Mommy? :pleading_face:`,
      `:small_blue_diamond: My Therapist said i have A...D.. Something, sry what was the question ?`,
      `:small_blue_diamond: yuh`,
      `:small_blue_diamond: nuh`,
      `:small_blue_diamond: huh`,
      `:small_blue_diamond: Me English No Speak , No Comprehendo`,
      `:small_blue_diamond: the last ant you killed knew the answer :ant:`,
      `<a:toothlesswut:865271053781172284>`,
      `<a:pensivetwerk:865279164525707304> Twerking in progress DONT DISTRUB`,
      `:small_blue_diamond: DM me your credit card info and ill tell you what happens`,
      `:small_blue_diamond: Yes but eat :fries: cause fries are amazing.`,
      `<:Thonkery:773695680609779732> Um...Xan help me with this one ? <@413755451373518864>`,
    ];
    const eightballEmbed = MessageEmbed()
    .setDescription(`:large_blue_diamond: ${input}\n${list[Math.floor(Math.random() * list.length)]}`)
    ctx.reply({embeds:[eightballEmbed]})
  },
};
