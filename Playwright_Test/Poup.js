const { chromium } = require('playwright')
const assert = require('assert')

;(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 }) // set headless: true for no UI
  const page = await browser.newPage()
  await page.goto('https://commitquality.com/practice-random-popup')

  //await page.locator("//button[@data-testid='accordion-1']").click()

  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click("//div[@class='overlay-content']//button"),
  ])

  await browser.close()
})()
