const Discord = require('discord.js'); //<-- without library   //loading discord //const = var except unchangeable
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ping') {
        //message.reply('pong');
        message.channel.sendMessage('pang')
    }

});

bot.on('message', (message) => {

    if(message.content == 'ping') {
        //message.reply('pong');
        message.channel.deleteMessage('pang')
    }

});

bot.login(process.env.BOT_TOKEN)
