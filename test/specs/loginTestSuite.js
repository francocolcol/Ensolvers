const { Page } = require('puppeteer-core')
const LoginPage = require('../objects/login.page')
const HomePage = require('../objects/home.page')

describe('Home Page Test Suite', () => {
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

    it('should show empty password message', async () =>{
        await LoginPage.open()
        await LoginPage.btnCancel.waitForDisplayed()
        await LoginPage.btnCancel.click()
        await LoginPage.btnCancel.click()
        await expect(LoginPage.loginModal).not.toExist()
        await browser.pause(3000)
    })
});


