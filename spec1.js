describe('SmokeTests',function() {
    it('launchacquire',function(){
        browser.ignoreSynchronization = true;
        //browser.waitForAngularEnabled(false);
        browser.get('https://acquire.qa.altusplatform.com/');
        browser.driver.manage().window().maximize();
        browser.sleep(50000);    
        element(by.xpath("//input[@name='username']")).sendKeys('santosh+admin180919031844@argusexpresstest.com');
        element(by.xpath("//input[@name='password']")).sendKeys('Acquire234$');
        element(by.xpath("//input[@type='submit']")).click();
        
        // comment add
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 180000, 'Element taking too long to appear in the DOM');
        //browser.waitForAngularEnabled(true);
        //browser.ignoreSynchronization = false;
            //Add deal
            element(by.xpath("//button/span[contains(text(),'Add Deal')]")).click();
        //    browser.ignoreSynchronization = false;
            element(by.xpath("//label[text()='DEAL NAME']//ancestor::div[@class='deal_name_input']//input")).sendKeys("Deal Name");

            browser.sleep(1000);
            element(by.xpath("//button//span[contains(text(),'Next')]")).click();
            browser.sleep(1000);
            element(by.xpath("//button//span[contains(text(),'Create')]")).click();
            browser.sleep(1000);
            element(by.xpath("//a[contains(text(),'Strategy')]")).click();
            browser.sleep(1000);
            element(by.xpath("//a[contains(text(),'Models')]")).click();
            browser.sleep(1000);
            element(by.xpath("//a[contains(text(),'Tasks')]")).click();
            browser.sleep(1000);
            //a[contains(text(),'Strategy')]
            //navigate to home button
            element(by.xpath("//i[contains(@class,'icon-argus')]")).click();
            browser.wait(until.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 15000, 'Element taking too long to appear in the DOM');
            element(by.xpath("//i[contains(@class,'icon-account')]")).click();
            browser.sleep(1000);
            element(by.xpath("//div[@class='logout-btn']//button")).click();
            

    },300000);
    });
    /*it('entercredentials',function(){
        browser.ignoreSynchronization = true;
        element(by.xpath("//input[@name='username']")).sendKeys('')
        element(by.xpath("//input[@name='username']")).sendKeys();
        element(by.xpath("//input[@type='submit']")).click();
        console.log('enter credentials');
    })
    it('clicklogin',function() {
        console.log('click login');
    })
    it('checkpipeline',function(){
        console.log('check pipeline');
    })
    it('addonedeal',function(){

    })
    it('clickhomebutton',function(){

    })
    it('logoutfromapp',function(){

    })
})*/