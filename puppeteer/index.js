const debug = require('debug')('app:realWorld');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://react-redux.realworld.io/#/?_k=durb0g');

  await page.waitForSelector('.article-preview h1');

  const title = await page.title();

  const preview = await page.evaluate(
    () => document.querySelector('.article-preview h1').innerHTML
  );

  debug({ title, preview });

  await browser.close();
})();
