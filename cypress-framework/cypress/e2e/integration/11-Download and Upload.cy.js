describe("Download and Upload", () => {

    it("File Download", () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('File Download & Upload');

//    * Go to https://techglobal-training.com/frontend/
//    * Click on the "File Download" card
//    * Click on the "TechGlobal School.pptx" file
//    * Validate the file is downloaded in your Downloads file
        cy.get('#file_download').click();
        cy.readFile('/Users/strelka/Desktop/JS_intro_7/cypress-framework/cypress/downloads/SampleText.txt')

    });
    it.only("File Upload", () => {
        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('File Download & Upload');
        // * Go to https://techglobal-training.com/frontend/
        // * Click on the "File Upload" card
        // * Send the path of the file as keys to the "Choose File" input box
        // * Click on the "UPLOAD" button
        // * Validate the result message equals "You Uploaded 'hello.txt'"

        cy.get('#file_upload').selectFile('/Users/strelka/Desktop/JS_intro_7/cypress-framework/cypress/downloads/SampleText.txt')
        cy.get('#file_submit').realClick()
        
        cy.get('.notification').should('have.text' , 'You uploaded SampleText.txt')
    })
});