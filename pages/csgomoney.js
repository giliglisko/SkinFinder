module.exports = {
    url: 'https://cs.money/market/buy/',

    elements: {

      precentage: '//span[contains(text(),"%")]',
      searchbar: '.csm_ui__input__46133',
      sort:'.csm_ui__size_16__2e8eb[aria-label="arrow down"]',
      discountsort: '[aria-label="fire discount"]',
      typeExpand: 'div.BuyPage_filters_inner__39g9b > div > div:nth-of-type(4) svg',
      others: '(//div[contains(@class,"styles_checkbox__1oWu_")])[12]',
      excludeOthers: 'div.BuyPage_filters_inner__39g9b > div > div:nth-of-type(4) div:nth-of-type(10) > div > div > div',
      clickHighestDiscount: ".SellOrderList_list__3LNkf > div:nth-child(2)",
      itemType: '(//div[@role="presentation"]/div[contains(text(), "/")])',
      skinName:'//div[@role="presentation"]/span',
      currencyDropdown: '.CurrencyDropdown_label__2xEU3',
      usd: '#USD',
      itemPrice: '.PriceInformation_price_market_wrap__YRv5Y > span > span',
    },
    
    
};

