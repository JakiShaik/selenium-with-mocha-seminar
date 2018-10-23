const selenium = require('selenium-webdriver');
const expect = require('chai').expect;
//const {describe,it,after} = require('mocha');

before( async function() {
    driver =  await new selenium.Builder().withCapabilities(selenium.Capabilities.chrome())
    .build();
  });
  after( async function() {  await driver.quit()});

describe('Google search tests',  function() {
  
  it('Successful opening of Google home page',  async function(){
     await driver.get('https://www.google.com/');
     driver.getTitle().then( title => {
      expect(title).to.equal('Google');
    });
  })
  
  it('Able to Search Webdriver', async function(){
     await driver.findElement(selenium.By.name('q')).sendKeys('webdriver', selenium.Key.RETURN);
     await driver.wait(selenium.until.titleIs('webdriver - Google Search'), 1000);
  });
});
