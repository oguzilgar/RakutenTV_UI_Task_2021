class RegisterPage {
    isRegisterPageDisplayed() {
        cy.get('.card--register').should('be.visible');
        cy.get('.card--login').should('not.be.visible').and('have.class', 'card--hidden');
        cy.get('.card--register .form__submit button').should('have.class', 'button--inactive');
    }

    insertEmailAndPassword(email, password) {
        cy.get('input[name="email"][type="email"]').type(email);
        cy.get('.card--register input.form__item__input[type="password"]').type(password);
    }

    clickCheckbox() {
        cy.get('#opt_in_register').click({ force: true });
        cy.get('#terms_check_register').click({ force: true });
        cy.get('.terms-conditions__link').should('have.text', 'Acepto las condiciones de uso, Acepto las Condiciones Contractuales, He leído la Política de Privacidad y la Política de Cookies.');
    }

    clickRegisterButton() {
        cy.get('.card--register .form__submit button').should('not.have.class', 'button--inactive').click();
    }

    isWrongCredentialsMessageDisplayed(){
        const warningText = "Credenciales no válidas";
        cy.get('.notifications__item__message').should('contain',warningText)
    }
}

export default RegisterPage;