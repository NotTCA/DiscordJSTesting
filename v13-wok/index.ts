import DiscordJS from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: 32767
})

client.on('ready', () => {
    console.log('The bot is ready!')
})

client.login(process.env.TOKEN)