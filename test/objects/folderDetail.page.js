const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FolderDetailsPage extends Page {
    get backButton () { return $('[data-cy="entityDetailsBackButton"]')}
    get editButton () { return $('.btn.btn-primary')}


    open(id) {
        return super.open(`folder/${id}`)
    }
}

module.exports = new FolderDetailsPage()