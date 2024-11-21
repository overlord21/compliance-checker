const puppeteer = require('puppeteer');

export async function getUrlPageContent(url) {
    try { 
        const browser = await puppeteer.launch({
        headless: true,
        });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('body');
        const fullPageContent = await page.evaluate(() => {
        return document.body.innerText.trim();
        });
        await browser.close();
        return fullPageContent;
    } catch (e){
        throw new Error('Error while scrapping');
    }
  };