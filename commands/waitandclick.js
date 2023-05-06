exports.command = function (selector){
    const browser = this;

    browser
    .waitForElementVisible(selector,60000)
    .click(selector)
    return this;
    
}