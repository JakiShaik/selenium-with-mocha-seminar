const selenium = require('selenium-webdriver');
const chai = require('chai').expect();

before(async function example() {
    driver = await new selenium.Builder().withCapabilities(selenium.Capabilities.chrome())
    .build();    
    
  });

after(async function() { await driver.quit()});

describe('Dynamic ID tests', function() {

    it('should open the Home Page', async function() {
        driver.get('http://localhost:3000/');
    });
    it('Open kelley image-1', async function(){
        //await driver.findElement(selenium.By.partialLinkText("Kelley-1")).click();

        //await driver.navigate().back(); To navigate to previous page
        await driver.findElement(selenium.By.xpath("//a[contains(@id,'kel')]")).click();
        //await driver.findElement(selenium.By.xpath("(//a[contains(@id,'kel')])[2]")).click(); If we have multiple elements with
        //same id prefix. they will all be in an array and we can index whichever one we want.
        //await driver.sleep(2000);
    })


});
