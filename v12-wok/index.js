const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
require("dotenv").config();

client.on("ready", () => {
  console.log(`The bot is ready!`);
});

client.login(process.env.TOKEN);
