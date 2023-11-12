/// <reference types="cypress"/>
import LoginPage from "../../pages/LoginPage";
const loginPage = new LoginPage()


describe("Homework2", () => {
    it("Test Case 01 - Validate the login form", () => {
          loginPage.getVisitProject2();

          const userPassword = ['Please enter your username','Please enter your password']

          cy.get('#username ,#password').parent().each((el, index) => {
          cy.wrap(el).should('have.text', userPassword[index])
          .and('be.visible').and('not.have.attr', 'required')
          })
          loginPage.getLoginButton().should('be.enabled').and('be.visible').and('have.text', 'LOGIN')
          loginPage.getForgotPasswordLink().should('be.visible').and('have.text', 'Forgot Password?').click()

        })

        it("Test Case 02 - Validate the valid login", () => {
          loginPage.getVisitProject2()

          loginPage.login('TechGlobal', 'Test1234')
          loginPage.getSuccessMessage().should('have.text', 'You are logged in')
          loginPage.getLogoutButton().should('be.visible').and('have.text', 'LOGOUT')
        })
        it("Test Case 03 - Validate the logout", () => {
          loginPage.getVisitProject2()

          loginPage.login('TechGlobal', 'Test1234')
          loginPage.logout()
          loginPage.getLoginForm().should('be.visible')
        })
        it("Test Case 04 - Validate the Forgot Password? Link and Reset Password modal", () => {
          loginPage.getVisitProject2()

          loginPage.resetPasswordLink()
          loginPage.getModalCardResetPassword().should('have.text', 'Reset Password')
          loginPage.getCloseButton().should('be.enabled')
          loginPage.getEmailField().should('be.visible').parent()
          .should('have.text', "Enter your email address and we'll send you a link to reset your password. ")
          loginPage.getSubmitButton().should('be.enabled').and('be.visible')
          .and('have.text', 'SUBMIT')
        })
        it("Test Case 05 - Validate the Reset Password modal close button", () => {
          loginPage.getVisitProject2()
          loginPage.resetPasswordLink()
          loginPage.getModalCardResetPassword().should('be.visible')
          loginPage.closeResetPasswordForm()
          loginPage.getModalCardResetPassword().should('not.exist')

        })
        it("Test Case 06 - Validate the Reset Password modal close button", () => {
          loginPage.getVisitProject2()

          loginPage.resetPasswordLink()
          loginPage.enterEmail('Igor@gmail.com')
          loginPage.submitEmail()
          loginPage.getConfirmationMessage()
          .should('have.text', 'A link to reset your password has been sent to your email address.')
        })
        const testData = [
          {
            description: 'Validate the invalid login with the empty credentials',
            errorMessage:'Invalid Username entered!',
            empty: true
          },
          {
            description: 'Validate the invalid login with the wrong username',
            errorMessage:'Invalid Username entered!',
            name: 'John',
            password: 'Test1234',
            empty: false
          },
          {
            description: 'Validate the invalid login with the wrong password',
            errorMessage:'Invalid Password entered!',
            name: 'TechGlobal',
            password: '1234',
            empty: false
          },
          {
            description: 'Validate the invalid login with the wrong username and password',
            errorMessage:'Invalid Username entered!',
            name: 'John',
            password: '1234',
            empty: false
          },
        ]
        testData.forEach((test, index) => {
          it(`Test Case ${index + 7 >= 10 ? index + 7: "0" + (index + 7)} - ${test.description}`, () => {
            loginPage.getVisitProject2()

            if(test.empty) {loginPage.getLoginButton().click()
              loginPage.getErrorMessage().should('have.text', test.errorMessage)
            }
            else {
            loginPage.login(test.name, test.password)
            loginPage.getErrorMessage().should('have.text', test.errorMessage)
            }
          })
      })
})