const { Page } = require('puppeteer-core')
const LoginPage = require('../objects/login.page')
const HomePage = require('../objects/home.page')
const LogoutPage = require('../objects/logout.page');

describe('Login Page Test Suite', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('franco', 'franco1')
        await expect(browser).toHaveUrl('https://qa-challenge.ensolvers.com/')
        await HomePage.logout()
    });

    it('should not login with invalid credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login('notfranco', 'notfranco1')
        await expect(LoginPage.failedLoginAlert).toHaveText('Failed to sign in! Please check your credentials and try again.')
    })

    it('should show empty username message', async () =>{
        await LoginPage.open()
        await LoginPage.login('', 'franco1')
        await expect(LoginPage.emptyUsernameMessage).toHaveText('Username cannot be empty!')
    })

    it('should show empty password message', async () =>{
        await LoginPage.open()
        await LoginPage.login('franco', '')
        await expect(LoginPage.emptyPasswordMessage).toHaveText('Password cannot be empty!')
    })

    it('should close the login modal', async () =>{
        await LoginPage.open()
        await LoginPage.btnCancel.waitForDisplayed()
        await LoginPage.btnCancel.click()
        await LoginPage.btnCancel.click()
        await expect(LoginPage.loginModal).not.toExist()
        await browser.pause(3000)
    })

    it('should logout', async () => {
        await LoginPage.open()
        await LoginPage.login('franco', 'franco1')
        await HomePage.logout()
        await expect(LogoutPage.logoutMessage).toHaveText('Logged out successfully!')
    });

    xit('should remember the username and password', async () => {
        await LoginPage.open()
        await LoginPage.remembermeCheckBox.waitForDisplayed()
        await LoginPage.remembermeCheckBox.click()
        await LoginPage.remembermeCheckBox.click()
        await browser.pause(3000)
        await LoginPage.login('franco', 'franco1')
        await HomePage.logout()
        await LoginPage.open()
        await LoginPage.inputUsername.waitForDisplayed()
        await expect(inputUsername).toHaveValue('franco')
        await expect(inputPassword).toHaveValue('franco1')
    });

    it('should redirect to "Reset Password" page', async () => {
        await LoginPage.open()
        await LoginPage.forgetPasswordLink.waitForDisplayed()
        await LoginPage.forgetPasswordLink.click()
        await LoginPage.forgetPasswordLink.click()
        await expect(browser).toHaveUrl("https://qa-challenge.ensolvers.com/account/reset/request")
    })

});


