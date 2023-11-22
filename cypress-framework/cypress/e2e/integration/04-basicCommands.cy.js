/// <reference types="cypress"/> 
// A feature in many code editors that offers helpful suggestions as you type.

describe ('Cypress actions', () => {
    it('Click Action', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()
        cy.get('#register_button').click()
        cy.get('.mt-1').should('have.text', 'You clicked on “Register”')
        cy.get('#signin_button').click()
        cy.get('.mt-1').should('have.text', 'You clicked on “Sign in”')
    })
    it('Checkbox and Radio buttons', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        // cy.get("#apple_check > input").check();
        cy.get('#apple_check > input').check().should('be.checked').uncheck().should('not.be.checked')
        cy.get('#radio_1_option_1').should('not.be.checked').check().should('be.checked')
    } )
    it('Text input', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        // .type("any key")
        // .clear()
        cy.get('#text_input1').type('Hello Igor').clear()
        cy.get('#text_input2').type('Hello Burak').clear()
        })
    it('Calendar input', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        cy.get('#date_input1').type('02/20/1987{enter}')
   
        cy.get('#date_input2').clear().type('02/20/1987{enter}')
        })
    
     it('Dropdown input', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.get('.cards').contains('Html Elements').click()

        cy.get('#company_dropdown1').select('Tesla')
        cy.get('#company_dropdown1 > option:selected').should('have.text', 'Tesla')

        cy.get('#company_dropdown2').select('Microsoft')
        cy.get('#company_dropdown2 > option:selected').should('have.text', 'Microsoft')
     })
})