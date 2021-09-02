const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.tag} is ready to be used!`)
})

client.login(process.env.TOKEN)