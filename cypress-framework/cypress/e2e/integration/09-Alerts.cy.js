describe("Alerts", () => {

    it("Handling the Warning and Confirmation alerts ", () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Alerts')

        cy.get('#warning_alert').click();
       
        //    * 1. Go to https://techglobal-training.com/frontend/
        //    * 2. Click on the "Alerts" card
        //    * 3. Click on the "Warning alert" button
        //    * 4. Validate the alert text equals "You are on TechGlobal Training application."
        //    * 5. Click on the "OK" button on the alert
        //    * 6. Validate the result message equals "You accepted warning by clicking OK."
        
        cy.on('window:alert', (str) => {
            expect(str).to.eq("You are on TechGlobal Training application.")
        })
        cy.get('#action').should('have.text', 'You accepted warning by clicking OK.')

        
     })
     it.only('Handling the confirmation alert', () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Alerts')
        // * CONFIRMATION ALERT
        // * 1. Go to https://techglobal-training.com/frontend/
        // * 2. Click on the "Alerts" card
        // * 3. Click on the "Confirmation alert" button
        // * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
        // * 5. Click on the "Cancel" button on the alert
        // * 6. Validate the result message equals "You rejected the alert by clicking Cancel."

        cy.get('#confirmation_alert').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Would you like to stay on TechGlobal Training application?')
            return false
        })
        cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.')

     })
})