// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('isNavigatedToTheWebsite', () => {
  cy.title().should('include', 'Rakuten TV');
});

Cypress.Commands.add('acceptCookies', () => {
  cy.get('#gdpr-consent-tool-wrapper').should('be.visible');
  cy.get('#gdpr-consent-notice')
    .then(($iframe) => {
      const $body = $iframe.contents().find('body');

      cy.wrap($body)
        .find('.action-wrapper').contains('Accept All')
        .should('be.visible');

      cy.wrap($body)
        .find('.action-wrapper').contains('Accept All')
        .click();
    })

  cy.get('#gdpr-consent-tool-wrapper').should('not.exist');
  cy.get('#gdpr-consent-notice')
    .should('not.exist');
});