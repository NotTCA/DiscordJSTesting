import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'just returns an embed, nothing special',

    slash: 'both',
    testOnly: true,

    callback: () => {
        const embed = new MessageEmbed()
        .setTitle('hello world')
        .setDescription('hello world')

        return embed
    }
} as ICommand