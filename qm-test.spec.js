// test-qm.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />
require('@cypress/snapshot').register()
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('QM Kontakt Test', () => {
  it('Tests the kontakt page', () => {
    cy.visit('www.qualityminds.de/')
    cy.contains('Kontakt').click().snapshot()
    cy.contains('hello@qualityminds.de').should('exist')

  })
})
