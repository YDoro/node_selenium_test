const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
option.addArguments(['--disable-dev-shm-usage']);
const driver = new Builder().forBrowser("chrome").setChromeOptions(option);
async function example(){
    const page = await driver.build();
    await page.get("http://google.com");
    await page.findElement(By.name("q")).sendKeys("github ydoro",Key.RETURN);
    const tilte = await page.getTitle();
    return tilte;
        
}
example().then((title)=>{
    console.log(title);
})



