class WishlistPage{

    goToWishList(){
        cy.visit(Cypress.config('rakutenBaseUrl') + '/wishlist')
    }

    isMovieAddedToWishlist(movieName){
        var movie = movieName.charAt(0).toUpperCase() + movieName .slice(1);
        cy.get('.artwork img').should("have.attr", "title", movie);
        cy.get(':nth-child(1) > .artwork > .artwork__actions--close > .icon__close').click();
    }
}

export default WishlistPage;