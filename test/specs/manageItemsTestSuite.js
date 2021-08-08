const { Page } = require('puppeteer-core')
const LoginPage = require('../objects/login.page')
const HomePage = require('../objects/home.page')
const ItemsPage = require('../objects/items.page')
const NewItemPage = require('../objects/newItem.page')

describe('Home Page Test Suite', () => {
    it('should redirect to Manage To-Do Items Page', async () => {
        await LoginPage.open()
        await LoginPage.login('franco', 'franco1')
        await browser.pause(2000)
        await HomePage.clickToDoListOption()
        await expect(browser).toHaveUrlContaining("https://qa-challenge.ensolvers.com/to-do-item")
    })

    it('should Create a new item', async () => {
        await ItemsPage.open()
        await ItemsPage.createItemButton.waitForClickable
        await ItemsPage.createItemButton.click()
        await NewItemPage.inputItemTitle.setValue('Item 1')
        await NewItemPage.inputItemDescription.setValue('This is item 1')
        await NewItemPage.saveButton.click()
        await expect(ItemsPage.newItemMessage).toHaveTextContaining('A new toDoItem is created with identifier')
    })

    xit('should redirect to view item details page', async () => {
        await FolderPage.open()
        await FolderPage.viewButton(0).click()
        await expect(browser).toHaveUrlContaining('https://qa-challenge.ensolvers.com/folder/')
        await browser.pause(3000)
    })
})