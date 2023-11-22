// This is describe test block that holds group of tests
describe('My first test', () => {

    // This is individual test
    // it("Visit techglobal training app home page", () => {
    //     //visit wab page
    //     cy.visit("https://techglobal-training.com");
    //     cy.reload();
    //     cy.visit(`https://techglobal-training.com/frontend`);
    //     //Navigate back on the wab page
    //     // cy.go(`back`)
    //     cy.go(-1);

    //     //Navigate forward
    //     //cy.go("forward");
    //     cy.go(1);
    //     cy.title().should("eq", "Techglobal Training | Frontend Practice");
    //     cy.title().should("not.contain", "Igor");

    // });
    // it("My second test", () => {
    //     expect(true).equal(true)
    // })
    it('My third test LOGO', () => {
        cy.visit('https://techglobal-training.com')
        cy.get('#logo').should('be.visible').click()
        cy.get('#dropdown-button')
    })

})