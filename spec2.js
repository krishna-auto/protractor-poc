describe('SmokeTests1',function() {
    browser.manage().timeouts().implicitlyWait(30000);
    beforeAll(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
        browser.ignoreSynchronization = true;
        browser.get('https://acquire.qa.altusplatform.com/',300000);
        browser.driver.manage().window().maximize();
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element(by.xpath("//input[@name='username']"))), 25000, 'Element taking too long to appear in the DOM');
        
      });
      beforeEach(function(){
        browser.manage().timeouts().implicitlyWait(30000);
      })
    it('Verify login Text message',function()
    {
        browser.ignoreSynchronization = true;
        //verify login page text
        expect(element(by.xpath('//div[@class="instruction"]')).getText()).toEqual('Login using your Altus ID');
    });
    it('Login into acquire',function(){
        browser.ignoreSynchronization = true;
        element(by.xpath("//input[@name='username']")).sendKeys('santosh+aausr4170519@argusexpresstest.com');
        element(by.xpath("//input[@name='password']")).sendKeys('Password123$');
        element(by.xpath("//input[@type='submit']")).click();
        
    },300000)
    it('VerifyPipelinePage',function(){
        
        browser.ignoreSynchronization = true;
        var until1 = protractor.ExpectedConditions;
        browser.wait(until1.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 40000, 'Element taking too long to appear in the DOM');
        element(by.xpath("//button/span[contains(text(),'Add Deal')]")).click();
        expect(element(by.xpath("//div[@class='acq-deal-header']")).getText()).toEqual('DEALS');
    },70000);
    it('adddeal',function(){
        element(by.xpath("//button/span[contains(text(),'Add Deal')]")).click(),function(){
        browser.sleep(3000);
        element(by.xpath("//label[text()='DEAL NAME']//ancestor::div[@class='deal_name_input']//input")).sendKeys('Auto+1234');
        element(by.xpath("//button//span[contains(text(),'Next')]")).click();
        element(by.xpath("//button//span[contains(text(),'Create')]")).click();
    }
        //var foo = element(by.xpath("//button//span[contains(text(),'Create')]"));
        //expect(foo.isEnabled()).toBe(true),function(){};
    });
    it('verify deal title',function(){
        var until = protractor.ExpectedConditions;
        browser.ignoreSynchronization = true;
            browser.wait(until.presenceOf(element(by.xpath("//app-page-head-title//h1"))), 20000, 'Element taking too long to appear in the DOM');    
            expect(element(by.xpath("//div[@class='acq-deal-header']")).getText()).toEqual('DEALS');
        });        

        it('upload an image file',function(){
            browser.ignoreSynchronization = true;
            var path = require('path');
            var fileToUpload = '../files/SamplePNGImage_100kbmb.png',
            absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.xpath('//label[contains(text(),"ASSET IMAGE")]//ancestor::div[@class="map-container"]//i')).click();
            element(by.xpath('//input[@type="file"]')).sendKeys(absolutePath);
            element(by.xpath('//button/span[contains(text(),"Save")]')).click();
        })

        it('select value from dropdown strategy page',function(){
            browser.ignoreSynchronization = true;
            element(by.xpath("//a[contains(text(),'Strategy')]")).click();
            element(by.xpath("//label[contains(text(),'organization')]/parent::div//mat-select[contains(@class,'mat-select')]")).click();
            element(by.xpath("//span[contains(text(),'Your Organization')]")).click();
        })
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
            element(by.xpath('//input[@type="file"]')).sendKeys(absolutePath);
            element(by.xpath("button//span[contains(text(),'UPLOAD FILE')]")).click();
            element(by.xpath("//button//span[contains(text(),'Create')]")).click();            
        },300000)
        */
        it('add a task',function(){
            browser.ignoreSynchronization = true;
            element(by.xpath("//a[contains(text(),'Tasks')]")).click();
            element(by.xpath("//button//span[contains(text(),'Add Task')]")).click();
            element(by.xpath("//label[contains(text(),'Title')]/parent::div//input")).sendKeys('Task1');
            element(by.xpath("//button/span[contains(text(),'Create')]")).click();
            
        })
        it('Logout',function(){
            browser.ignoreSynchronization = true;
            element(by.xpath("//i[contains(@class,'icon-account')]")).click();
            element(by.xpath("//div[@class='logout-btn']//button")).click();
    })
})