describe('Interacting Multiple tabs', () => {

    it('Multiple tabs', () => {
        cy.visit('https://techglobal-training.com/frontend/')
        cy.clickCard('Multiple Windows')

        cy.get('#microsoft').should('have.attr', 'target', '_blank')

        cy.get('#apple').invoke('removeAttr', 'target').click()
        cy.go(-1)
    })

    it.only('Multiple tabs', () => {
        cy.visit('https://techglobal-training.com/frontend/')
        cy.clickCard('Multiple Windows')

        // * Go to https://techglobal-training.com/frontend/
        // * Click on the "Multiple Windows" card
        // * Click on the "Apple" link
        // * Validate that the child window title is "Apple"
        // * Close the window and switch back to the main window
        // * Validate title contains "techglobal"
        // cy.get('#apple').invoke('removeAttr', 'target').click().title().should('eq', 'Apple').go(-1)
        // .title().then((el) => {
        //     expect(el.toLowerCase()).to.be.contain('techglobal')
        // })

         /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link and validate URL contains "https://www.apple.com/"
   * Click on the "Microsoft" link and validate URL contains "https://www.microsoft.com/en-us/"
   * Click on the "Tesla" link and validate URL contains "https://www.tesla.com/"
   */
        //  const name = ['https://www.apple.com', 'https://www.microsoft.com','https://www.tesla.com']
        //  cy.get('.SubPageLayout_content__KWihT  > div > ul > li > a').each((el,index) => {
        //      cy.wrap(el).invoke('removeAttr', 'target').click().url().should('contain', name[index]).go(-1);
        //  })
        
         cy.get('#apple').invoke('removeAttr', 'target').click().url().should('contain', 'https://www.apple.com').go(-1)
         cy.get('#microsoft').invoke('removeAttr', 'target').click().url().should('contain', 'https://www.microsoft.com').go(-1)
         cy.get('#tesla').invoke('removeAttr', 'target').click().url().should('contain', 'https://www.tesla.com').go(-1)
    })

})