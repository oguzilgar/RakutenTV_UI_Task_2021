/// <reference types="cypress" />
import 'cypress-iframe';
import HomePage from '../../PageObjects/HomePage';
import LoginPage from '../../PageObjects/LoginPage';

describe('Rakuten login test scenarios', () => {
  context('Login test', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.visit('https://www.rakuten.tv/');
      cy.isNavigatedToTheWebsite();
      cy.acceptCookies();
    })

    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const credentials = Cypress.env('user');

    it('The registered user should be able to login', () => {
      homePage.clickLoginButton();
      loginPage.insertEmailAndPassword(credentials.email, credentials.password);
      loginPage.clickSubmitButton();
      loginPage.isLoggedInSuccessfully();
    })

    it('The Not - registered user should not be able to login', () => {
      homePage.clickLoginButton();
      loginPage.insertEmailAndPassword(credentials.Invalid_email, credentials.password);
      loginPage.clickSubmitButton();
      loginPage.isWrongCredentialsMessageDisplayed();
    })
  });
});