/// <reference types="cypress"/>

describe('Cypress Selectors', () => {
    it('Practice Web Elements using get and contains', () => {
        cy.visit('https://techglobal-training.com/frontend')

        //Locates the web element by its visual text
        cy.contains('Project')
        cy.get('.CardGrids_CardGrids__qDdyI').as('allCards')
        cy.get('@allCards')
        //return last element from multiply web elements
        cy.get('.cards').last()
         //return first element from multiply web elements
        cy.get('.cards').first()
    //return  element by index from multiply web elements
        cy.get('.cards').eq('8')
        //locates the web elements by its visual text on UI
        cy.contains('Html Elements')
        //
        cy.contains('.cards','Html Elements')
        // return card which is 1 of 1
        cy.get('@allCards').contains('Html Elements')
    })
    it('Practice Web Elements using get and contains', () => {

        cy.visit('https://techglobal-training.com/frontend')

        cy.contains('.cards','Html Elements').click()
        //When we do this we try to locate web element with "Paragraphs" name
        cy.get('div').contains('Paragraphs')
        cy.get('#radio-button-group div')
        cy.get('#radio-button-group').find('div')

    })
    it('Practice Web Elements using next() and prev()', () => {

        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('.cards','Html Elements').click()
        // next() - locates next sibling of a web element
        cy.get('div').contains('Paragraphs').next()
        //nextAll() - locates all siblings of a web element
        cy.get('div').contains('Paragraphs').nextAll()
        //prev() - locates prev siblings of a web element
        cy.get('#testing_paragraph').prev()
    //prev() - locates prev siblings of a web element
        cy.get('#testing_paragraph').prevAll()

        cy.get('#checkbox-button-group').next().find('div').first().find('input').parent().parent().parent().prev()
    })
})