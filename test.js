var functions = require('./function');
var yandexMarketpage = require('./yandexMarketPage');
describe('UI controls', function() {

  
  it('checkbox scroll', function() {
   yandexMarketpage.get();
   yandexMarketpage.clickOnCheckbox();
   yandexMarketpage.clickOnCheckbox();
   yandexMarketpage.scrollDown();
   yandexMarketpage.clickOnRadioButton();
   yandexMarketpage.inputValue('500');
   yandexMarketpage.getAttributes('value');
   yandexMarketpage.getAttributes('class');	
  });
});