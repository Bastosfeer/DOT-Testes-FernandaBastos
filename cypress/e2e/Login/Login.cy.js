/// <reference types="Cypress" />

describe('Testes Funcionais de Login', () => {
    beforeEach(() => {
        cy.visit("/");
        
    });

    it('Deve realizar o login com sucesso.', () => {
        
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce", {log: false});
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').should('contain', "Products");
    });

    it('Validando Login Incorreto.', () => {
        
        cy.get('[data-test="username"]').type("standard_userr");
        cy.get('[data-test="password"]').type("secret_sauce", {log: false});
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('contain', "Epic sadface: Username and password do not match any user in this service");
    });

    it('Validar Senha Incorreta.', () => {
        
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_saucee", {log: false});
        cy.get('[data-test="login-button"]').click();
    });

});