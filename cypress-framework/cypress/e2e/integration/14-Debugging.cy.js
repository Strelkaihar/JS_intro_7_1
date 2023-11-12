describe ('Debugging', () => {
    it('Debugging wait() - Hard wait' , () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Html Element')

        //cy.wait(10000)
        cy.get('#checkbox_1').check()
    })
    it('Debugging pause() ' , () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function')

        cy.get('#username').type('TechGlobal')
        cy.pause()
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
    })
    it('Debugging cy.debug() ' , () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Project - Login Function')

        cy.get('#username').type('TechGlobal')
        cy.debug()
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
    })
})