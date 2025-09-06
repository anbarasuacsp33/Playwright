const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const urls = ['https://example.com', 'https://%', 'https://notareal.site'];
  
  const promises = urls.map(async (url) => {
    const page = await browser.newPage();
    await page.goto(url); // this may throw
    return page.title();
  });

  try {
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    if (error instanceof AggregateError) {
      for (const e of error.errors) {
        console.error('Error:', e.message);
      }
    } else {
      console.error('Single error:', error.message);
    }
  } finally {
    await browser.close();
  }
})();
