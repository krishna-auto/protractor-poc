describe('SmokeTests1',function() {
    beforeAll(function() {
        browser.manage().timeouts().implicitlyWait(30000);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        browser.ignoreSynchronization = true;
        browser.get('https://acquire.qa.altusplatform.com/',300000);
        browser.driver.manage().window().maximize();
      });
      
    it('loginintoAcquire',function(){
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(element(by.xpath("//input[@name='username']"))), 25000, 'Element taking too long to appear in the DOM');
        element(by.xpath("//input[@name='username']")).sendKeys('santosh+aaadmin4170519@argusexpresstest.com');
        element(by.xpath("//input[@name='password']")).sendKeys('Password123$');
        element(by.xpath("//input[@type='submit']")).click();
        
    },300000)
    it('VerifyPipelinePage',function(){
        browser.ignoreSynchronization = true;
        var until1 = protractor.ExpectedConditions;
        browser.wait(until1.presenceOf(element(by.xpath("//button/span[contains(text(),'Add Deal')]"))), 400000, 'Element taking too long to appear in the DOM');
    },400000);
    it('adddeal',function(){
        var until = protractor.ExpectedConditions;
        element(by.xpath("//button/span[contains(text(),'Add Deal')]")).click();
            element(by.xpath("//label[text()='DEAL NAME']//ancestor::div[@class='deal_name_input']//input")).sendKeys("Auto+1234");
            element(by.xpath("//button//span[contains(text(),'Next')]")).click();
            var foo = element(by.xpath("//button//span[contains(text(),'Create')]"));
            expect(foo.isEnabled()).toBe(true);
            foo.click(),function(){
            var foo = element(by.xpath("//app-page-head-title//h1"));
            var s = expect(foo.getText()).toEqual('Auto+1235');
            console.log("latest +" +s);
            
        };
        });        
        it('upload an image file',function(){
            var path = require('path');
            var fileToUpload = '../files/SamplePNGImage_100kbmb.png',
            absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.xpath('//label[contains(text(),"ASSET IMAGE")]//ancestor::div[@class="map-container"]//i')).click();
            element(by.xpath('//input[@type="file"]')).sendKeys(absolutePath);
            
            element(by.xpath('//button/span[contains(text(),"Save")]')).click();
        })

        it('select value from dropdown strategy page',function(){
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
            element(by.xpath("//a[contains(text(),'Tasks')]")).click();
            element(by.xpath("//button//span[contains(text(),'Add Task')]")).click();
            element(by.xpath("//label[contains(text(),'Title')]/parent::div//input")).sendKeys('Task1');
            element(by.xpath("//button/span[contains(text(),'Create')]")).click();
            
        })
        it('Logout',function(){
            element(by.xpath("//i[contains(@class,'icon-account')]")).click();
            element(by.xpath("//div[@class='logout-btn']//button")).click();
    })
})