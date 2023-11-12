describe("CSS locators", ()=> {
    beforeEach(() => {
        cy.visit("https://techglobal-training.com/frontend/html-elements");
      })
    it("understanding CSS syntax", () => {
        cy.get("button");
        cy.get("h3");
        cy.get("li");
        cy.get("input")
    })
    it("understanding CSS syntax part 2", () => {
        cy.get("#hello_paragraph");
        cy.get("#testing_paragraph");

        cy.get("#microsoft_check");
        // cy.get("#c#_radio"); something wrong
    })
    it("understanding CSS syntax part 3 with > symbol", () => {
        cy.get("div >  #hello_paragraph");
        cy.get("div >  #testing_paragraph");
        cy.get("div > .is-flex > h3");
        cy.get("#radio-button-group > h3");
        cy.get("#radio-button-group > div > label > #radio_1_option_1")
    })
    it("understanding CSS syntax part 4 with > symbol", () => {
        cy.get("div >  #hello_paragraph");
        cy.get("div >  #testing_paragraph");
        cy.get("div > .is-flex > h3");
        cy.get("#radio-button-group > h3");
        cy.get("#radio-button-group > div > label > #radio_1_option_1");
    })
    it("understanding CSS syntax part 5 with descended element", () => {
        cy.get("#radio-button-group #radio_1_option_1");
        cy.get("#root #ordered_list_item1");
  
    })
    it("understanding CSS syntax part 6 with Adjacent Sibling Selector (+)", () => {
        cy.get("#checkbox-button-group > h3 ~ div");
        cy.get("#checkbox-button-group > h3 + div");
  
    })
    it("understanding CSS syntax part 6 with Grouping Selector (comma, ,)", () => {
        cy.get("button, input");
        cy.get("button, li, p");
        cy.get("#java_radio, #apple_check");
  
    })
    it("understanding CSS syntax part 6 with Attribute Selectors", () => {
        cy.get('[class="radio"] > input');

        cy.get('[class="radio"] input');
        /*
        => * example [class*="value"](contains)
        => ˆ example [classˆ="value"] (starts-with)
        => $ example [class$="value"](ends-with)
        */
    })
    // it("understanding CSS syntax ", () => {
    //     cy.visit("https://techglobal-training.com/frontend/dynamic-elements");
    //     cy.get("[id^='box_1']").should("be.visible");
    //     cy.get("[id^='box_2']").should("be.visible");
        
    // })
    it("CSS Pseudo-classes ", () => {
        cy.get("#ordered_list > li:first-child");
        cy.get("#ordered_list > li:last-child");
        cy.get("#ordered_list > li:nth-child(1)");
        cy.get("#checkbox_1").check();
        cy.get("input:checked");

        cy.visit('https://techglobal-training.com/js-exercises/js-output')
        cy.get('.explanation.content > p + ul > li:first-child')
    })
})
