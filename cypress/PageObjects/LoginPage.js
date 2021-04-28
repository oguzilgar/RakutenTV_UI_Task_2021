class LoginPage {

    insertEmailAndPassword(email, password) {
        cy.get('.card--login input[name="email"]').type(email);
        cy.get('.card--login input[name="password"][type="password"]').type(password);
    }

    clickSubmitButton() {
        cy.get('.card--login .form__submit').click();
    }

    isLoggedIn() {
        cy.url().should('eq', Cypress.config('rakutenBaseUrl'));
    }

    isLoggedInSuccessfully(fullName) {
        //cy.url().should('eq', Cypress.config('rakutenBaseUrl'));
        cy.get('.nav__items__user--logged').should('be.visible').then(() => {
            cy.get('.navmenu__parent--profile').should('be.visible');
        });
        //cy.get('.navmenu__parent__anchor__text').contains(fullName).should('be.visible');

    }
}

export default LoginPage;