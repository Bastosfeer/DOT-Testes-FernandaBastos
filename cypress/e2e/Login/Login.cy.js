/// <reference types="Cypress" />

describe('Testes Funcionais de Login', () => {

    it('Deve realizar o login com sucesso.', () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('contain', "Products");
    });

    it('Validando Login Incorreto.', () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('[data-test="username"]').type("standard_userr");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service");
    });

    it('Validar Senha Incorreta.', () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_saucee");
        cy.get('[data-test="login-button"]').click();
    });

});