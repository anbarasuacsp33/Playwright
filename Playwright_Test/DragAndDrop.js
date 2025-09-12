// example.spec.js
const { chromium } = require('playwright');
const assert = require('assert');

(async () => {

  const browser = await chromium.launch({ headless: false, slowMo: 50 }) // set headless: true for no UI
  const page = await browser.newPage();
  
  await page.goto('https://commitquality.com/practice-drag-and-drop');

  const source = 'div#small-box';
  const target = 'div.large-box';

  await page.dragAndDrop(source, target);

  await page.waitForTimeout(3000);

  const Message = await page.locator("//*[text()='Success!']").innerText();

  console.log(Message);

  await browser.close()

})()
