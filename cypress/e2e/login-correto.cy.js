describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
  
    it('Preencher os campos de login corretamente e autenticar o usuário na página', () => {
    
    cy.get('[data-test="input-loginEmail"]').type('roberto@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();

  })
})


