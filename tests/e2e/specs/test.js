// https://docs.cypress.io/api/introduction/api.html

describe('Stepper test', () => {
  it('Visits the app roots url', () => {
      cy.visit('/');
      cy.get('.step-button.is-next').click()
      cy.visit('/step-2');
      cy.get('.step-button.is-next').click()
      cy.visit('/step-3');
      cy.get('.step-button.is-next').click()
      cy.visit('/step-4');
      cy.get('.step-button.has-margin-top').click()
      cy.visit('/orders');
      cy.get('#CO107341').click()
      cy.visit('/orders/CO107341');
      cy.get('.step-button.is-next').click()
      cy.visit('/step-5');
      cy.get('.step-button.is-prev').click()
      cy.visit('/step-4');
      cy.get('.step-button.is-prev').click()
      cy.visit('/step-3');
      cy.get('.step-button.is-prev').click()
      cy.visit('/step-2');
      cy.get('.step-button.is-prev').click()
      cy.visit('/');
  })
})
