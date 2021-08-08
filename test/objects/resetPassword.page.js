const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class resetPasswordPage extends Page {

    get emailSentMessage () { return $('.Toastify__toast-body') }
    get inputEmail () { return $('#email') }
    get resetButton () { return $('[type="submit"]') }
    get errorMessage () { return $('.invalid-feedback') }

    open() {
        return super.open('account/reset/request')
    }
}

module.exports = new resetPasswordPage()