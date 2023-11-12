import LoginPage from "../../pages/LoginPage";


describe ('Login page test', () => {

    beforeEach(() => {
        cy.fixture('example').then(function(data) {
            this.username = data.username
            this.password = data.password
        })
        
    })
    it("Login without POM", function() {
        cy.clickCard('Project - Login Function')

        cy.get('#username').type(this.username)
        cy.get('#password').type(this.password)

        cy.get('#login_btn').click()
        cy.get('#success_lgn').should('be.visible')
    })
    const loginPage = new LoginPage();

    it('Login with POM', function() {
        cy.clickCard('Project - Login Function')

        loginPage.login(this.username, this.password)
        loginPage.getSuccessMessage().should('be.visible')
    })
})