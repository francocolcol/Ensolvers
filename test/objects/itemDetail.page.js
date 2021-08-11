const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ItemDetailsPage extends Page {
    get backButton () { return $('[data-cy="entityDetailsBackButton"]')}
    get editButton () { return $('.btn.btn-primary')}


    open(id) {
        return super.open(`to-do-item/${id}`)
    }
}

module.exports = new ItemDetailsPage()