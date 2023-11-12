describe("Homework1", () => {
    it("Test Case 01 - Validate the Contact Us information", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1");

        const data = ['Contact Us', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'info@techglobalschool.com', '(773) 257-3010']
        cy.get('.mb-5').children().each(($el, index) => {
          cy.wrap($el).should('have.text', data[index])
        })
    });
    it("Test Case 02 - Validate the Full name input box", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1");

        cy.get('[placeholder="Enter your full name"]').should('be.visible')
        .and('have.attr','placeholder', 'Enter your full name')
        .and('have.attr', 'required')
        cy.get('[for="name"]').should('have.text', 'Full name *')
    })
    it.only("Test Case 03 - Validate the Gender radio button", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1");

        cy.get('.field .control .label').should('have.text', 'Gender *')
        .and('not.have.attr', 'required')

        const expectedTexts = ['Male','Female', 'Prefer not to disclose'];
        cy.get('.radio').each((el, index) => {
          cy.wrap(el).should('have.text', expectedTexts[index]).should('not.be.selected')
        })

        cy.checkOptionAndValidateOthers('Male', expectedTexts)
        cy.checkOptionAndValidateOthers('Female', expectedTexts)
        cy.checkOptionAndValidateOthers('Prefer not to disclose', expectedTexts)
    })
    
    const testData = [
        {
            description: 'Validate the Address input box',
            label: 'Address',
            placeHolder: 'Enter your address',
            required: false
        },
        {
            description: 'Validate the Email input box',
            label: 'Email *',
            placeHolder: 'Enter your email',
            required: true
        },
        {
            description: 'Validate the Phone input box',
            label: 'Phone',
            placeHolder: 'Enter your phone number',
            required: false
        },
        {
            description: 'Validate the Message input box',
            label: 'Message',
            placeHolder: 'Type your message here...',
            required: false
        }
    ]

    testData.forEach((test, index) => {
        it(`Test Case 0${index + 4} - Validate the Address input box`, () => {
            cy.visit("https://techglobal-training.com/frontend/project-1");

            cy.contains('.label', test.label).should('have.text', test.label);
            cy.contains('.label', test.label).parent().find('input, textarea').should('be.visible')
            .and('have.attr', 'placeholder', test.placeHolder)
            .and(test.required ? 'have.attr' : 'not.have.attr' ,'required')
        })
    })
    it("Test Case 08 - Validate the Consent checkbox", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1");
    
        cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
        cy.get('.checkbox > input').click().should('be.checked').click().should('not.be.checked').should('have.attr', 'required')
    
    
      })
    
      it("Test Case 09 - Validate the SUBMIT button", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1");
    
        cy.get('.control .button').should('be.visible').and('be.enabled').and('have.text', 'SUBMIT')
      })
    
      it("Test Case 10 - Validate the form submission", () => {
        cy.visit("https://techglobal-training.com/frontend/project-1");
    
    
        const form = ['John Doe', '2860 S River Rd Suite 480, Des Plaines, IL 60018', 'johndoe@gmail.com', '(773) 777 7777', 'Good luck, have fun!']
    
        cy.get('form > div > div > .input,textarea').each(($el, index) => {
          cy.wrap($el).type(form[index]);
        })
        cy.get(':nth-child(2) > .mr-1').check()
        cy.get('.checkbox > input').click()
        cy.get('.control .button').click()
        Cypress.on('uncaught:exception', () => {
          return false //returning false here prevents Cypress from failing the test
        })
    
        cy.get('.mt-5').should('have.text', 'Thanks for submitting!')
    
      })
});