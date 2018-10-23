const selenium = require('selenium-webdriver');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chai = require('chai');
const expect = require('chai').expect;

before(async function example() {
    driver = await new Builder().withCapabilities(selenium.Capabilities.chrome())
    .build();    
    
  });

  after(async function() { await driver.quit()});

describe('Google search tests', function() {
  it('Successful opening of Google home page', async function(){
    await driver.get('https://www.google.com/');
    await driver.getTitle().then( title => {
      expect(title).to.equal('Google');
      //done();
    });
  })
  
  it('Check google search results',async function(){
    await driver.findElement(By.name('q')).sendKeys('3*2', Key.RETURN);
    await driver.findElement(By.xpath('//*[@id="cwos"]')).getText().then( text => {expect(text).to.equal('6');})
    //done();
  });
  
});
