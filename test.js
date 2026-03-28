const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/', (req, res) => {
  res.send('API rodando 🚀');
});

app.get('/scrape', async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('https://example.com');

    const title = await page.title();

    await browser.close();

    res.json({ title });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 IMPORTANTE: porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
