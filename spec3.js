describe('SampleTest',function() {
    it('launchgoogle',function(){
        //let dealName = 'Auto+1235';
        //console.log(dealName);
        browser.ignoreSynchronization = true;
        //expect(100).toEqual(200);
        browser.get('https://acquire.qa.altusplatform.com/',300000);
        browser.driver.manage().window().maximize();
        browser.sleep(5000);
        expect(element(by.xpath('//div[@class="instruction"]')).getText()).toEqual('Login using your Altus ID');
        
        
        
        
    })
});