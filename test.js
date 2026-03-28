const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium', // 🔥 FORÇA USAR O DO SISTEMA
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');

  console.log(await page.title());

  setInterval(() => {}, 1000);
})();
