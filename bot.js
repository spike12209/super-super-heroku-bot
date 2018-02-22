const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'i love you') {
    	message.reply('i love you too <3');
  	}
});

client.on('message', message => {
    if (message.content === 'ali') {
    	message.reply('NOO SHES MINE ILL KILL YOU IF YOU TOUCH HER');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
