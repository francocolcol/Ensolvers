const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ItemsPage extends Page {

    get createItemButton () { return $('#jh-create-entity') }
    get refreshButton () { return $('[class="mr-2 btn btn-info"]')}
    get newItemMessage () { return $('[class="Toastify__toast-body"]')}
    viewButton (positionInList) {
        const viewButtons = $$('[data-cy="entityDetailsButton"]')
        return viewButtons[positionInList]
    }
    editButton (positionInList) {
        const editButtons = $$('[class="btn btn-primary btn-sm"]')
        return editButtons[positionInList]
    }
    deleteButton (positionInList) {
        const deleteButtons = $$('[class="btn btn-danger btn-sm"')
        return deleteButtons[positionInList]
    }


    open() {
        return super.open('to-do-item')
    }
}

module.exports = new ItemsPage()