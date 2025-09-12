// example.spec.js
const { chromium } = require('playwright')
const assert = require('assert')

;(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 20000 }) // set headless: true for no UI
  const page = await browser.newPage()

  await page.goto('https://commitquality.com/practice-file-upload');


  await page.locator("//input[@id='file-input']").setInputFiles('/Users/anbarasu_a/Documents/VSCode/PW/Playwright_06092025/Playwright_11092025/Playwright/Files/Screenshot.png');



  await browser.close()
})()
