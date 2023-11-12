describe("Practices", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend");
    cy.clickCard("Html Elements");
  })
  it("Implicit assertions Practices 01", () => {

    /**
     * 1. Go to 'https://techglobal-training.com/frontend'
     * 2. Click on the 'Html Elements' card
     * 3. From the Paragraphs heading
     * 4. Validate Hello World and I Like automation testing! texts are visible
     * 5. Validate their texts are equal to expected texts
     * 6. Validate their id and value
     */
    cy.get("#hello_paragraph")
      .should("be.visible")
      .and("have.text", "Hello World!")
      .and("have.attr", "id", "hello_paragraph");

    cy.get("#testing_paragraph")
      .should("be.visible")
      .and("have.text", "I like automation testing!")
      .and("have.attr", "id", "testing_paragraph");
  });
  it("Implicit assertions Practices 02", () => {


    /**
     * 1. Go to 'https://techglobal-training.com/frontend'
     * 2. Click on the 'Html Elements' card
     * 3. From the "Buttons" section
     * 4. Validate "Register" and "Signin" buttons are visible
     * 5. Validate their texts are equal "Register" and "Signin"
     * 6. Validate both buttons are enabled
     */

    cy.get("#register_button").should("be.visible").and("have.text", "Register").and("be.enabled");

    cy.get("#signin_button").should("be.visible").and("have.text", "Sign in").and("be.enabled");
  });
  it("Implicit assertions Practices 03", () => {

    /**
   * 1. Go to 'https://techglobal-training.com/frontend'
   * 2. Click on the 'Html Elements' card
   * 3. From the "Ordered Lists" section
   * 4. Validate "Ordered Lists" heading text is visible and its equal to "Ordered Lists"
   * 5. Validate "Cypress" and "Selenium Webdriver" texts are visible
   * 6. Validate their texts are equal "Cypress" and "Selenium Webdriver"
   */
  cy.get('#ordered_list').prev().should('have.text','Ordered Lists').and('be.visible')
  .next().find('#ordered_list_item1').should('be.visible').and('have.text', 'Cypress')
  .next('#ordered_list_item2').should('be.visible').and('have.text', 'Selenium Webdriver');

  cy.get('#ordered_list_item1').should('be.visible').and('have.text', 'Cypress');
  cy.get('#ordered_list_item2').should('be.visible').and('have.text', 'Selenium Webdriver');
  })
  it("Implicit assertions Practices 04", () => {

    /**
     * 1. Go to 'https://techglobal-training.com/frontend'
     * 2. Click on the 'Html Elements' card
     * 3. From the "Links" section
     * 4. Validate "Links" heading text is visible and its equal to "Links"
     * 5. Validate "Facebook" and "Instagram" anchor tags are visible
     * 6. Validate "Facebook" and "Instagram" anchor tags are enabled
     * 6. Validate "Facebook" and "Instagram" anchor tags has "href" attribute
     * 6. Validate their texts are equal "Facebook" and "Instagram"
     */
    cy.get('#facebook_link').prev().should('be.visible').and('have.text', "Links");

    cy.get('#facebook_link').should('be.visible')
    .and('have.attr','href', 'https://www.facebook.com/techglobaleducation' )
    .and('have.text', 'Facebook');

    cy.get('#instagram_link').should('be.visible')
    .and('have.attr','href', 'https://www.instagram.com/techglobal.school/?hl=en' )
    .and('have.text', 'Instagram');
  })
  it("Implicit assertions Practices 05", () => {

    /**
   * 1. Go to 'https://techglobal-training.com/frontend'
   * 2. Click on the 'Html Elements' card
   * 3. From the "Checkboxes" section
   * 4. Validate "Tesla" checkbox text is equal to "Tesla"
   * 5. Validate "Tesla" checkbox is enabled
   * 6. Validate "Tesla" checkbox is not checked
   * 7. Check on "Tesla" checkbox
   * 8. Validate its checked
   */

cy.get('#company_dropdown1 > [value="Tesla"]').should('have.text', 'Tesla').and('be.enabled')
.and('not.be.checked');
cy.get('#company_dropdown1').select('Tesla');

cy.get('#tesla_check').should('have.text', 'Tesla').prev().and('be.enabled')
.and('not.be.checked').check();
  })
  it.skip("Implicit assertions Practices 06", () => {
      /**
     * Test Case: Validate Dropdowns Functionality on TechGlobal Training Page
     * Go to https://techglobal-training.com/frontend
     * Select the "Dropdowns" card
     * Select the "MacBook Pro 13" option from the "Product" dropdown.
     * Select the "Green" option from the "Color" dropdown.
     * Open the "Shipping" dropdown and click on the "Delivery" option.
     * Click on the "Submit" button.
     * Validate result message displays "Your Green MacBook Pro 13 will be delivered to you."
     */
    let product = "MacBook Pro 13";
    let color = "Green"
    let ship = "Delivery"
    const expectedMess = ship === "Delivery"    
    ? `Your ${color} ${product} will be delivered to you.`
    : `Your ${color} ${product} is ready to be picked up.`
    cy.get('#product_dropdown').select(product);
    cy.get('#color_dropdown').select(color);
    cy.get('#shipment_dropdown').click();
    cy.get(`[aria-label="${ship}"]`).click();
    cy.get('#submit').click();

    cy.get('#result').should('have.text', expectedMess)
  })
});
