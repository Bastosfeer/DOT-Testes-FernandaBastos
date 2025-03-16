describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
        beforeEach(() => {
                cy.visit("/");
                
            });
        
        it('Fluxo da compra de produtos', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce", {log: false});
        cy.get('[data-test="login-button"]').click();
  

        // Ordenação de produtos de menor para maior valor:
        cy.get('[data-test="product-sort-container"]').select('Price (low to high)');

        // Validação da ordenação dos produtos
        cy.get(':nth-child(1) .inventory_item_description').should('contain', 'Sauce Labs Onesie');
        cy.get(':nth-child(2) .inventory_item_description').should('contain', 'Sauce Labs Bike Light');
        cy.get(':nth-child(3) .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt');

        // Adicionando produtos ao carrinho:
        cy.contains('Sauce Labs Onesie').click();
        cy.get('.btn_primary').should('be.visible').click();
        cy.get('[data-test="back-to-products"]').should('exist').and('be.visible').click();

        cy.contains('Sauce Labs Bike Light').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

        cy.contains('Sauce Labs Bolt T-Shirt').click();
        cy.get('.btn_primary').click();
        cy.get('[data-test="back-to-products"]').click();

// Checando a quantidade de produtos adicionados ao carrinho:
        cy.get('.shopping_cart_badge').should('have.text', '3');

// Indo até o carrinho:
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_list :nth-child(3)').should('contain', 'Sauce Labs Onesie');
        cy.get('.cart_list :nth-child(4)').should('contain', 'Sauce Labs Bike Light');
        cy.get('.cart_list :nth-child(5)').should('contain', 'Sauce Labs Bolt T-Shirt');

// Checkout:
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome');
        cy.get('[data-test="lastName"]').type('Teste Último Nome');
        cy.get('[data-test="postalCode"]').type('05656487');
        cy.get('[data-test="continue"]').click();

// Verificando produtos no checkout:
        cy.get('.cart_item').should('contain', 'Sauce Labs Onesie');
        cy.get('.cart_item').should('contain', 'Sauce Labs Bike Light');
        cy.get('.cart_item').should('contain', 'Sauce Labs Bolt T-Shirt');

// Checando o valor total:
        cy.get('.summary_total_label').should('contain', 'Total: $36.69');
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');

});

});