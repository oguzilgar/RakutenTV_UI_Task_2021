class DashboardPage{
    
    searchMovie(movieName) {
        cy.get('.search__box__input').type(movieName);
        cy.get('.search__results > :nth-child(2)').should('be.visible');
        cy.get('.search__results > :nth-child(2)').click();
    }
}

export default DashboardPage;