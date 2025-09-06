const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

    // Intentionally trigger a URIError (e.g., malformed URI)
    await page.goto('https://example.com');

    const badURI = decodeURIComponent('%'); // 💥 This throws URIError
    console.log('Decoded URI:', badURI);


});
