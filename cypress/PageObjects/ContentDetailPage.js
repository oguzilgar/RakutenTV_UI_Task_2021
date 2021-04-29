class ContentDetailPage {

    isSearchedMovieDisplayed(expectedMovie) {
        cy.url().should('eq', Cypress.config('rakutenBaseUrl') + '/movies/' + expectedMovie);
        cy.get('.card > :nth-child(1) > :nth-child(5)').invoke('text').then((text) => {
            var actualMovie = text.split(': ')
            expect(expectedMovie.toLowerCase()).to.eq(actualMovie[1].toLowerCase())
        });
    }

    clickAddToWishlistIcon() {
        cy.get('.round-action--wishlist').invoke('text').then((txt) => {
            if (txt.trim() == 'Añadir a Quiero Ver') {
                cy.get('.round-action--wishlist').should('not.have.class', 'round-action--active');
                cy.get('.round-action--wishlist > .round-action__text').should('contain', 'Añadir a Quiero Ver').click();
                cy.get('.round-action--wishlist').should('contain', 'Quitar de Quiero Ver');
                cy.get('.round-action--wishlist').should('have.class', 'round-action--active');
            } 
          })
    }

}
export default ContentDetailPage;