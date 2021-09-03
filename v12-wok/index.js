const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
require("dotenv").config();

const command = require('./command')

client.on("ready", () => {
  console.log(`${client.user.tag} is ready to be used!`);

  command(client, 'create-text-channel', message => {
    const name = message.content.replace('!create-text-channel ', '')

    message.guild.channels.create(name, {
      type: 'text'
    }).then(channel => {
      const categoryID = '879167044241735710'
      channel.setParent(categoryID)
    })
  })
  
  command(client, 'create-voice-channel', message => {
    const name = message.content.replace('!create-voice-channel ', '')

    message.guild.channels.create(name, {
      type: 'voice'
    }).then(channel => {
      const categoryID = '879167044241735710'
      channel.setParent(categoryID)
      channel.setUserLimit(10)
    })
  })
});

client.login(process.env.TOKEN);
