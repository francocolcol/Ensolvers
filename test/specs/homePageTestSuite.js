const { Page } = require('puppeteer-core')
const LoginPage = require('../objects/login.page')
const HomePage = require('../objects/home.page')

describe('Home Page Test Suite', () => {
    xit('should display not logged in message', async () => {
        await HomePage.open()
        await HomePage.logMessage.waitForDisplayed()
        await expect(HomePage.logMessage).toHaveText('You are not logged in please Sign-In clicking HERE')
    })

    it('should redirect to Manage Folders Page', async () => {
        await LoginPage.open()
        await LoginPage.login('franco', 'franco1')
        await browser.pause(2000)
        await HomePage.btnManageFolders.click()
        await expect(browser).toHaveUrl("https://qa-challenge.ensolvers.com/folder")
    })

    it('should redirect to Manage To-Do Items Page', async () => {
        await HomePage.open()
        await browser.pause(2000)
        await HomePage.btnManageItems.click()
        await expect(browser).toHaveUrlContaining("https://qa-challenge.ensolvers.com/to-do-item")
    })

    it('should display logged in message ', async () => {
        await HomePage.open()
        await browser.pause(2000)
        await expect(HomePage.logMessage).toHaveText('You are logged in as "franco".')
    })
})