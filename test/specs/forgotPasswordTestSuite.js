const exp = require('constants')
const { Page } = require('puppeteer-core')
const LoginPage = require('../objects/login.page')
const ResetPasswordPage = require('../objects/resetPassword.page')

describe('Forgot Password Test Suite', () => {
    it('should redirect to "Reset Password" page', async () => {
        await LoginPage.open()
        await LoginPage.forgetPasswordLink.waitForDisplayed()
        await LoginPage.forgetPasswordLink.click()
        await LoginPage.forgetPasswordLink.click()
        await ResetPasswordPage.inputEmail.setValue('francocol96@gmail.com')
        await ResetPasswordPage.resetButton.click()
        await expect(ResetPasswordPage.emailSentMessage).toHaveTextContaining('Check your emails for details on how to reset your password.')
    })

    it('should display an empty email message', async () => {
        await LoginPage.open()
        await LoginPage.forgetPasswordLink.waitForDisplayed()
        await LoginPage.forgetPasswordLink.click()
        await LoginPage.forgetPasswordLink.click()
        await ResetPasswordPage.inputEmail.setValue('')
        await ResetPasswordPage.resetButton.click()
        await expect(ResetPasswordPage.errorMessage).toHaveText('Your email is required.')
    })

    it('should display an invalid email message', async () => {
        await LoginPage.open()
        await LoginPage.forgetPasswordLink.waitForDisplayed()
        await LoginPage.forgetPasswordLink.click()
        await LoginPage.forgetPasswordLink.click()
        await ResetPasswordPage.inputEmail.setValue('asfasf')
        await ResetPasswordPage.resetButton.click()
        await expect(ResetPasswordPage.errorMessage).toHaveText('Your email is invalid.')
    })

})