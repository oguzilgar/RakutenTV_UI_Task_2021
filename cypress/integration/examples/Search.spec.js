/// <reference types="cypress" />
import 'cypress-iframe';
import HomePage from '../../PageObjects/HomePage';
import LoginPage from '../../PageObjects/LoginPage';
import ContentDetailPage from '../../PageObjects/ContentDetailPage';
import DashboardPage from '../../PageObjects/DashboardPage';

describe('Search content test scenarios', () => {
    context('Search a movie tests', () => {
        beforeEach(() => {
            cy.clearCookies();
            cy.visit('https://www.rakuten.tv/');
            cy.isNavigatedToTheWebsite();
            cy.acceptCookies();
        })

        const homePage = new HomePage();
        const loginPage = new LoginPage();
        const contentDetailPage = new ContentDetailPage();
        const dashboardPage = new DashboardPage();
        const credentials = Cypress.env('user');

        it('The user should be able to search a movie', () => {
            homePage.clickLoginButton();
            loginPage.insertEmailAndPassword(credentials.email, credentials.password);
            loginPage.clickSubmitButton();
            loginPage.isLoggedInSuccessfully();
            dashboardPage.searchMovie(credentials.searchMovie);
            contentDetailPage.isSearchedMovieDisplayed(credentials.searchMovie);
        });

    });
});