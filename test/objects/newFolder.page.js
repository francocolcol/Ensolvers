const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewFolderPage extends Page {
    get inputFolderName () { return $('#folder-name')}
    get saveButton () { return $('#save-entity')}
    get backButton () { return $('[class="d-none d-md-inline"]')}
    
    open() {
        return super.open('folder/new')
    }
}

module.exports = new NewFolderPage()