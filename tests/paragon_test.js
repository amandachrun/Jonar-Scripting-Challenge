const {Builder, By, Key} = require('selenium-webdriver');
var should = require('chai').should();


describe("Registration tests", function(){
    it("Successfully register for a free trial", async function(){
        //launches the browser
        let driver = await new Builder().forBrowser('firefox').build();

        //navigate to the jonar website
        await driver.get("https://www.jonar.com/");
    })
});
