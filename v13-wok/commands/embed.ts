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
        .setColor('#FFFB00')
        .addField('This is a field', 'This is a value')
        .addField('This is what I do when I\'m bored', 'because I have nothing else to do')
        .addField('I like programming', 'just like how you like looking at StackOverflow')
        .setFooter('this is a feeter')
        .setAuthor('TCA is good programmer', 'https://i.imgur.com/EmPoWzR.jpg')

        return embed
    }
} as ICommand