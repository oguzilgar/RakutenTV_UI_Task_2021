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

    it('The user should be able to register', () => {
      homePage.clickRegisterButton();
      registerPage.isRegisterPageDisplayed();
      registerPage.insertEmailAndPassword(email, password);
      registerPage.clickCheckbox();
      registerPage.clickRegisterButton();
      homePage.isRegisteredSuccessfully(fullName);
    })
  });
});