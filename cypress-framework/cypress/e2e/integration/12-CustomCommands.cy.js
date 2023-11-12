describe("Custom commands", () => {

    it("Parent command", () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Html Elements')
        cy.login(" Tech", 'Global')   
        cy.selectDropDownOption('#company_dropdown1', 'Apple');
        cy.selectDropDownOption('#company_dropdown2', 'Microsoft');
    })
    it("Parent command", () => {

        cy.visit(Cypress.env('SITE_URL'));
        cy.clickCard('Html Elements')

        cy.get('#main_heading').logText()
    })
    it.only("Project", () => {
        cy.visit('https://techglobal-training.com/frontend/project-1')
        // Click on the “Male” option and validate it is selected while the others are not selected
        // Click on the “Female” option and validate it is selected while the others are not selected

        
        const expectedText = ['Male', 'Female', 'Prefer not to disclose']

        const checkOption = (option, expectedText) => {
            cy.contains(option).find('input').check().should('be.checked')

            expectedText.filter(opt => opt !== expectedText).forEach(unchecked => {
                cy.contains(unchecked).find('input').should('not.be.checked')
            });
        }
        checkOption('Male', expectedText)
        checkOption('Female', expectedText)
        checkOption('Prefer not to disclose', expectedText)

    })
})