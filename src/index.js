require("dotenv").config();
const { Client, Intents, Collection } = require("discord.js");
const mongoose = require("mongoose");
const fs = require("fs");
const Levels = require('./funcs/Levels')
const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION", "USER"],
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  ],
});

client.commands = new Collection();

const functions = fs
  .readdirSync(`./src/functions`)
  .filter((file) => file.endsWith(`.js`));
const eventFiles = fs
  .readdirSync(`./src/events`)
  .filter((file) => file.endsWith(`.js`));
const commandFolders = fs.readdirSync("./src/commands");

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});


(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }
  client.handleEvents(eventFiles, './src/events');
  client.handleCommands(commandFolders, './src/commands');
  client.handleMongo();
  client.login(process.env.TOKEN);
  Levels.mongoURL(`${process.env.BLUE_SRV}`)
})();
