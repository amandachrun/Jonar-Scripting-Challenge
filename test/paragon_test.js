const { Browser } = require('selenium-webdriver'); //required statement allows to pull in specific functionailities
const {Builder, By, Key, until, WebDriverWait} = require('selenium-webdriver');
var should = require('chai').should(); //assertion lib

//using Mocha
describe("Registration tests", function(){
    it("Successfully register for a free trial", async function(){
        //for reuse
        var company_name = "Starbucks";
        var first_name = "Kelly";
        var last_name = "Clarkson";
        var email = "kelly@email.com";
        var phone_number = "514-777-8888";

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
        driver.findElement(By.id("companyname")).sendKeys(company_name, Key.TAB);  
        driver.findElement(By.id("first_name")).sendKeys(first_name, Key.TAB);
        driver.findElement(By.id("last_name")).sendKeys(last_name, Key.TAB);
        driver.findElement(By.id("email")).sendKeys(email, Key.TAB);
        driver.findElement(By.id("industry")).sendKeys("Medical", Key.TAB);
        driver.findElement(By.id("phone_number")).sendKeys(phone_number, Key.TAB);


        //asserts the textbox inputs
        let select_company_name = await driver.findElement(By.id("companyname")).getAttribute("value").then(function(value){
            return value;
        });
        select_company_name.should.equal(company_name);

        let select_first_name = await driver.findElement(By.id("first_name")).getAttribute("value").then(function(value){
             return value;
        });
        select_first_name.should.equal(first_name);

        let select_last_name = await driver.findElement(By.id("last_name")).getAttribute("value").then(function(value){
             return value;
        });
        select_last_name.should.equal(last_name);

        let select_email = await driver.findElement(By.id("email")).getAttribute("value").then(function(value){
            return value;
        });
        select_email.should.equal(email);

        let select_industry = await driver.findElement(By.id("industry")).getAttribute("value").then(function(value){
            return value;
        });
        //industry.should.equal("Medical");
        
        let select_phone_number = await driver.findElement(By.id("phone_number")).getAttribute("value").then(function(value){
            return value;
        });
        select_phone_number.should.equal(phone_number)


        //submits
        const register_button = await driver.findElement(By.xpath("/html/body/div[1]/div[2]/div[12]/div[2]/form/button"));
        register_button.click();

        //driver.navigate().refresh();
        try {
            //asserts the form on the next page
            let confirm_email = await driver.findElement(By.id('email')).getAttribute("value").then(function(value){
                return value;
            });
            confirm_email.should.equal(email);

            let confirm_company_name = await driver.findElement(By.id("company")).getAttribute("value").then(function(value){
                return value;
            });
            confirm_company_name.should.equal("Starbucks");

            let url = await driver.findElement(By.id('subdomain')).getAttribute("value").then(function(value){
                return value;
            });
            url.should.equal(company_name.toLowerCase());
        }catch(e) {
            console.log(e)
        }


        //quits the browser
        await driver.quit();
    })
    
});
