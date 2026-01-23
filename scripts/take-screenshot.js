const puppeteer = require('puppeteer');
const path = require('path');

async function takeScreenshot() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set viewport to desktop size
    await page.setViewport({ width: 1440, height: 900 });

    // Navigate to the page
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait a bit for any animations to settle
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take a full-page screenshot
    const screenshotPath = path.join(__dirname, '..', 'screenshots', `v1-earthy-cabin-${Date.now()}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    console.log(`Screenshot saved to: ${screenshotPath}`);

    // Also take a viewport-only screenshot for quick preview
    const viewportPath = path.join(__dirname, '..', 'screenshots', `v1-earthy-cabin-viewport-${Date.now()}.png`);
    await page.screenshot({
      path: viewportPath,
      fullPage: false
    });

    console.log(`Viewport screenshot saved to: ${viewportPath}`);

  } catch (error) {
    console.error('Error taking screenshot:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshot();
