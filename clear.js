module.exports ={
    name:'clear',
    description:"this is clear command",
    async execute(client,message,args){
        if(!args[0]) return message.reply('please enter amount of message u want to clear');
        if(isNaN(args[0])) return message.reply('please enter real number');
        if(args[0]>100) return message.reply("You can't enter number more than 100");
        if(args[0]<1) return message.reply("You can't enter number less than 1");

await message.channel.messages.fetch({limit:args[0]}).then(messages=>{
    message.channel.bulkDelete(messages);
})

    }
}