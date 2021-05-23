const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

const ThenPage=require('../pages/then.page');

//const pages = {
    //login: LoginPage
//}

Given(/^I am on the (\w+) page$/, (page) => {
    //pages[page].open()
    //browser.url('/')
   browser.url(page);
});

When(/^I login with (.*) and (.+)$/,  (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see Partner menu saying (.*)$/,  (message) => {
    
    //expect(SecurePage.loginPagePartnerMenu).toBeExisting();
    //expect(SecurePage.loginPagePartnerMenu).toHaveTextContaining(message);

    ThenPage.checkIfConditionExist (SecurePage.loginPagePartnerMenu);
    ThenPage.toHaveTextExisting (SecurePage.loginPagePartnerMenu, message);
});

