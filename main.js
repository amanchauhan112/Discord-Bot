const Discord = require('discord.js');
require('dotenv').config();
// const client = new Discord.Client();
const client = new Discord.Client({'partials':["MESSAGE","CHANNEL","REACTION"]});
// const prefix = '=';

// const fs = require('fs');

client.commands=new Discord.Collection();
client.events=new Discord.Collection();

['command_handler','events_handler'].forEach(handler=>{
    require(`./handlers/${handler}`)(client,Discord);
})

// const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));

// for(const file of commandFiles){
//     const command=require(`./commands/${file}`);

//     client.commands.set(command.name,command);
// }

// client.on('message',message=>{
//     if(!message.content.startsWith(prefix)|| message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
//     if(command==='command'){
// client.commands.get('command').execute(message,args,Discord);
//     }
//     else 
    // if(command === 'ping'){
    //     // message.channel.send('pong!');
    //     client.commands.get('ping').execute(message,args);
    // }
    // else if(command === 'youtube'){
    //     // message.channel.send('https://www.youtube.com');
    //     client.commands.get('youtube').execute(message,args);
    // }
    // else if(command === 'clear'){
    //     // message.channel.send('https://www.youtube.com');
    //     client.commands.get('clear').execute(message,args);
    // }
    // else if(command === 'help'){
    //     // message.channel.send('https://www.youtube.com');
    //     client.commands.get('help').execute(message,args,Discord);
   
    // }
// })

// client.once('ready',()=>{

//     console.log('Bot is online');
// });

client.login(process.env.DICORD_TOKEN)