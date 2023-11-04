
describe("iFrames and Cypress", () => {

    it("iFrames", () => {
        cy.visit('https://techglobal-training.com/frontend/')
        cy.clickCard('IFrames')
         /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Validate the "Please fill out your information below" text
   */   
        // .its('0.contentDocument.body') using to focuse on iframe

         cy.get('#form_frame').its('0.contentDocument.body')
         .should('not.be.empty').find('#name_form > p')
         .should('have.text', 'Please fill out your information below')
    })

    it.only("iFrames", () => {
    cy.visit('https://techglobal-training.com/frontend/')
    cy.clickCard('IFrames')
    // * Go to https://techglobal-training.com/frontend/
    // * Click on the "IFrames" card
    // * Enter "John" into the first name input box
    // * Enter "Doe" into the last name input box
    // * Click on the "SUBMIT" button
    // * Validate the result equals "You entered: John Doe"
    const name = ['John', 'Doe']
    cy.get('#form_frame').its('0.contentDocument.body').find('#first_name, #last_name ').each((el, index) => {
        cy.wrap(el).type(name[index]);
    })
    cy.get('#form_frame').its('0.contentDocument.body').find('#submit').click();
    cy.get('#result').should('have.text',`You entered: ${name.join(' ')}`);

    })
});