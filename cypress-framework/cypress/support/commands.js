// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add("clickCard", (link) => {
    cy.get(".cards").contains(link).click();
})

Cypress.Commands.add("login", (userName, password) => {
    cy.get('#text_input1').type(userName);
    cy.get('#text_input2').type(password);
})

Cypress.Commands.add("login", (userName, password) => {
    cy.get('#text_input1').type(userName);
    cy.get('#text_input2').type(password);
})
Cypress.Commands.add("selectDropDownOption", (selector, value) => {
    cy.get(selector).select(value);
})

// /**
//  * 
//  * @param {"1" | '2'} a 
//  * @param {number} b 
//  * @returns 
//  */
// function concat(a, b){
//     return a + b
// }

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add("logText",{prevSubject: true}, (subject) => {
    const text = subject.text();
    cy.log(`My text is ${text}`)
})

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })