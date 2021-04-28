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
            cy.log('ouztest')
            cy.log(txt.trim())
            if (txt.trim() == 'Zur Merkliste hinzufügen') {
                cy.get('.round-action--wishlist').should('not.have.class', 'round-action--active');
                cy.get('.round-action--wishlist > .round-action__text').should('contain', 'Zur Merkliste hinzufügen').click();//change contains
                cy.get('.round-action--wishlist').should('contain', 'Von der Merkliste entfernen');//change
                cy.get('.round-action--wishlist').should('have.class', 'round-action--active');
            } else {
              //Do Something 
            }
          })
    }

}
export default ContentDetailPage;