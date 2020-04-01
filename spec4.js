describe('SmokeTests1',function() {
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
      });
      browser.manage().timeouts().implicitlyWait(30000);
    
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
    },400000);
    it('adddeal',function(){
        //browser.ignoreSynchronization = false;
       // browser.waitForAngularEnabled(true);
        var until = protractor.ExpectedConditions;
        element(by.xpath("//button/span[contains(text(),'Add Deal')]")).click();
        //browser.ignoreSynchronization = false;
        //    browser.ignoreSynchronization = false;
            element(by.xpath("//label[text()='DEAL NAME']//ancestor::div[@class='deal_name_input']//input")).sendKeys("Auto+1234");

            //browser.sleep(1000);
            element(by.xpath("//button//span[contains(text(),'Next')]")).click();
            browser.sleep(1000);
            element(by.xpath("//button//span[contains(text(),'Create')]")).click();
            //browser.sleep(2000);
            //expect(element(by.xpath("//app-page-head-title//h1").getText())).toBe('Auto+1234');
        },300000);        
        it('upload an image file',function(){
            browser.sleep(4000);
            var path = require('path');
            var fileToUpload = '../files/SamplePNGImage_100kbmb.png',
            absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.xpath('//label[contains(text(),"ASSET IMAGE")]//ancestor::div[@class="map-container"]//i')).click();
            browser.sleep(2000);
            element(by.xpath('//input[@type="file"]')).sendKeys(absolutePath);
            browser.sleep(2000);
            element(by.xpath('//button/span[contains(text(),"Save")]')).click();
            //browser.sleep(5000);
        })

        it('select value from dropdown strategy page',function(){
            element(by.xpath("//a[contains(text(),'Strategy')]")).click();
            browser.sleep(1000);
            element(by.xpath("//label[contains(text(),'organization')]/parent::div//mat-select[contains(@class,'mat-select')]")).click();
            browser.sleep(3000);
            element(by.xpath("//span[contains(text(),'Your Organization')]")).click();
            browser.sleep(2000);
            //navigate to home button
        },300000)
/*
        it('create a model with AVUX',function(){
            
            element(by.xpath("//a[contains(text(),'Models')]")).click();
            browser.sleep(4000);
            element(by.xpath("//button[@class='frame-button mat-button btn-lg btn-plated-white']//span[contains(text(),'Add Model')]")).click();
            browser.sleep(2000);
            element(by.xpath("//label[text()='model name']/parent::div//input")).sendKeys('New Model');
            element(by.xpath("//div[@id='primary-data-source']//i")).click();
            element(by.xpath("//div[contains(@class,'ae')]")).click();
            element(by.xpath("//button/span[contains(text(),'Next')]")).click();
            element(by.xpath("//div[contains(@class,'computer')]"));
            element(by.xpath("//button/span[contains(text(),'Next')]")).click();
            var path = require('path');
            var fileToUpload = '../files/SimpleAdjustmentFile_01.avux',
            absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.xpath('//label[contains(text(),"ASSET IMAGE")]//ancestor::div[@class="map-container"]//i')).click();
            //browser.sleep(2000);
            element(by.xpath('//input[@type="file"]')).sendKeys(absolutePath);
            //browser.sleep(2000);
            element(by.xpath("button//span[contains(text(),'UPLOAD FILE')]")).click();
            element(by.xpath("//button//span[contains(text(),'Create')]")).click();
            browser.sleep(5000);

            //navigate to home button
        },300000)
        */
        it('add a task',function(){
            element(by.xpath("//a[contains(text(),'Tasks')]")).click();
            browser.sleep(2000);
            //
            element(by.xpath("//button//span[contains(text(),'Add Task')]")).click();
            browser.sleep(1000);
            element(by.xpath("//label[contains(text(),'Title')]/parent::div//input")).sendKeys('Task1');
            browser.sleep(1000);
            element(by.xpath("//button/span[contains(text(),'Create')]")).click();
            
        },300000)
        it('Logout',function(){
            var until = protractor.ExpectedConditions;
            //element(by.xpath("//i[contains(@class,'icon-argus')]")).click();
            //browser.wait(until.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 15000, 'Element taking too long to appear in the DOM');
            element(by.xpath("//i[contains(@class,'icon-account')]")).click();
            browser.sleep(2000);
            element(by.xpath("//div[@class='logout-btn']//button")).click();
    },300000)
})