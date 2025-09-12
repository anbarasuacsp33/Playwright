// example.spec.js
const { chromium } = require('playwright')
const assert = require('assert')

;(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 2000 }) // set headless: true for no UI
  const page = await browser.newPage()

  await page.goto('https://commitquality.com/practice-iframe')

  //   const head = await page.locator("//input[@class='filter-textbox']").fill('test');
  //   console.log(head);

  await page.keyboard.press('PageDown');

  //await page.frameLocator("//iframe[@data-testid='iframe']").locator("//tr[@data-testid='product-row-10']").scrollIntoViewIfNeeded();

  await page.frameLocator("//iframe[@data-testid='iframe']").locator("//tr[@data-testid='product-row-10']").hover()

  console.log("User mousehover the Element which declared")


    //await page.waitForTimeout(3000);

  const head = await page
    .frameLocator("//iframe[@data-testid='iframe']")
    .locator("//input[@class='filter-textbox']")
    .fill('test')
  console.log(head)

  //await page.waitForTimeout(3000);

  await browser.close()
})()


//table[@class='product-list-table']/following:://tbody//tr[@data-testid='product-row-10']
