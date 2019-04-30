const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Bot Is Online');
});

client.on('message', msg=>{
});

client.login(process.env.BOT_TOKEN);
