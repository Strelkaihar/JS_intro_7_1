class LoginPage {
    getUserNameField(){
       return cy.get('#username')
    }
    getPasswordField(){
       return cy.get('#password')
    }
    getLoginButton(){
       return cy.get('#login_btn')
    }
    getSuccessMessage(){
       return cy.get('#success_lgn')
    }
    getForgotPasswordLink(){
      return cy.get('[href="/frontend/project-2"]')
    }
    getLogoutButton(){
      return cy.get('#logout')
    }
    getModalCardResetPassword() {
      return cy.get('#modal_title')
    }
    getCloseButton() {
      return cy.get('.delete')
    }
    getEmailField() {
      return cy.get('#email')
    }
    getLoginForm() {
      return cy.get('.LoginForm_content__GphXn')
    }
    getSubmitButton() {
      return cy.get('#submit')
    }
    getVisitProject2(){
      return cy.visit('https://techglobal-training.com/frontend/project-2')
    }
    getConfirmationMessage(){
      return cy.get('#confirmation_message')
    }
    getErrorMessage() {
      return cy.get('#error_message')
    }
    login(username, password){
       this.getUserNameField().type(username)
       this.getPasswordField().type(password)
       this.getLoginButton().click()
    }
    logout(){
      this.getLogoutButton().click()
    }
    resetPasswordLink(){
      this.getForgotPasswordLink().click()
    }
    closeResetPasswordForm() {
      this.getCloseButton().click()
    }
    enterEmail(email){
      this.getEmailField().type(email)
    }
    submitEmail(){
      this.getSubmitButton().click()
    }
   }
   
   export default LoginPage

