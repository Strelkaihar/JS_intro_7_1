class TablesPage {
    getCompanyTableHeaders() {
        return cy.get('#static_table th')
    }
}
export default TablesPage;