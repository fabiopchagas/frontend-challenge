describe('Pre-Order Page', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 10000 })
  })

  it('should load the pre-order page successfully', () => {
    cy.get('.pre-order-view', { timeout: 10000 }).should('exist')

    cy.get('.pre-order-view__header-id-number', { timeout: 5000 }).should('be.visible')
    cy.get('.pre-order-view__header-details-buyer', { timeout: 5000 }).should('be.visible')
    cy.get('.pre-order-view__header-details-price', { timeout: 5000 }).should('be.visible')
  })

  it('should display pre-order information correctly', () => {
    cy.get('.pre-order-view__header-id-number', { timeout: 5000 }).should('not.be.empty')
    cy.get('.pre-order-view__header-details-buyer', { timeout: 5000 }).should('not.be.empty')

    cy.get('.pre-order-view__header-details-price', { timeout: 5000 }).should('not.be.empty')
    cy.get('.pre-order-view__header-details-status', { timeout: 5000 }).should('not.be.empty')
  })

  it('should display contact information', () => {
    cy.get('.app-loading', { timeout: 15000 }).should('not.exist')

    cy.get('.pre-order-view__header-details-item', { timeout: 5000 }).should(
      'have.length.at.least',
      1,
    )

    cy.contains('@', { timeout: 5000 }).should('be.visible')

    cy.get('.pre-order-view__header-details-item', { timeout: 5000 }).should('contain', '-')
  })

  it('should display supplier information', () => {
    cy.get('.pre-order-view__supplier', { timeout: 5000 }).should('be.visible')
  })

  it('should display addresses section', () => {
    cy.get('.app-accordion', { timeout: 5000 }).should('be.visible')
    cy.contains('Addresses', { timeout: 5000 }).should('be.visible')
  })
})
