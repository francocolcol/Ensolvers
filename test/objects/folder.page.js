const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FolderPage extends Page {

    get createFolderButton() { return $('#jh-create-entity') }
    get refreshButton() { return $('.mr-2.btn.btn-info') }
    get message() { return $('.Toastify__toast-body') }
    get viewButtons () {
        return $$(`#folder-heading+.table-responsive .table tbody tr a[data-cy="entityDetailsButton"]`)
    }

    get editButtons() {
        return $$(`#folder-heading+.table-responsive .table tbody tr a[data-cy="entityEditButton"]`)
    }
    get deleteButtons() {
        return $$(`#folder-heading+.table-responsive .table tbody tr a[data-cy="entityDeleteButton"]`)
    }

    get ids (){
        return $$(`#folder-heading+.table-responsive .table tbody tr a.btn.btn.btn-link.btn-sm`).map(Element => Element.getText())
    }

    get confirmDeleteButton () { return $(`#jhi-confirm-delete-folder`)}
    get cancelDeleteButton () { return $(`div.modal-footer button.btn.btn-secondary`)}

    open() {
        return super.open('folder')
    }
}

module.exports = new FolderPage()