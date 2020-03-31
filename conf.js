var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

// An example configuration file.
exports.config = {
  directConnect: true,

  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(10000);
},
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    
  'browserName': 'chrome',
  //'directConnect': true,
   //chromeOptions: {args: ['--headless', "--window-size=1920,1080"]} 
    
   //'browserName': 'firefox'
  
  
  }, 
  /*
  //multiple browser parallel execution
  multiCapabilities : [{
    browserName : 'firefox',
  },
  {
    browserName : 'chrome'
  },  
],
*/
/*
// Single browser parallel execution
   capabilities: {
      'browserName': 'firefox',
	  'shardTestFiles': true,
      'maxInstances': 2
    },
  
    framework: 'jasmine',
    specs: [
        'spec1.js',
        'spec2.js'
    ],

*/
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec2.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function () {

    /*browser.getCapabilities().then(function (cap) {
      console.log(cap);
      browser.browserName = cap.caps_.browserName;
      jasmine.getEnv().addReporter(new HtmlReporter({
          baseDirectory: 'target/'+browser.browserName+'/angular-test-result/',
          takeScreenShotsOnlyForFailedSpecs: true,
          preserveDirectory: false
      }));
  });*/

 
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));

    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    var fs = require('fs-extra');
 
fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });

  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  //HTMLReport called once tests are finished
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }
};
