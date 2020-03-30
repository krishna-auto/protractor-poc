describe('SampleTest',function() {
    it('launchgoogle',function(){
        browser.ignoreSynchronization = true;
        browser.get('https://www.google.com/');
        browser.driver.manage().window().maximize();
        
    })
});