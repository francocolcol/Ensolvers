const { Page } = require('puppeteer-core')
const LoginPage = require('../objects/login.page')
const HomePage = require('../objects/home.page')
const FolderPage = require('../objects/folder.page')
const NewFolderPage = require('../objects/newFolder.page')

describe('Home Page Test Suite', () => {
    it('should redirect to Manage Folders Page', async () => {
        await LoginPage.open()
        await LoginPage.login('franco', 'franco1')
        await browser.pause(2000)
        await HomePage.clickFolderOption()
        await expect(browser).toHaveUrl("https://qa-challenge.ensolvers.com/folder")
    })

    it('should Create a new folder', async () => {
        await FolderPage.open()
        await FolderPage.createFolderButton.waitForClickable
        await FolderPage.createFolderButton.click()
        await NewFolderPage.inputFolderName.setValue('Folder 1')
        await NewFolderPage.saveButton.click()
        await expect(FolderPage.newFolderMessage).toHaveTextContaining('A new folder is created with identifier')
    })

    xit('should Create a new folder', async () => {
        await FolderPage.open()
        await FolderPage.viewButton(0).click()
        await expect(browser).toHaveUrlContaining('https://qa-challenge.ensolvers.com/folder/')
        await browser.pause(3000)
    })
})