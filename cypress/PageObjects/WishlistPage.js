class WishlistPage{

    goToWishList(){
        cy.visit(Cypress.config('rakutenBaseUrl') + '/wishlist')
    }

    isMovieAddedToWishlist(movieName){
        cy.get('.list__item--movies a[href="/de/movies/cortex"]').should('be.visible');
        var movie = movieName.charAt(0).toUpperCase() + movieName .slice(1);
        cy.get('.artwork img').should("have.attr", "title", movie);
    }
}

export default WishlistPage;