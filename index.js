const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const fs = require('fs');
const {
	Client, 
	Message,
	MessageAttachment,
	MessageEmbed
} = require('discord.js');
const { resolveSoa } = require('dns');
const { type } = require('os');
const { setInterval } = require('timers');
const embed = require('./commands/embed');
const { env } = require('process');
const welcome = require('./welcome');
const Eris = require('eris');
const moment = require('moment-timezone');
const clock = require('node-emoji-clock');
const snekfetch = require('snekfetch');
const chalk = require('chalk');
const Scraper = require('images-scraper');
const canva = require('canvacord');
const morse = require('morse');
const keepAlive = require('./server');
const mongoose = require('./database/mongoose');
const Levels = require('discord-xp');
require('dotenv').config();
require('discord-buttons')(client);


Levels.setURL(`${process.env.BLUE_SRV}`)
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
	require(`./handlers/${handler}`)(client, Discord);
});

keepAlive();
mongoose.init();
client.login(process.env.TOKEN);
