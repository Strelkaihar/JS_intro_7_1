describe('Cypress Assertions', () => {
  it('Default Assertions', () => {
    //this is failed if page work and exist
    cy.visit('https://techglobal-training.com/frontend')
    cy.get('.cards').contains('Html Elements').click()

    cy.get('#register_button').click()
    cy.get('#text_input1').type('TechGlobal')
  })
  it('Implicit Assertions', () => {
    //this is failed if page work and exist
    cy.visit('https://techglobal-training.com/frontend')
    cy.get('.cards').contains('Html Elements').click()

    //Any Assertions we do using should() or and()  it is Implicit Assertions
    cy.get('#main_heading').should('have.text', 'Html Elements')
    cy.get('#main_heading').should('include.text', 'Elements')

    cy.url().should(
      'eq',
      'https://techglobal-training.com/frontend/html-elements'
    )
    cy.title().should('eq', 'TechGlobal Training | Html Elements')

    cy.get('#main_heading').should('have.attr', 'id', 'main_heading')
    cy.get('#facebook_link').should(
      'have.attr',
      'href',
      'https://www.facebook.com/techglobaleducation'
    )

    cy.get('[id*="paragraph"]').should('have.length', 2)

    cy.get('#checkbox_1').should('be.enabled')

    cy.get('#checkbox_1').should('not.be.checked')

    cy.get('[id*="paragraph"]').should(
      'have.css',
      'color',
      'rgb(105, 105, 105)'
    )
    cy.get('[id*="paragraph"]').should('have.css', 'padding', '0px')

    cy.get('#hello_paragraph')
      .and('have.text', 'Hello World!')
      .and('have.attr', 'id', 'hello_paragraph')
      .and('be.visible')

      cy.visit('')
  })

  it('Explicit Assertions', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.get('.cards').contains('Html Elements').click()

    cy.get('#main_heading').should('have.text', 'Html Elements')
    cy.get('#main_heading')
      .invoke('text')
      .then((ele) => {
        const el = ele
        expect(el).to.eq('Html Elements')
      })
    cy.get('#main_heading').then(($ele) => {
      const el = $ele.text()
      expect(el).to.include('Html Elements')
    })
    cy.get('#main_heading').then(($ele) => {
        const el = $ele.text()
        expect(el).to.exist
      })
      cy.get('#main_heading').invoke('attr', 'id').then((attr) => {
        expect(attr).to.equal('main_heading')
      })
      cy.get('[id*="paragraph"]').then((ele) => {
        expect(ele).to.have.length(2)
      })
      cy.get('#checkbox_1').then(($el) => {
        expect($el).to.be.enabled
        expect($el).to.be.visible
        expect($el).not.to.be.checked
    })

    cy.get('[id*="paragraph"]').should('have.css', 'color', 'rgb(105, 105, 105)')

    cy.get('[id*="paragraph"]').then(($el) => {
        expect($el.css('color')).to.equal('rgb(105, 105, 105)')
    })

    cy.get('#main_heading').then(($el) => {
        cy.wrap($el).should('have.text', 'Html Elements')
        cy.wrap($el.text()).should('eq', 'Html Elements')
    })
  })
  it('MORE Explicit Assertions - validate multiple element', () => {

    cy.visit('https://techglobal-training.com/frontend')
    cy.clickCard('Html Elements')

    cy.get('#hello_paragraph').should('have.text','Hello World!')
    cy.get('#testing_paragraph').should('have.text','I like automation testing!')
    cy.contains('Paragraphs').nextAll().as('paragraphHeader')
    cy.contains('Paragraphs').nextAll().first().should('have.text','Hello World!').next().should('have.text','I like automation testing!')

    // And we can loop through using fori loop by their index - NOT A PREFERRED WAY
    const arr = ['Hello World!','I like automation testing!' ]
    for( let i = 0; i < arr.length; i++) {
      cy.get('@paragraphHeader').eq(i).should('have.text',arr[i])
    }
    // We can assert these using each() and validate using explicit assertion
    cy.get('@paragraphHeader').each((el,index) => {
      cy.log(el.text())
      expect(el.text()).to.eq(arr[index])
    })
    // Utilizing the wrap approach for multiple assertions
    cy.get('@paragraphHeader').each((el, index) => {
      // To enable further chaining with Cypress commands, re-wrap the element using cy.wrap()
      // This allows for the continuious of implicit assertions
      cy.wrap(el).should('have.text', arr[index]).and('be.visible')
      // Howeever, it is important to note that if he ext is directly retrieved from the element as a string
      // the nature of the content changes from web element to plain STRING
      // In essence, assertions should adapt to use 'eq' instead of 'have.text'
      // Additionally, since the content is no longer a web element
      // furhter chaining with web element-specific commands, such as 'be.visible.' is not gonna work.
      //cy.wrap(el.text()).should('eq', arr[index]).and('be.visible')
    })
    const arr1 = ['Programming Languages','Automation Tools' ]
    cy.contains('Headings').nextAll().each((el, index) => {
      cy.wrap(el).should('have.text', arr1[index]).and('be.visible')
    })
    const arr2 = ['Apple','Microsoft','Tesla' ]
    cy.contains('Checkboxes').nextAll().each((el, index) => {
      cy.wrap(el).should('have.text', arr2[index]).and('be.visible')
      cy.get(`#checkbox_${index + 1}`).should('be.enabled')
    })
    cy.get('#checkbox-button-group > div').each((el, index) => {
      cy.wrap(el).should('have.text', arr2[index]).find('input').should('be.enabled').and('be.visible')
     })

  })

  it(' Assertions - practices01', () => {

    cy.visit('https://techglobal-training.com/frontend/')
    cy.clickCard('Html Elements')
    // * 1. Go to https://techglobal-training.com/frontend
    // * 2. Navigate to 'Html Elements' card
    // * 3. From the "Text Inputs" section
    // * 4. Validate text input 1 and text input 2 is enabled
    // * 5. Validate text input 1 and text input 2 is is not required
    // * 6. Enter your name and last name
    const arr = ['Ihar', 'Strelka']
    cy.get('#text_input1, #text_input2').each(($el,index) => {
      cy.wrap($el).type(arr[index]).should('be.enabled').and('not.have.attr', 'required')

     })
    })
    it(' Assertions - practices02', () => {
    cy.visit('https://techglobal-training.com/frontend/')
    cy.clickCard('Html Elements')
     /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     * 3. From the "Date Inputs" section
     * 4. Validate date input 1 and date input 2 is enabled
     * 5. Validate date input 1 and date input 2 is is not required
     * 6. Enter dates for both date input 1 and date input 2
     * 7. Validate value is changed to given dates.
     */
    const arr = ['09/10/2022', '09/11/2022']
    cy.get('#date_input2, #date_input1').each(($el, index) => {
    cy.wrap($el).clear().type(`${arr[index]} {enter}`).should('have.attr', 'value', arr[index])
    .and('be.enabled').and('not.have.attr', 'required')
     })
  })
  it.only(' Assertions - practices03', () => {
  cy.visit('https://techglobal-training.com/frontend/')
  cy.clickCard('Html Elements')
     /**
     * 1. Go to https://techglobal-training.com/frontend
     * 2. Navigate to 'Html Elements' card
     * 3. From the "Dropdowns" section
     * 4. Validate dropdown 1 and dropdown 2 is enabled
     * 6. Enter Microsoft for dropdown 1 and Apple for dropdown 2
     * 7. Validate options are selected
     */
    const arr = ['Microsoft', 'Apple']
    cy.get('#company_dropdown1, #company_dropdown2').each(($el, index) => {
    cy.wrap($el).should('be.enabled').select(arr[index])
    .find('option:selected').should('have.text',arr[index])
    })

  })
})
