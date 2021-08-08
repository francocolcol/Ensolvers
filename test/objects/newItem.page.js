const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewItemPage extends Page {
    get inputItemTitle () { return $('#to-do-item-title')}
    get inputItemDescription () { return $('#to-do-item-description')}
    get saveButton () { return $('#save-entity')}
    get backButton () { return $('[class="d-none d-md-inline"]')}
    // Folder TBD

    
    open() {
        return super.open('folder/new')
    }
}

module.exports = new NewItemPage()