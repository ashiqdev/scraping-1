const debug = require('debug')('app:realWorld');
const puppeteer = require('puppeteer');

(async () => {
  let launchOptions = {
    headless: false,
    args: ['--start-maximized', `--proxy-server=${process.env.PROXY}`], // this is where we set the proxy
  };
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  await page.goto('https://www.pandora.com');
  await page.screenshot({ path: 'data/pandora.png' });

  await browser.close();
})();
