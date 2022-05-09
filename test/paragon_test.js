const {Builder, By, Key, until} = require('selenium-webdriver');
var should = require('chai').should();


describe("Registration tests", function(){
    it("Successfully register for a free trial", async function(){
        // launches the browser
        let driver = await new Builder().forBrowser('firefox').build();

        // navigates to paragon
        await driver.get("https://paragon-erp.com");

        // navigates to the free trial
        await driver.findElement(By.xpath("//*[@id='w-node-c29b752a-3c57-207a-630e-d1e7113299ba-113299a0']/a")).click();

        // navigates to the form
        await driver.findElement(By.xpath("/html/body/div[1]/div[1]/div[1]/div[2]/a[3]")).click();
        await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div[6]/a")).click();

        //await driver.get("https://get.paragon-erp.com/learn-more-paragonsmb/");

        // fills the fields
        await driver.findElement(By.id("companyname")).sendKeys("Starbucks", Key.RETURN);  
        await driver.findElement(By.id("first_name")).sendKeys("Kelly", Key.TAB);
        await driver.findElement(By.id("last_name")).sendKeys("Clarkson", Key.TAB);
        await driver.findElement(By.id("email")).sendKeys("kelly@email.com", Key.TAB);
        await driver.findElement(By.id("industry")).sendKeys("Medical", Key.TAB);
        await driver.findElement(By.id("phone_number")).sendKeys("514-778-3333", Key.TAB);


        //asserts the textbox inputs
        let company_name = await driver.findElement(By.xpath('//*[@id="companyname"]')).getText().then(function(value){
            return value;
        });
        company_name.should.equal("Starbucks");

        var first_name = await driver.findElement(By.id("first_name")).getText().then(function(value){
             return value;
        });
        first_name.should.equal("Kelly");

        var last_name = await driver.findElement(By.id("last_name")).getText().then(function(value){
             return value;
        });
        last_name.should.equal("Clarkson");

        var email = await driver.findElement(By.id("email")).getText().then(function(value){
            return value;
        });
        email.should.equal("kelly@email.com");

        var industry = await driver.findElement(By.id("industry")).getText().then(function(value){
            return value;
        });
        industry.should.equal("Medical");
        
        var phone_number = await driver.findElement(By.id("phone_number")).getText().then(function(value){
            return value;
        });
        phone_number.should.equal("514-778-3333")

        //submits

        //fills the form

        //asserts the form

        
    })
});
