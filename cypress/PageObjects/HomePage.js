class HomePage {
    isNavigatedToTheWebsite() {
        cy.title().should('eq', 'Rakuten TV - Tu cine en casa');
    }

    clickRegisterButton() {
        cy.get('[data-test-id="menu-desktop-register-link"]').should('have.text', 'Registrarse').click()
        cy.url().should('eq', Cypress.config('rakutenBaseUrl') + '/registrations/new');
    }

    isRegisteredSuccessfully(fullName) {
        cy.url().should('eq', Cypress.config('rakutenBaseUrl'));
        cy.get('.nav__items__user--logged').should('be.visible').then(() => {
            cy.get('.navmenu__parent--profile').should('be.visible');
        });
        cy.get('.navmenu__parent__anchor__text').contains(fullName).should('be.visible');
    }

    clickLoginButton() {
        cy.get('[data-test-id="menu-desktop-login-link"]').should('have.text', 'Entrar').click();
        cy.url().should('eq', Cypress.config('rakutenBaseUrl') + '/sessions/sign_in');
    }

}

export default HomePage;