describe('SmokeTests1',function() {
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
      });
      browser.manage().timeouts().implicitlyWait(10000);
    
    it('launchacquire1',function(){
        browser.ignoreSynchronization = true;
        //browser.waitForAngularEnabled(false);
        browser.get('https://acquire.qa.altusplatform.com/',300000);
        browser.driver.manage().window().maximize();
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element(by.xpath("//input[@name='username']"))), 25000, 'Element taking too long to appear in the DOM');
        element(by.xpath("//input[@name='username']")).sendKeys('santosh+admin040719011628@argusexpresstest.com');
        element(by.xpath("//input[@name='password']")).sendKeys('Password123$');
        element(by.xpath("//input[@type='submit']")).click();
        
    },300000)
    it('verifypipeline',function(){
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
        it('uploadImage',function(){
//            browser.sleep(4000);
            var path = require('path');
            var fileToUpload = '../files/SamplePNGImage_100kbmb.png',
            absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.xpath('//label[contains(text(),"ASSET IMAGE")]//ancestor::div[@class="map-container"]//i')).click();
            browser.sleep(2000);
            element(by.xpath('//input[@type="file"]')).sendKeys(absolutePath);
            browser.sleep(2000);
            element(by.xpath('//button/span[contains(text(),"Save")]')).click();
            var until = protractor.ExpectedConditions;
            browser.wait(until.invisibilityOf(element(By.xpath("//mat-spinner"))), 25000, 'Element taking too long to appear in the DOM');
            //browser.sleep(5000);
        })

        it('SelectOrganization',function(){
            element(by.xpath("//a[contains(text(),'Strategy')]")).click();
        //    browser.sleep(1000);
            element(by.xpath("//label[contains(text(),'organization')]/parent::div//mat-select[contains(@class,'mat-select')]")).click();
          //  browser.sleep(3000);
            element(by.xpath("//span[contains(text(),'Your Organization')]")).click();
            browser.sleep(2000);
            //navigate to home button
        },300000)
        it('AddTask',function(){
            element(by.xpath("//a[contains(text(),'Tasks')]")).click();
  //          browser.sleep(2000);
            //
            element(by.xpath("//button//span[contains(text(),'Add Task')]")).click();
    //        browser.sleep(1000);
            element(by.xpath("//label[contains(text(),'Title')]/parent::div//input")).sendKeys('Task1');
      //      browser.sleep(1000);
            element(by.xpath("//button/span[contains(text(),'Create')]")).click();
            var until = protractor.ExpectedConditions;
            browser.wait(until.invisibilityOf(element(By.xpath("//mat-spinner"))), 25000, 'Element taking too long to appear in the DOM');
            
        },300000)
        it('Logout',function(){
            var until = protractor.ExpectedConditions;
            //element(by.xpath("//i[contains(@class,'icon-argus')]")).click();
            //browser.wait(until.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 15000, 'Element taking too long to appear in the DOM');
            element(by.xpath("//i[contains(@class,'icon-account')]")).click();
            //browser.sleep(2000);
            element(by.xpath("//div[@class='logout-btn']//button")).click();
            browser.wait(until.presenceOf(element(by.xpath("//input[@name='username']"))), 25000, 'Element taking too long to appear in the DOM');
    },300000)
})