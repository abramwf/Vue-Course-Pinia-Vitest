// https://on.cypress.io/api

describe('Sanity Text', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('#header a:first-child', 'Music')
  })
})
