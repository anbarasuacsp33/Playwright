const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Intentionally trigger a URIError (e.g., malformed URI)
    await page.goto('https://example.com');

    const badURI = decodeURIComponent('%'); // 💥 This throws URIError
    console.log('Decoded URI:', badURI);

  } catch (error) {
    if (error instanceof URIError) {
      console.error('Caught URIError:', error.message);
    } else {
      console.error('Caught general error:', error);
    }
  } finally {
    await browser.close();
  }
})();
