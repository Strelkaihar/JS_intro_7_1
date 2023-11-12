describe ('Timeouts', () => {
    it('Explicit or inline timeouts' , () => {
        cy.visit('https://techglobal-training.com/frontend',{timeout: 10000});
        cy.clickCard('Html Element', {timeout:10000})

        // cy.get('#randomName', {timeout: 8000});
        cy.get('#main_heading', {timeout: 10000})
        cy.get('#hello_paragraph', {timeout: 10000}).click({timeout: 7000}, {force: true})

        
    })
    it.only('', () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Waits')

        cy.get('#red').click()
        cy.get('.Box_c_box__0aavl', {timeout: 12000}).should('be.visible')
        
/**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Waits" card
   * Click on the "Click on me to see a red box" button
   * Validate that a red box is displayed
   * Overriding defaultCommandTimeout:
   * npx cypress run --config defaultCommandTimeout=10000
   * 
   */
    })
})