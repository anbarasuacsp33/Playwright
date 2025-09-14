const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  // Open first page
  const page1 = await context.newPage();

  await page1.goto('https://www.ebay.com');

  await page1.fill('input#gh-ac',"iphone");

  await page1.click('span.gh-search-button__label');

//  await page1.click("(//div[@class='su-media__image'])[1]");

  //await page1.goto('https://the-internet.herokuapp.com/windows');

  // Listen for new page (window/tab) opened
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for new page event
    // Trigger opening new window by clicking the link
    page1.click("(//div[@class='su-card-container__media'])[3]")

  ]);

  // Wait for the new page to load content
  await newPage.waitForLoadState();

  await newPage.locator('a#binBtn_btn_1').click();

//   await newPage.click("(//button[@class='listbox-button__control btn btn--form btn--truncated'])[1]");
//   await newPage.click("(//span[@class='btn__cell'])[2]");
  

  console.log('Page 1 URL:', page1.url());

  console.log('New Page URL:', newPage.url());

  // Switch to new page and get its title
  await newPage.bringToFront();
  console.log('New page title:', await newPage.title());

  // Switch back to original page
  await page1.bringToFront();
  console.log('Original page title:', await page1.title());

  // Close browser
  await browser.close();

})();
