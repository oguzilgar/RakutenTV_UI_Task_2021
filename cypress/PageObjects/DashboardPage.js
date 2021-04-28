class DashboardPage{
    
    searchMovie(movieName) {
        cy.get('.search__box__input').type(movieName);
        cy.wait(2000)
        cy.get('.search__results > :nth-child(2)').click();//check again, type and submit
        cy.url().should('eq', Cypress.config('rakutenBaseUrl') + '/movies/' + movieName);
    }
}

export default DashboardPage;