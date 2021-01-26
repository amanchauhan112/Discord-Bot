module.exports ={
    name:'help',
    description:"Embeds!",
    execute(client,message,args,Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#7289da')
       .setTitle('Just a Beggining Bot\nCheck my blog site')
       .setURL('https://nowknowaboutdailynews.blogspot.com')

       .setDescription('I am here to help you for Aman123456 Bot')

       .addFields(
        {name:'Prefix',value:'='},
        {name:'Command 1',value:'ping'},
        {name:'Command 2',value:'youtube'},
        {name:'Command 3',value:'image <anything>'},
        {name:'Command 4',value:'clear <number of meassages to be deleted { including command } >'},

       )
       .setImage('https://cdn.discordapp.com/attachments/778649939764576338/801736643736240128/687123.png')
       .setFooter('Makes sure check rules channel')
    message.channel.send(newEmbed)
    }
}