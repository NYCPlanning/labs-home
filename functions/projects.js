const request = require('superagent');
const slug = require('slug');

exports.handler = async () => {
  const url = `https://api.airtable.com/v0/app1f3lv9mx7L5xnY/Labs Live Projects?view=Public&api_key=${
    process.env.AIRTABLE_API_KEY
  }`;

  const response = await request.get(url);
  let newArray = response.body.records.map(obj => obj.fields);
  newArray = newArray.filter(d => d.name);

  newArray.forEach((project) => {
    const d = project;
    d.slug = slug(d.name, { lower: true });
  });

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newArray),
  };
};
