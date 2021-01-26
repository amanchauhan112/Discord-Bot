module.exports ={
    name:'command',
    description:"Embeds!",
    execute(client,message,args,Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#303233')
       .setTitle('Just a Beggining Bot')
       .setURL('https://youtube.com')
       .setDescription('This is Description')
       .addFields(
        {name:'Rule 1',value:'Be nice'},
        {name:'Rule 2',value:'Follow twitch'},
        {name:'Rule 3',value:'Be nice'},

       )
       .setImage('https://cdn.discordapp.com/attachments/778649939764576338/801736643736240128/687123.png')
       .setFooter('Makes sure check rules channel')
    message.channel.send(newEmbed)
    }
}