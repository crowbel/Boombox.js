const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
const ytdl = require('ytdl-core');

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', () => {
    console.log('BoomBot is online!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    if(command === 'play'){
        client.commands.get('play').execute(message, args);

    } else if (command === 'stop'){
        client.commands.get('stop').execute(message,args);
    }
});

client.login(process.env.token);