const puppeteer = require('puppeteer');
const Appx = require('./apps/appx');

// async function test() {

//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.goto("https://www.google.com/");
//   await page.$eval("input[name=q]", el => el.value = 'Adenosine triphosphate');

//   // await page.screenshot({ path: 'tmp/screenshot.png' });
//   // await browser.close();
// }
// test();

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  let appx = new Appx(browser, page, 036000);
  appx.run()
})();
