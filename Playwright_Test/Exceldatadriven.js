const { chromium } = require('playwright');
const xlsx = require('xlsx');

// Step 1: Read Excel file
const workbook = xlsx.readFile('/Users/anbarasu_a/Documents/VSCode/PW/Playwright_06092025/Playwright_12092025/Playwright/Excel/Book13.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet);

// Step 2: Loop through each row of data
(async () => {

  for (const row of data) {

    const browser = await chromium.launch({ headless: false , slowMo:1000 });
    const context = await browser.newContext();
    const page = await context.newPage();

    console.log(`Testing with username: ${row.username} and password: ${row.password}`);


    // Step 3: Go to a login page (example placeholder)
    await page.goto('https://www.walgreens.com/login.jsp?ru=%2F'); // Replace with your real login URL

    // Step 4: Fill login form (update selectors as per actual site)
    await page.fill('input#user_name', row.username);
    await page.fill('input#user_password', row.password);

    // Step 5: Submit the form (update selector)
    await page.click('button#submit_btn');

    // Wait for some result or confirmation (update selector)
    // await page.waitForSelector('#dashboard');

    // Optional: Take a screenshot
    await page.screenshot({ path: `screenshot-${row.username}.png` });


    await browser.close();

  }

})();
