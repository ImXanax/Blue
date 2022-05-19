const Remind = require('../database/models/remindSchema');
const mongoose = require('mongoose');
module.exports = {
    name: 'remind',
    description: 'remind yourself',
    aliases: ['rem', 'rm'],
    async execute(client, message, cmd, args, Discord) {
      let input = args[0];
      let days = input.split('d');
      let hours = days[1].split('h');
      let minutes = hours[1].split('m');
      let seconds = minutes[1].split('s');
      message.reply(`${days[0]} Days ,${hours[0]} Hours ,${minutes[0]} Minutes ,${seconds[0]} Seconds`);
    }
  }
  