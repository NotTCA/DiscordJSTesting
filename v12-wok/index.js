const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
require('dotenv').config();

const command = require('./command');

client.on('ready', () => {
  console.log(`The bot is ready!`);
});

client.login(process.env.TOKEN);
