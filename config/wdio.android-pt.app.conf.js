const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.cucumberOpts.require = ['./tests/steps/**/*.steps.js'];

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        language: "pt",
        locale: "br",
        'appium:deviceName': 'Moto_G__5S__Plus',
        'appium:platformVersion': '8',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
        'appium:newCommandTimeout': 24000,
        'appium:appPackage': "com.jogatina.tranca",
        'appium:appActivity': "com.jogatina.menu.Splash",
        'appium:skipLogcatCapture': true,
    },
];

exports.config = config;
