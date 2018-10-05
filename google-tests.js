var assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chai = require('chai');
const expect = require('chai').expect;

describe('Google search tests', function() {
  before(async function example() {
    driver = await new Builder().forBrowser('chrome').build();
  });
  it('Successful opening of Google home page', async function(){
    await driver.get('https://www.google.com/ncr');
    await driver.getTitle().then( title => {
      expect(title).to.equal('Google');
    });
  })
  
  it('Able to Search Webdriver',async function(){
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  });
  after(async function() { await driver.quit()});
});
