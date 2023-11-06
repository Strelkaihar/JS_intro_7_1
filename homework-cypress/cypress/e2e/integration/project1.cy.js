describe("Homework1", () => {
    it("Test Case 01 - Validate the Contact Us information", () => {
        cy.visit("https://techglobal-training.com/frontend")
        cy.clickCard("Project - Form Elements")

        cy.get('.is-size-3').should('have.text', 'Contact Us')
        .next().should('have.text', "2860 S River Rd Suite 480, Des Plaines, IL 60018")
        .next().should('have.text', "info@techglobalschool.com")
        .next().should('have.text', '(773) 257-3010'); 
    });
    it("Test Case 02 - Validate the Full name input box", () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Project - Form Elements");
        cy.get('[placeholder="Enter your full name"]').should('be.visible')
        .and('have.attr','placeholder', 'Enter your full name')
        .and('have.attr', 'required')
        cy.get('[for="name"]').should('have.text', 'Full name *')
    })
    it.only("Test Case 03 - Validate the Gender radio button", () => {
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard("Project - Form Elements");

        cy.get('.field .control .label').should('have.text', 'Gender *')

        const arr = ['Male','Female', 'Prefer not to disclose'];
        
        cy.get('.radio').each((el, index) => {
          cy.wrap(el).should('have.text', arr[index]).should('not.be.checked')
        })
    })
});