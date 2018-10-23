const selenium = require('selenium-webdriver');

before( async function() {
    driver =  await new selenium.Builder().withCapabilities(selenium.Capabilities.chrome())
    .build();
  });
after( async function() {  await driver.quit()});

describe('Registering for facebook',function(){
    it('Open facebook',async function(){
        await driver.get('https://www.facebook.com/');
        await driver.findElement(selenium.By.id('day')).sendKeys('25');
    })
});