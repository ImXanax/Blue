const Scraper = require('images-scraper');
const google = new Scraper({
  puppeteer: {
    headless: false
  }
})
module.exports = {
  name: 'image',
  description: 'this sends an image to a discord text channel',
  async execute(client, message, cmd, args, Discord) {
    const image_query = args.join(' ');
    if (!image_query) return message.channel.send(":small_blue_diamond: You Didn't Provide Something To Search");
    const image_results = await google.scrape(image_query, 1);
    message.channel.send('*Loading...*').then(sent => {
      sent.edit(image_results[0].url);
    });
  }
}