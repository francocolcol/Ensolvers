const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    get btnManageItems() {
        const buttons = $$('.mr-2')
        return buttons[0]
    }

    get btnManageItems() {
        const buttons = $$('.mr-2')
        return buttons[1]
    }

    get logMessage() {
        return $('[role="alert"]')
    }

    get manageListMenu() {
        return $('#entity-menu')
    }

    get accountMenu() {
        return $('#account-menu')
    }

    get toDoItemsOption() {
        return $('a[href$="/to-do-item"]')
    }

    get folderOption() {
        return $('a[href$="/folder"]')
    }

    get settingsOption() {
        return $('a[data-cy*="settings"]')
    }

    get logoutOption() {
        return $('a[data-cy*="logout"]')
    }

    clickToDoListOption() {
        this.manageListMenu.click()
        this.toDoItemsOption.click()
    }

    clickFolderOption() {
        this.manageListMenu.click()
        this.toDoItemsOption.click()
    }

    clickSettingsOption() {
        this.manageListMenu.click()
        this.settingsOption.click()
    }

    async logout() {
        await this.accountMenu.click()
        await this.logoutOption.click()
    }

    open() {
        return super.open('')
    }
}

module.exports = new HomePage()