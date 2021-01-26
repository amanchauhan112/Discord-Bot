module.exports ={
    name:'youtube',
    description:"this is youtube command",
    execute(client,message,args){
        message.channel.send('https://www.youtube.com');
        // message.channel.send(`https://www.youtube.com+${variable}`)
    }
}