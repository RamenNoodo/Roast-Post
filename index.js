const Discord = require('discord.js'); //<-- without library   //loading discord //const = var except unchangeable
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'hello') {
        //message.reply('pong');
        message.channel.sendMessage('hey')
    }

});

bot.login(process.env.BOT_TOKEN)
