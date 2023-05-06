exports.command = function (selector, value){
    const browser = this;

    browser
    .waitForElementVisible(selector,60000)
    .setValue(selector, value)
    return this;
    
}


