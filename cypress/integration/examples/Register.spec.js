/// <reference types="cypress" />
import 'cypress-iframe';
import HomePage from '../../PageObjects/HomePage';
import RegisterPage from '../../PageObjects/RegisterPage';

describe('Rakuten register test scenarios', () => {
  context('New register', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.visit('https://www.rakuten.tv/');
      cy.isNavigatedToTheWebsite();
      cy.acceptCookies();
    })

    const homePage = new HomePage();
    const registerPage = new RegisterPage();
    const faker = require("faker");
    var fullName = faker.name.firstName() + faker.name.lastName()
    const email = fullName + '@rakuten.com';
    const password = 'Testing1234';
    const email_invalid = fullName + 'rakuten.com';
    const password_invalid = 'Testing1234?';

    it('The user should be able to register', () => {
      homePage.clickRegisterButton();
      registerPage.isRegisterPageDisplayed();
      registerPage.insertEmailAndPassword(email, password);
      registerPage.clickCheckbox();
      registerPage.clickRegisterButton();
      homePage.isRegisteredSuccessfully(fullName);
    })

    it('The user should not be able to register with Invalid credentials', () => {
      homePage.clickRegisterButton();
      registerPage.isRegisterPageDisplayed();
      registerPage.insertEmailAndPassword(email_invalid, password_invalid);
      registerPage.clickCheckbox();
      registerPage.clickRegisterButton();
      registerPage.isWrongCredentialsMessageDisplayed();
    })
  });
});