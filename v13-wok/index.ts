import DiscordJS from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: 32767
})

client.on('ready', () => {
    console.log('The bot is ready!')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: '859659416898109450',
        showWarns: false,
    })
})

client.login(process.env.TOKEN)