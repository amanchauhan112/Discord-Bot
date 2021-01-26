var Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: true
  }
});

module.exports={
    name:'image',
    description:'This is image command',
    async execute(client,message,args){
const image_query = args.join(' ');
if(!image_query) return message.channel.send('enter image query');

const image_results=await google.scrape(image_query,1);
//const image_results=await imgur.scrape(image_query,1);
message.channel.send(image_results[0].url);
    }
}