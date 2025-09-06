const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // This eval contains a syntax error and will throw (usually SyntaxError, rarely EvalError)
    await page.evaluate(() => {
      eval('let x = ;');  // malformed JS -> error thrown here
    });
  } catch (error) {
    if (error instanceof EvalError) {
      console.error('Caught EvalError:', error.message);
    } else {
      console.error('Caught other error:', error.name, error.message);
    }
  } finally {
    await browser.close();
  }
})();
