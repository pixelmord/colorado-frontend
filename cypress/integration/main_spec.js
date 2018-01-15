
describe('Kitchen Sink', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://localhost:8001')
    cy.title().should('include', 'Colorado')
  })
})