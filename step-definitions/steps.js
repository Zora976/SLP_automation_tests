const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../features/pageobjects/login.page');
const SecurePage = require('../features/pageobjects/secure.page');


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open()
   
});

When(/^I login with (.*) and (.+)$/,  (username, password) => {
    LoginPage.login(username, password)
});

Then(/^I should see Partner menu saying (.*)$/,  (message) => {
    
    expect(SecurePage.loginPagePartnerMenu).toBeExisting();
    expect(SecurePage.loginPagePartnerMenu).toHaveTextContaining(message);
});

