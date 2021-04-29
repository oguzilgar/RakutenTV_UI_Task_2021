class LoginPage {

    insertEmailAndPassword(email, password) {
        cy.get('.card--login input[name="email"]').type(email);
        cy.get('.card--login input[name="password"][type="password"]').type(password);
    }

    clickSubmitButton() {
        cy.get('.card--login .form__submit').as('submit').click();
        cy.get('.search__box__input').should('be.visible');
    }

    isLoggedIn() {
        cy.url().should('eq', Cypress.config('rakutenBaseUrl'));
    }

    isLoggedInSuccessfully() {
        cy.url().should('contain', Cypress.config('rakutenBaseUrl'));
        cy.get('.nav__items__user--logged').should('be.visible').then(() => {
        cy.get('.navmenu__parent--profile').should('be.visible');
        });
    }

    isWrongCredentialsMessageDisplayed(){
        const warningText = "Tu email o contraseña son incorrectos.";
        cy.get('.root__wrapper .notifications').should('contain',warningText)
    }
}

export default LoginPage;