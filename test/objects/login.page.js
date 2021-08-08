const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }
    get btnCancel () { return $('[class="btn btn-secondary"]')}
    get failedLoginAlert () { return $('[data-cy="loginError"]') }
    get emptyUsernameMessage () { return $ ('.invalid-feedback')}
    get emptyPasswordMessage () { return $ ('.invalid-feedback')}
    get loginModal () { return $('.modal-content') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.waitForDisplayed()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login')
    }
}

module.exports = new LoginPage()
