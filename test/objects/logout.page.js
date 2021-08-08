const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logoutMessage () { return $('h4') }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('logout')
    }
}

module.exports = new LogoutPage()