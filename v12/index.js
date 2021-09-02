const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
require("dotenv").config();

const command = require("./command");
const firstMessage = require('./first-message')

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to be used!`);

  command(client, "ping", (message) => {
    message.channel.send("Pong!");
  });

  command(client, "servers", (message) => {
    client.guilds.cache.forEach((guild) => {
      message.channel.send(
        `${
          guild.name
        } has a total of ${guild.memberCount.toLocaleString()} members.`
      );
    });
  });

  command(client, ["cc", "clearchannel"], (message) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.delete();
    message.channel.messages.fetch().then((results) => {
      message.channel.bulkDelete(results);
    });
  });

  command(client, "status", (message) => {
    const status = message.content.replace("!status", "");
    client.user.setPresence({
      activity: {
        name: status,
        type: 0,
      },
    });
  });

  firstMessage(client, "882880394800824382", "hello world", ['🔥'])
});

client.login(process.env.TOKEN);
