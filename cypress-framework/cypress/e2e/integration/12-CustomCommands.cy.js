describe("Custom commands", () => {

    it("Parent command", () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Html Elements')
        cy.login(" Tech", 'Global')   
        cy.selectDropDownOption('#company_dropdown1', 'Apple');
        cy.selectDropDownOption('#company_dropdown2', 'Microsoft');
    })
    it("Parent command", () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Html Elements')

        cy.get('#main_heading').logText()
    })
})