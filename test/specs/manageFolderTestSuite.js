const { Page } = require('puppeteer-core')
const LoginPage = require('../objects/login.page')
const HomePage = require('../objects/home.page')
const FolderPage = require('../objects/folder.page')
const NewFolderPage = require('../objects/newFolder.page')
const exp = require('constants')

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
        await expect(FolderPage.message).toHaveTextContaining('A new folder is created with identifier')
    })

    it('should open the Create a new folder page and return to the folders page', async () => {
        await FolderPage.open()
        await FolderPage.createFolderButton.waitForClickable
        await FolderPage.createFolderButton.click()
        await NewFolderPage.backButton.click()
        await expect(browser).toHaveUrl("https://qa-challenge.ensolvers.com/folder")
    })

    it('should redirect to view folder details page', async () => {
        await FolderPage.open()
        await FolderPage.refreshButton.waitForClickable()
        const firstID = await FolderPage.ids[0]
        await FolderPage.viewButtons[0].click()
        await expect(browser).toHaveUrlContaining(`https://qa-challenge.ensolvers.com/folder/${firstID}`)
    })

    it('should redirect to edit folder page', async () => {
        await FolderPage.open()
        await FolderPage.refreshButton.waitForClickable()
        const firstID = await FolderPage.ids[0]
        await FolderPage.editButtons[0].click()
        await expect(browser).toHaveUrlContaining(`https://qa-challenge.ensolvers.com/folder/${firstID}/edit`)
    })

    it('should delete folder', async () => {
        await FolderPage.open()
        await FolderPage.refreshButton.waitForClickable()
        const firstID = await FolderPage.ids[1]
        await FolderPage.deleteButtons[1].click()
        await FolderPage.confirmDeleteButton.waitForDisplayed()
        await FolderPage.confirmDeleteButton.click()
        await FolderPage.message.waitForExist()
        await expect(FolderPage.message).toHaveText(`A folder is deleted with identifier ${firstID}`)
        await FolderPage.refreshButton.waitForClickable()
        await expect($(`[href="/folder/${firstID}/delete"]`)).not.toExist()
    })
})