const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'MzY2NDMwMTM4Mjk0MDc1NDEy.XPSBwA.6PJmRFCk-8XzAVuM_iH0U0ruF60';

const PREFIX = '!'

var verison = '1.0.1';

bot.on('ready', () =>{
   console.log('This bot is online!');
});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!')
            break;
        case 'server':
            message.channel.send('https://discord.gg/uX6vkUr')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('version ' + verison);
            }else{
                message.channel.send('Invalid Args')
            }
        case 'clear':
            if(!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            if(args[3]= 'help'){
                const embed = new Discord.RichEmbed()
                .addField('Player Name', message.author.username);
                message.channel.sendEmbed(embed);
                break;
            }
    }
})

bot.login(token);



