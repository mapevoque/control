var functions = require('./function');
var marketPage = function() {
	
  check = element(by.css('fieldset > div._2vOXvqbQ4f > label'));
  checkboxx = element(by.css('#delivery-included-filter'));
  radiobutton = element(by.css('div:nth-child(23) > fieldset > ul > li:nth-child(2) > div > label > div'));
  input = element(by.css('#glpricefrom'));
  
  this.get = function() {
    browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&onstock=1&deliveryincluded=1');
  };
  this.clickOnCheckbox = function() {
    check.click();
  };
  this.scrollDown = function() {
    browser.executeScript("arguments[0].scrollIntoView();", radiobutton.getWebElement()).then(function(){
		functions.sleep(5000);
	});
	
	};
	
  this.clickOnRadioButton = function() {
    radiobutton.click();
  };
   this.inputValue = function(value) {
    browser.executeScript("arguments[0].scrollIntoView();", input.getWebElement()).then(function () {
    input.sendKeys(value);
	functions.sleep(5000);});
  };
  this.getAttributes = function(atr) {
    input.getAttribute(atr).then(function(res){
	console.log('Данные: ' + res);
	functions.sleep(5000);});
  };
  
};
module.exports = new marketPage();