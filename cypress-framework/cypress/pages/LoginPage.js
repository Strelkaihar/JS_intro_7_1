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
 login(username, password){
    this.getUserNameField().type(username)
    this.getPasswordField().type(password)
    this.getLoginButton().click()
 }
}

export default LoginPage