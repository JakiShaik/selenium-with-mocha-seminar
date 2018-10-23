const selenium = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chai = require('chai');
const expect = require('chai').expect;
const fs = require('fs');


describe('Prometheus tests', function() {
    before(async function loadDriver() {
        //this.timeout(0);
          driver = await new selenium.Builder().withCapabilities(selenium.Capabilities.chrome())
          .build();
        });
    
    it('Successful opening of Prometheus', async function(){
        await this.timeout(3000);
      await driver.get('https://prometheus.eecs.oregonstate.edu/');
      await driver.getTitle().then( title => {
        expect(title).to.equal('Prometheus');
      });
      await driver.findElement(By.xpath('/html/body/main/form/input')).click();
      await driver.findElement(By.xpath('//*[@id="username"]')).sendKeys('shaikj');
      //await driver.findElement(selenium.By.id('username')).sendKeys('shaikj');
      await driver.findElement(selenium.By.id('password')).sendKeys('*************',Key.RETURN); 
      await driver.wait(until.titleIs('Prometheus'));     
     });

    
    it('Open course grid',async function(){
      await driver.findElement(selenium.By.linkText("Course grid")).click();
        driver.takeScreenshot().then(function(data){
            fs.writeFileSync('coursegrid_screenshot.png',data,'base64');
        });
    });
    after(async function() { await driver.quit(); 
    });
});