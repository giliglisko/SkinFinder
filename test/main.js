//define page objects
const csgomoney = require ('../pages/csgomoney');
const steamMarket = require('../pages/steamMarket');


module.exports = {

    'Gili\'s Project' : async function (browser) {
      //open chrome on fullscreen
      browser.windowMaximize()
      //define variables
      let searchFor;
      let itemTypeText;
      let skinNameText;
      let csgomoneyPrice;
      //parsing argument values
      let arg1 = process.argv[2].split('=')[1];
      let arg2 = undefined;
      arg2 = process.argv[3];
      //if there is more than one word, use both.
      if(arg2 != undefined) {
        searchFor = `${arg1} ${arg2.split('=')[1]}`;

      } else {
        //if there is only one word, use only arg1
        searchFor = arg1;
      }
      
    
      browser
        //open csgomoney url
        .url(csgomoney.url)
        //click on the currency dropdown menu
        .waitandclick(csgomoney.elements.currencyDropdown)
        //change the currency value to USD
        .waitandclick(csgomoney.elements.usd)
        //find the searchbar and set the value of searchFor (the words that the user used)
        .waitandsetvalue(csgomoney.elements.searchbar, searchFor)
        //click sort
        .waitandclick(csgomoney.elements.sort)
        //click on discount inside the sort
        .waitandclick(csgomoney.elements.discountsort)
        //expand Type menu
        .click(csgomoney.elements.typeExpand)
        .pause(1000)
        //move to element in order to make Exclude others visiable
        .moveToElement("xpath", csgomoney.elements.others, 1, 1)
        .pause(1000)
        //click Exclude others
        .waitandclick(csgomoney.elements.excludeOthers)
        .pause(1000)
        //click on the highest discount item.
        .click(csgomoney.elements.clickHighestDiscount)
        .pause(3000)

        //get the name of the type of the item (ak47, etc)
        itemTypeText = browser.getText({
          selector: csgomoney.elements.itemType,
          locateStrategy: 'xpath'
        }, function(result) {
            output = result.value;
            return output;
        });

        //get the name of the skin + condition
        skinNameText = browser.getText({
          selector: csgomoney.elements.skinName,
          locateStrategy: 'xpath'
        }, function(result) {
            output = result.value;
            return output;
        });
        
        //get the price of the item
        csgomoneyPrice = browser.getText(csgomoney.elements.itemPrice,function(result) {
            output = result.value;
            return output
        });


       //[0]=skinfullname | [1]=skinprice
       let csmoneyData = Promise.all([itemTypeText, skinNameText, csgomoneyPrice]).then(values => {
          //split itemtypetext into to segments while getting rid of the "/"
          values[0] = values[0].split(" / ")[0];
          //combine item type + skin name
          let name = values[0] + " " + values[1];
          //clean up the price of the csgomoneysite
          values[2] = values[2].split(".")[0]
          //get rid of strings like $
          values[2] = values[2].replace(/\s/g, '').substring(1);
          //create a variable that contains the type + skin + price
          let output = [name, values[2]]
          return output;
          //wait for Promise to be resolved
        }).then(function(csmoneyData){



          //SteamMarket
           browser
           //go to steammarket url
          .url(steamMarket.url)
          //type the name of the skin into the steam search bar
          .waitandsetvalue(steamMarket.elements.searchBar, csmoneyData[0])
          //click search
          .waitandclick(steamMarket.elements.searchBtn)

         //get the lowest price values
        let steamPrice = browser.getText({
          selector: steamMarket.elements.lowestPrice,
          locateStrategy: 'xpath'
        }, function(result) {
            output = result.value;
            return output;
        }).then(function(steamPrice){
          //splitting the price while getting rid of the "."
          steamPrice = steamPrice.split(".")[0]
          //getting rid of any strings
          steamPrice = steamPrice.substring(1);
          
          //change the prices from strings to nums
          let csmoneyPrice = parseInt(csmoneyData[1]);
          steamPrice = parseInt(steamPrice);
          //print the results of both sites
          console.log(`Results for ${csmoneyData[0]}: \nSteam Price: ${steamPrice}\nCSGOmoney Price: ${csmoneyPrice}`)
          //statement to check if steamprice is lower than csmoneyprice
          if(steamPrice < csmoneyPrice){
            console.log("YOU BETTER BUY FROM STEAM!")
          }
          //statement to check if csmoneyprice is lower than steamprice
          else if(csmoneyPrice < steamPrice){
          console.log("YOU BETTER BUY FROM CSGOMONEY!")
          }
          //if they are equal
          else{
            console.log("it doesnt matter where you buy from!")
          }


         
        })

        });
        
    }

  };



