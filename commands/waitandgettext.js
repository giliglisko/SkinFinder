exports.command = function (selector, strategy = undefined) {
    const browser = this;
    
    return new Promise(function(resolve, reject) {
      let output;
      
      if (strategy === "xpath") {
        browser.getText({
          selector: selector,
          locateStrategy: 'xpath'
        }, function(result) {
          if (result.value !== undefined) {
            output = result.value;
            resolve(output);
          } else {
            reject(new Error("Unable to retrieve text value."));
          }
        });
      } else {
        browser.getText(selector, function(result) {
          if (result.value !== undefined) {
            output = result.value;
            resolve(output);
          } else {
            reject(new Error("Unable to retrieve text value."));
          }
        });
      }
    });
  };
  