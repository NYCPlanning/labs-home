const Parser = require('rss-parser');
const cheerio = require('cheerio');

const parser = new Parser();

exports.handler = async (event) => {
  const { tag, limit = 4 } = event.queryStringParameters;
  let feedUrl;
  if (tag) {
    feedUrl = `https://medium.com/feed/nyc-planning-digital/tagged/${tag}?truncated=true`;
  } else {
    feedUrl = 'https://medium.com/feed/nyc-planning-digital?truncated=true';
  }

  const rss = await parser.parseURL(feedUrl);
  rss.items.forEach((item) => {
    console.log(item);
    const $ = cheerio.load(item.content);
    const parsedDescription = $('.medium-feed-snippet').text();
    const parsedImage = $('.medium-feed-image img').attr('src');

    const newItem = item;
    newItem.description = parsedDescription;
    newItem.image = parsedImage;
    return newItem;
  });

  rss.items = rss.items.slice(0, limit);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rss),
  };
};
