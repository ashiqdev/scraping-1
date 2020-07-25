const debug = require('debug')('app:cheerio');
const axios = require('axios');
const cheerio = require('cheerio');

async function main() {
  const { data } = await axios('https://bikroy.com');
  const $ = cheerio.load(data);

  // parse
  const header = $('h1').text();
  debug(header);
}

main();
