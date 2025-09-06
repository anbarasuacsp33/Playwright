// example.spec.js
const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({ headless: false, slowMo:50 });// set headless: true for no UI

  const page = await browser.newPage();

  await page.goto('https://www.ebay.com');

  console.log(await page.title());

  await page.locator("(//*[text()='Sell'])[1]").click();

  await page.locator("//a[@class='textual-display fake-btn fake-btn--primary']").click();




  // await page.locator('input#gh-ac').fill('Iphone', {timeout:5000});

  // await page.locator('span.gh-search-button__label').click();

  // console.log(await page.title());

  // await page.locator('h1.srp-controls__count-heading').click();



  await browser.close();

  
})();
