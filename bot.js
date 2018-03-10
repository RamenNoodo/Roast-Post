const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NDE4NTYzNzc2NDcyOTQwNTQ0.DYXa0A._hcGqvxYdPo2mTb6vpjyuvodq_E'); //bot logging in

bot.on('message', (message) => {

    if(message.content == 'ping') {
        //message.reply('pong');
        message.channel.sendMessage('pong')
    }

});

bot.login(process.env.BOT_TOKEN)
