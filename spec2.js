describe('SmokeTests1',function() {
    it('launchacquire1',function(){
        browser.ignoreSynchronization = true;
        //browser.waitForAngularEnabled(false);
        browser.get('https://acquire.qa.altusplatform.com/',300000);
        browser.driver.manage().window().maximize();
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element(by.xpath("//input[@name='username']"))), 25000, 'Element taking too long to appear in the DOM');
        element(by.xpath("//input[@name='username']")).sendKeys('santosh+aca2200619@argusexpresstest.com');
        element(by.xpath("//input[@name='password']")).sendKeys('Password123$');
        element(by.xpath("//input[@type='submit']")).click();
        
    },300000)
    it('waitforsometime',function(){
        browser.ignoreSynchronization = true;
        var until1 = protractor.ExpectedConditions;
        browser.wait(until1.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 400000, 'Element taking too long to appear in the DOM');
    },400000)
    it('adddeal',function(){
        //browser.ignoreSynchronization = false;
       // browser.waitForAngularEnabled(true);
        var until = protractor.ExpectedConditions;
        element(by.xpath("//button/span[contains(text(),'Add Deal')]")).click();
        //    browser.ignoreSynchronization = false;
            element(by.xpath("//label[text()='DEAL NAME']//ancestor::div[@class='deal_name_input']//input")).sendKeys("Deal Name");

            browser.sleep(1000);
            element(by.xpath("//button//span[contains(text(),'Next')]")).click();
            browser.sleep(1000);
            element(by.xpath("//button//span[contains(text(),'Create')]")).click();
            browser.sleep(1000);
            //navigate to home button
            element(by.xpath("//i[contains(@class,'icon-argus')]")).click();
            browser.wait(until.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 15000, 'Element taking too long to appear in the DOM');
            element(by.xpath("//i[contains(@class,'icon-account')]")).click();
            element(by.xpath("//div[@class='logout-btn']//button")).click();
    },300000)
})