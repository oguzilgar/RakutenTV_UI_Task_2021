/// <reference types="cypress" />
import 'cypress-iframe';
import HomePage from '../../PageObjects/HomePage';
import LoginPage from '../../PageObjects/LoginPage';
import ContentDetailPage from '../../PageObjects/ContentDetailPage';
import DashboardPage from '../../PageObjects/DashboardPage';
import WishlistPage from '../../PageObjects/WishlistPage';

describe('Add content to wishlist test scenarios', () => {
    context('Wishlist tests', () => {
        beforeEach(() => {
            cy.clearCookies();
            cy.visit('https://www.rakuten.tv/');
            cy.isNavigatedToTheWebsite();
            cy.acceptCookies();
        })

        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const dashboardPage = new DashboardPage();
        const contentDetailPage = new ContentDetailPage();
        const wishlistPage = new WishlistPage();
        const credentials = Cypress.env('user');

        it('The user should be able to add a movie by using search box', () => {
            homePage.clickLoginButton();
            loginPage.insertEmailAndPassword(credentials.email, credentials.password);
            loginPage.clickSubmitButton();
            //loginPage.isLoggedInSuccessfully();
            cy.wait(3000);
            dashboardPage.searchMovie(credentials.searchMovie);
            contentDetailPage.isSearchedMovieDisplayed(credentials.searchMovie);
            contentDetailPage.clickAddToWishlistIcon();
            wishlistPage.goToWishList();
            wishlistPage.isMovieAddedToWishlist(credentials.searchMovie);

        });

    });
    });