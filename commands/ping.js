module.exports ={
    name:'ping',
    description:"this is ping command",
    execute(client,message,args){
        message.channel.send('pong!');
    }
}