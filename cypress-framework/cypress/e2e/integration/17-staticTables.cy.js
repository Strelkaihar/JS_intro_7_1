
import TablesPage from "../../pages/TablesPage";
const tablesPage = new TablesPage()

describe('Static Tables', () => {

    beforeEach(() => {
        cy.fixture('example').then(function(data) {
            this.headers = data.headers
        })
    })
   
    it('Verify the headers of the table',{tags: ['@smoke', '@regression']}, function() {
        cy.clickCard('Tables');    
    /**
   * TEST CASE 1
   * Verify the headers of the table
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
   */    
        tablesPage.getCompanyTableHeaders().each((el, index) => {
            cy.wrap(el).should('have.text', this.headers[index])
        })

    })
})