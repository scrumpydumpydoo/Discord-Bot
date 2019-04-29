const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NTcxODUwNDYyMTgyMTEzMzAy.XMT0cQ.IO2hGSdXKupapM3ZG5AKSnxGy3E';

const PREFIX = '.';

client.on('message', async message => {
    let blacklisted = ['nigger', 'nigga', 'flithy jew', 'filthy mexican', 'retard', 'kyke', 'dyke', 'shrek is not our god', 'fuck shrek', 'tachanka is worthless', 'tachanka is not our god']
  
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
      if (foundInText) {
        message.delete();
        message.channel.sendMessage('GET THAT THE FUCK OUT OF HERE')
    }
  });

client.on('message', msg=>{


});

var version = '1.0.1`'

client.on('ready', () => {
    console.log('Bot Is Online');
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(channel => channel.name === "");
    if (!channel) return;

    member.send(`Welcome to This Humble Server, ${member}, Please, Take Off Your Shoes Before Coming In`)
});

client.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'kick':

            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);

                if (member) {
                    member.kick('`Unfortunately (or fortunately) You Were Kicked :(       Here\'s a suggestion, whatever you did, don\'t do it agin`').then(() => {
                        message.reply(`${user.tag} has been kicked, he wont be missed`);
                    }).catch(err => {
                        message.reply('Something Went Wrong OWO, sowwy');
                        console.log(err);
                    });
                } else {
                    message.reply("That Person Doesn\'t Exist, :( So Sowwy oWo")
                }
            } else {
                message.reply('That Person Doesn\'t Exist, So Sowwy OWO')
            }

            break;

    }

    switch (args[0]) {
        case 'smash':
            message.channel.sendMessage('https://liquipedia.net/smash/Main_Page         `Here You Gowo`')
            break;
        case 'info':
            if (args[1] === 'version') {
                message.channel.sendMessage('`Version ' + version);
            } else {
                message.channel.sendMessage('`Invalid Command`')
            }
            break;
        case 'clear':
            if (!args[1]) return message.reply('`Error, Please Define Second Command`')
            message.channel.bulkDelete(args[1]);
            break;
        case 'siege':
            let embed = new Discord.RichEmbed()
                .setTitle('Siege Wiki')
                .setURL('https://liquipedia.net/rainbowsix/Main_Page', true)
                .setColor(0xC70039)
                .setFooter('ALL HAIL LORD TACHANKA')
            message.channel.sendEmbed(embed);
            message.channel.sendMessage('`Here You Gowo`')
            break;

    }
})

client.login(token);