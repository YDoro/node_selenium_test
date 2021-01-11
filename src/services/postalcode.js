const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
option.addArguments(['--disable-dev-shm-usage']);
const driver = new Builder().forBrowser("chrome").setChromeOptions(option);
module.exports = async function (cep) {
    const page = await driver.build();
    await page.get("https://ceps.io/");
    await page.findElement(By.name("query")).sendKeys(cep, Key.RETURN);
    const line = await page.findElement(By.className('box_text'))
    const content = await (await line.findElement(By.css('h2'))).getText()
    const contentArray = content.split(', ');
    return {
        street: contentArray[0],
        neighborhood: contentArray[1],
        city: contentArray[2].split(' - ')[0],
        state: contentArray[2].split(' - ')[1],
    }

}



