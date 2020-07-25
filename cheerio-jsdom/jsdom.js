const debug = require('debug')('app:jsdom');
const axios = require('axios');
const { JSDOM } = require('jsdom');

(async () => {
  debug('collecting data');
  const { data } = await axios('https://bikroy.com');

  debug('creating dom');
  const {
    window: { document },
  } = new JSDOM(data);

  debug(document.querySelector('h1').innerHTML);
})();
