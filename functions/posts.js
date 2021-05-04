const Feed = require('rss-to-json');
const cheerio = require('cheerio');

exports.handler = async (event) => {
  const { tag, limit = 4 } = event.queryStringParameters;
  let feedUrl;
  if (tag) {
    feedUrl = `https://medium.com/feed/nyc-planning-digital/tagged/${tag}?truncated=true`;
  } else {
    feedUrl = 'https://medium.com/feed/nyc-planning-digital?truncated=true';
  }

  const rss = await Feed.load(feedUrl);

  rss.items.map((item) => {
    const $ = cheerio.load(item.description);
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
