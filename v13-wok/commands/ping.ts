import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Pong!',

    slash: 'both',
    testOnly: true,

    callback: ({ client }) => {
        return `Pong! Client ping is ${client.ws.ping}ms.`
    }
} as ICommand