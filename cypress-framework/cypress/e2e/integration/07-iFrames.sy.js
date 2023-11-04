// This is describe test block that holds group of tests
describe("iFrames and Cypress", () => {

    it("iFrames", () => {
        cy.visit('https://techglobal-training.com/frontend/')
         /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Validate the "Please fill out your information below" text
   */
         cy.get(".cards").contains('iFrames').click();
    })

});