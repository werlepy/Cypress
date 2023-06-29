//2 -  criar as açoes a page

<reference types="cypress" />

export default {
    accessLogin(){
        cy.visit('/')
            .get('#top_header')

            cy.get('.fa-user')
                .click()
    }
}