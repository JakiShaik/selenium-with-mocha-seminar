const selenium = require('selenium-webdriver');
const chai = require('chai');
const expect = require('chai').expect;

before( async function() {
    driver =  await new selenium.Builder().withCapabilities(selenium.Capabilities.chrome())
    .build();
  });
after( async function() {  await driver.quit()});

describe(' Localhost tests', function() {
      it('Open homepage', async function(){
        await driver.get('http://localhost:3000/users');
        await driver.findElement(selenium.By.id('button1')).click();
        //await driver.findElement(selenium.By.id('button2')).click();
        await driver.wait(
            selenium.until.elementLocated(selenium.By.id('button2')), 
            20000
          ).click();
          //await driver.sleep(1000);
      });
    
  });